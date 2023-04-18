import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module')
        .then(module => module.HomeModule),
    pathMatch: 'full',
    title: 'F&MD - Homepage'
  },
  {
    path: 'theme',
    loadChildren: () => import('./pages/theme/theme.module')
        .then(module => module.ThemeModule),
    pathMatch: 'full',
    title: 'F&MD - Tema'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
