import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: '../pages/login/login.module#LoginPageModule',
  },
  {
    path: 'home',
    loadChildren: '../pages/home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'em-curso',
    loadChildren: '../pages/em-curso/em-curso.module#EmCursoPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'avaliacoes',
    loadChildren: '../pages/avaliacoes/avaliacoes.module#AvaliacoesPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'grade',
    loadChildren: '../pages/grade/grade.module#GradePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'util',
    loadChildren: '../pages/utils/utils.module#UtilsPageModule',
    canActivate: [AuthGuard]
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
