import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class FatecFrancaApiService {

  constructor(public loadingController: LoadingController,
    // tslint:disable-next-line: align
    public alertController: AlertController,
    // tslint:disable-next-line: align
    public navController: NavController,
    public sessionService: SessionService) {
  }

  private loader: HTMLIonLoadingElement;

  async login(params: any) {
    return this.request({ params, url: 'login', validate: false });
  }

  async getName() {
    return this.request({ url: 'name' });
  }

  async getProfile() {
    return this.request({ url: 'profile' });
  }

  async getAcademicCalendar() {
    return this.request({ url: 'academic-calendar' });
  }

  async getSchoolGrade() {
    return this.request({ url: 'school-grade' });
  }

  async getHistory() {
    return this.request({ url: 'history' });
  }

  async getSchedules() {
    return this.request({ url: 'schedules' });
  }

  async getRegisteredEmails() {
    return this.request({ url: 'emails' });
  }

  async getPartialGrades() {
    return this.request({ url: 'partialgrades' });
  }

  async getDisciplines() {
    return this.request({ url: 'disciplines' });
  }

  /**
   * Método responsável por centralizar todos os requests.
   * @param axiosConfig Param
   */
  async request(axiosConfig: AxiosRequestConfig & { validate?: boolean }, retry = 0): Promise<any> {
    try {
      axiosConfig.validate = axiosConfig.validate === undefined ? true : false;
      axiosConfig.baseURL = environment.fatecApi.baseUrl;
      axiosConfig.headers = this.sessionService.isLoggedIn() ? { Authorization: this.sessionService.getAuth() } : {};
      axiosConfig.method = axiosConfig.method || 'get';
      await this.showPreloader();
      const response = await (axios.request(axiosConfig));
      await this.hidePreloader();
      return response;
    } catch (error) {
      await this.hidePreloader();

      if (axiosConfig.validate) {
        if (error.response) {
          if (error.response.status === 500) {
            await this.responseInternalError();
          }

          if (error.response.status === 401) {
            if (retry >= 1 || localStorage.getItem('login') === null) {
              return await this.responseNotAuthorized();
            }

            // Tenta renovar o login
            const responseLogin = await this.login(JSON.parse(localStorage.getItem('login')));
            localStorage.setItem('session', JSON.stringify(responseLogin.data));
            return await this.request(axiosConfig, 1);
          }
        }

      }

      throw error;
    }
  }

  private async showPreloader() {
    try {
      this.loader = await this.loadingController.create({
        message: 'Carregando...',
        spinner: 'crescent'
      });

      await this.loader.present();
    } catch {
    }
  }

  private async hidePreloader() {
    try {
      await this.loader.dismiss();
    } catch {
    }
  }

  private async responseInternalError() {
    const alert = await this.alertController.create({
      header: 'Falha no sistema!',
      message: 'Ocorreu um erro inesperado...',
      buttons: ['OK']
    });

    await alert.present();
    await alert.onDidDismiss();
  }

  private async responseNotAuthorized() {
    const alert = await this.alertController.create({
      header: 'Sua sessão expirou!',
      subHeader: 'Precisamos fazer um novo login',
      message: 'Vamos te redirecionar...',
      buttons: ['OK']
    });

    await alert.present();
    await alert.onDidDismiss();
    this.navController.navigateRoot('login');
  }
}
