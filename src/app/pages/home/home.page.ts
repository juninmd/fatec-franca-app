import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private fatecFrancaApiService: FatecFrancaApiService, private nav: NavController) { }

  schedulesToday: any = {};
  schedules: any = [];
  tab = 1;
  weekday = moment().format('dddd');

  async ngOnInit() {
    const {
      data: { schedules }
    } = await this.fatecFrancaApiService.getSchedules();

    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const toDay = new Date().getDay();
    this.schedulesToday = schedules.find(q => q.weekday === toDay);
    this.schedules = schedules.map((x) => {
      x.isToday = x.weekday === toDay;
      x.day = days[x.weekday];
      return x;
    });
  }

  handleTab(tab: number) {
    this.tab = tab;
  }
}
