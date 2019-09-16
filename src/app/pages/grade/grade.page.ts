import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.page.html',
  styleUrls: ['./grade.page.scss']
})
export class GradePage implements OnInit {
  constructor(private fatecFrancaApiService: FatecFrancaApiService, private nav: NavController) { }

  semesters: any = [];
  status: any = {
    aprovado: 0,
    cursando: 0,
    reprovado: 0,
    dispensado: 0,
    naoCursando: 0
  };

  async ngOnInit() {
    const {
      data: { schoolGrade }
    } = await this.fatecFrancaApiService.getSchoolGrade();

    for (const semester of schoolGrade.semesters) {
      for (const discipline of semester.disciplines) {

        if (discipline.state === 'approved') {
          this.status.aprovado += 1;
        }

        if (discipline.state === 'dismissed') {
          this.status.dispensado += 1;
        }

        if (discipline.state === 'attending') {
          this.status.cursando += 1;
        }

        if (discipline.state === 'not-attended') {
          this.status.naoCursando += 1;
        }

        if (discipline.state === 'not-attended') {
          this.status.naoCursando += 1;
        }

        if (discipline.state === 'quited') {
          this.status.reprovado += 1;
        }

      }

    }

    this.semesters = schoolGrade.semesters.map((x: any) => {
      x.disciplines = x.disciplines.map((d: any) => {
        d.color = d.state === 'approved' ?
          'success' : d.state === 'dismissed' ?
            'success' : d.state === 'attending' ?
              'tertiary' : d.state === 'not-attended' ?
                'light' : 'danger';

        d.status = d.state === 'approved' ?
          'Aprovado' : d.state === 'dismissed' ?
            'Dispensado' : d.state === 'attending' ?
              'Cursando' : d.state === 'not-attended' ?
                'Não Cursando' : 'Reprovado';
        return d;
      });
      return x;
    });
  }
}
