import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';
import { NgForm } from '@angular/forms';
import { NavController, AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fatecFrancaApiService: FatecFrancaApiService,
    // tslint:disable-next-line: align
    private nav: NavController,
    // tslint:disable-next-line: align
    public alertController: AlertController,
    private menu: MenuController) {
  }

  version = '0.0.6';
  saveLogin = localStorage.getItem('saveLogin') === 'true';

  ngOnInit() {
    this.menu.enable(false);

    // Caso tenha marcado para salvar o login
    if (localStorage.getItem('saveLogin') !== null &&
      localStorage.getItem('session') !== null &&
      localStorage.getItem('login') !== null) {
      this.menu.enable(true);
      this.nav.navigateRoot('/home');
    }
    else {
      localStorage.removeItem('session');
      localStorage.removeItem('login');
    }
  }

  async login(form: NgForm) {
    try {
      const response = await this.fatecFrancaApiService.login(form.value);

      localStorage.setItem('session', JSON.stringify(response.data));
      localStorage.setItem('login', JSON.stringify(form.value));

      this.menu.enable(true);
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

  esqueceu() {
    window.open('https://siga.cps.sp.gov.br/aluno/login.aspx', '_blank');
  }

  lembrarLogin() {
    if (!this.saveLogin) {
      localStorage.setItem('saveLogin', 'true');
    } else {
      localStorage.removeItem('saveLogin');
    }
  }
}
