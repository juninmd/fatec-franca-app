import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private fatecFrancaApiService: FatecFrancaApiService) { }

  schedulesToday: any = {};
  schedules: any = [];
  tab = 1;
  weekday = moment().format('dddd');

  async ngOnInit() {
    const {
      data: { schedules }
    } = await this.fatecFrancaApiService.getSchedules();

    const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    const toDay = new Date().getDay();
    this.schedulesToday = schedules.find((q: any) => q.weekday === toDay);
    this.schedules = schedules.map((x: any) => {
      x.isToday = x.weekday === toDay;
      x.day = days[x.weekday];
      return x;
    });
  }

  handleTab(tab: number) {
    this.tab = tab;
  }
}
