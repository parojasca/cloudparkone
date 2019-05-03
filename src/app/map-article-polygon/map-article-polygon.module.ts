import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapArticlePolygonPage } from './map-article-polygon.page';

const routes: Routes = [
  {
    path: '',
    component: MapArticlePolygonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapArticlePolygonPage]
})
export class MapArticlePolygonPageModule {}
