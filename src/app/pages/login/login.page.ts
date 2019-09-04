import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fatecFrancaApiService: FatecFrancaApiService, private nav: NavController) {
  }


  ngOnInit() {
    (window as any).global = window;
  }

  async login(form: NgForm) {
    try {
      const response = await this.fatecFrancaApiService.login(form.value);

      localStorage.setItem('cookie', response.data.token);

      this.nav.navigateRoot('/home');
    } catch (error) {
      throw error;
    }
  }
}
