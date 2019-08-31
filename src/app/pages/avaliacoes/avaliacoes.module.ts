import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvaliacoesPage } from './avaliacoes.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliacoesPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [AvaliacoesPage]
})
export class AvaliacoesPageModule {}
