import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapArticleLinePage } from './map-article-line.page';

const routes: Routes = [
  {
    path: '',
    component: MapArticleLinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapArticleLinePage]
})
export class MapArticleLinePageModule {}
