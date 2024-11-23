import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import path from 'path';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'geff-portfolio',
        pathMatch: 'full'
      },
      {
        path: 'geff-portfolio',
        loadChildren: () => import('./pages/components/home-page/home-page.module').then(m => m.HomePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
