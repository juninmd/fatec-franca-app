import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';

@Component({
  selector: 'app-em-curso',
  templateUrl: './em-curso.page.html',
  styleUrls: ['./em-curso.page.scss']
})
export class EmCursoPage implements OnInit {
  constructor(private fatecFrancaApiService: FatecFrancaApiService) { }

  disciplines: any = [];

  async ngOnInit() {
    const {
      data: { enrolledDisciplines }
    } = await this.fatecFrancaApiService.getDisciplines();

    this.disciplines = enrolledDisciplines;
  }
}
