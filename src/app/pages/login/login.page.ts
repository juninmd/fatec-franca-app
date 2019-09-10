import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';
import { NgForm } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private fatecFrancaApiService: FatecFrancaApiService,
    // tslint:disable-next-line: align
    private nav: NavController,
    // tslint:disable-next-line: align
    public alertController: AlertController) {
  }

  async login(form: NgForm) {
    try {
      const response = await this.fatecFrancaApiService.login(form.value);

      localStorage.setItem('token', response.data.token);

      this.nav.navigateRoot('/home');
    } catch (error) {

      const alert = await this.alertController.create({
        header: 'Não autorizado',
        message: 'Usuário/Senha Inválido!',
        buttons: ['OK']
      });

      await alert.present();
      await alert.onDidDismiss();
      throw error;
    }
  }
}
