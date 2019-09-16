import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';
import * as moment from 'moment';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private afMessaging: AngularFireMessaging, private fatecFrancaApiService: FatecFrancaApiService) { }

  schedulesToday: any = {};
  schedules: any = [];
  tab = 1;
  weekday = moment().format('dddd');

  async ngOnInit() {
    const {
      data: { schedules }
    } = await this.fatecFrancaApiService.getSchedules();

    const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    // Domingo
    schedules.push({
      weekday: 0,
      periods: []
    })

    const toDay = new Date().getDay();
    this.schedulesToday = schedules.find((q: any) => q.weekday === toDay);

    this.schedules = schedules.map((x: any) => {
      x.isToday = x.weekday === toDay;
      x.day = days[x.weekday];
      return x;
    });
  
    this.requestPushNotificationsPermission();
  }

  handleTab(tab: number) {
    this.tab = tab;
  }

  requestPushNotificationsPermission() {
    this.afMessaging.requestToken
      .subscribe(
        (token) => {
          console.log('Permission granted! Save to the server!', token);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
