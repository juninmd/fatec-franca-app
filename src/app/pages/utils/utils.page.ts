import { Component, OnInit } from '@angular/core';
import { FatecFrancaApiService } from 'src/app/services/fatec-franca-api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-utils',
  templateUrl: './utils.page.html',
  styleUrls: ['./utils.page.scss']
})
export class UtilsPage implements OnInit {
  constructor(private nav: NavController) { }

  async ngOnInit() {
  }

  openLink(link) {
    window.open(link, '_blank')
  }
}
