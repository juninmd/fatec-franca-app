import axios, { AxiosRequestConfig } from 'axios';
import { isLoggedIn, getAuth } from './auth.util';
import { LoadingController, AlertController, NavController } from '@ionic/angular';

export default class RequestUtil {

  constructor(public loadingController: LoadingController,
    // tslint:disable-next-line: align
    public alertController: AlertController,
    // tslint:disable-next-line: align
    public navController: NavController) {
  }

  private loader: HTMLIonLoadingElement;

  /**
   * Método responsável por centralizar todos os requests.
   * @param axiosConfig Param
   */
  async request(axiosConfig: AxiosRequestConfig): Promise<any> {
    try {

      axiosConfig.headers = isLoggedIn() ? { Authorization: getAuth() } : {};
      axiosConfig.method = axiosConfig.method || 'get';
      this.showPreloader();
      const response = await (axios.request(axiosConfig));
      return response.data;
    } catch (error) {

      if (error.response.status === 500) {
        await this.responseInternalError();
      }

      if (error.response.status === 401) {
        await this.responseNotAuthorized();
      }

      throw error;
    } finally {
      await this.hidePreloader();
    }
  }


  private async showPreloader() {
    this.loader = await this.loadingController.create({
      message: 'Carregando...',
      spinner: 'crescent'
    });
    await this.loader.present();
  }

  private async hidePreloader() {
    await this.loader.dismiss();
  }

  private async responseInternalError() {
    const alert = await this.alertController.create({
      header: 'Sua sessão expirou!',
      subHeader: 'Precisamos fazer um novo login',
      message: 'Vamos te redirecionar...',
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
