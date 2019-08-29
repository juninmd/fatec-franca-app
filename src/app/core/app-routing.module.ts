import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: '../pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: '../pages/home/home.module#HomePageModule' },
  { path: 'aulas', loadChildren: '../pages/aulas/aulas.module#AulasPageModule' },
  { path: 'perfil', loadChildren: '../pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'noticias', loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
