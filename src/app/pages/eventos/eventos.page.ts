import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss']
})
export class EventosPage implements OnInit {
  constructor(private fatecFrancaApiService: FatecFrancaApiService, private nav: NavController) { }

  academicCalendar: any = [];

  async ngOnInit() {
    const {
      data: { academicCalendar }
    } = await this.fatecFrancaApiService.getAcademicCalendar();

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
      'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
      'Outubro', 'Novembro', 'Dezembro'];

    this.academicCalendar = {
      months: academicCalendar.months.map((q, i) => {
        q.name = meses[i];
        return q;
      })
    };
  }
}
