import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss']
})
export class EventosPage implements OnInit {
  constructor(private fatecFrancaApiService: FatecFrancaApiService) { }

  academicCalendar: any = [];
  currentCalendar: any = {};
  tab = 1;

  async ngOnInit() {
    const {
      data: { academicCalendar }
    } = await this.fatecFrancaApiService.getAcademicCalendar();

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
      'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
      'Outubro', 'Novembro', 'Dezembro'];


    const myMonth = new Date().getMonth();
    
    this.currentCalendar = {
      name: meses[myMonth],
      month: academicCalendar.months[myMonth]
    };

    this.academicCalendar = {
      months: academicCalendar.months.map((q: any, i: any) => {
        q.name = meses[i];
        return q;
      })
    };
  }

  handleTab(tab: number) {
    this.tab = tab;
  }
}
