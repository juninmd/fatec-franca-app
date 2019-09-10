import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.page.html',
  styleUrls: ['./avaliacoes.page.scss']
})
export class AvaliacoesPage implements OnInit {
  constructor(private fatecFrancaApiService: FatecFrancaApiService, private nav: NavController) { }

  partialGrades: any = [];

  async ngOnInit() {
    const {
      data: { partialGrades }
    } = await this.fatecFrancaApiService.getPartialGrades();

    this.partialGrades = partialGrades;
  }
}
