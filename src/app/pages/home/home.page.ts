import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private fatecFrancaApiService: FatecFrancaApiService, private nav: NavController) { }

  private schedule = {};

  async ngOnInit() {
    const { data: { schedules } } = await this.fatecFrancaApiService.getSchedules();

    const toDay = new Date().getDay();
    this.schedule = schedules.find((q) => q.weekday === toDay);
  }

}
