import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgergarArticleLinePage } from './agergar-article-line.page';

const routes: Routes = [
  {
    path: '',
    component: AgergarArticleLinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgergarArticleLinePage]
})
export class AgergarArticleLinePageModule {}
