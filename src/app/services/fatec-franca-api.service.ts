import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoadingController, AlertController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FatecFrancaApiService {
  constructor(public loadingController: LoadingController,
    // tslint:disable-next-line: align
    public alertController: AlertController,
    // tslint:disable-next-line: align
    public navController: NavController) {


    this.interceptor();
  }

  loader: HTMLIonLoadingElement;

  public async showPreloader() {
    this.loader = await this.loadingController.create({
      message: 'Carregando...',
      spinner: 'crescent'
    });
    await this.loader.present();
  }

  public async hidePreloader() {
    await this.loader.dismiss();
  }

  private async interceptor() {

    axios.interceptors.request.use(async (config) => {
      await this.showPreloader();
      return config;
    }, async (error) => {
      await this.hidePreloader();
      return Promise.reject(error);
    });

    axios.interceptors.response.use(async (response) => {
      await this.hidePreloader();
      return response;
    }, async (error) => {
      // tslint:disable-next-line: no-debugger
      await this.hidePreloader();

      if (error.response.status === 401) {
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

      return Promise.reject(error);
    });
  }

  async login(params: any) {
    return axios.get('login', { params });
  }

  async getName() {
    return axios.get('name');
  }

  async getProfile() {
    return axios.get('profile');
  }

  async getAcademicCalendar() {
    return axios.get('academic-calendar');
  }

  async getSchoolGrade() {
    return axios.get('school-grade');
  }

  async getHistory() {
    return axios.get('history');
  }

  async getSchedules() {
    return axios.get('schedules');
  }

  async getRegisteredEmails() {
    return axios.get('emails');
  }

  async getPartialGrades() {
    return axios.get('partialgrades');
  }

  async getDisciplines() {
    return axios.get('disciplines');
  }
}
