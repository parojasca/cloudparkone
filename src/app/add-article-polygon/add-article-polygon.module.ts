import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddArticlePolygonPage } from './add-article-polygon.page';

const routes: Routes = [
  {
    path: '',
    component: AddArticlePolygonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddArticlePolygonPage]
})
export class AddArticlePolygonPageModule {}
