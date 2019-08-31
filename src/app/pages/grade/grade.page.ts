import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.page.html',
  styleUrls: ['./grade.page.scss']
})
export class GradePage implements OnInit {
  constructor(private fatecFrancaApiService: FatecFrancaApiService, private nav: NavController) {}

  semesters: any = [];

  async ngOnInit() {
    const {
      data: { schoolGrade }
    } = await this.fatecFrancaApiService.getSchoolGrade();

    this.semesters = schoolGrade.semesters;
  }
}
