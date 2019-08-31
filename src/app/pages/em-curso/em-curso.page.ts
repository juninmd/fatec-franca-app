import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-em-curso',
  templateUrl: './em-curso.page.html',
  styleUrls: ['./em-curso.page.scss']
})
export class EmCursoPage implements OnInit {
  constructor(private fatecFrancaApiService: FatecFrancaApiService, private nav: NavController) {}

  disciplines: any = [];

  async ngOnInit() {
    const {
      data: { enrolledDisciplines }
    } = await this.fatecFrancaApiService.getDisciplines();

    this.disciplines = enrolledDisciplines;
  }
}
