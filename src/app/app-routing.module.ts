import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'parque',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'parque',
   loadChildren: './parque/parque.module#ParquePageModule' },
  { 
    path: 'dashboard',
   loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'add-article', loadChildren: './add-article/add-article.module#AddArticlePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'map-add-article', loadChildren: './map-add-article/map-add-article.module#MapAddArticlePageModule' },
  { path: 'calificacion', loadChildren: './calificacion/calificacion.module#CalificacionPageModule' },
  { path: 'add-article-point', loadChildren: './add-article-point/add-article-point.module#AddArticlePointPageModule' },
  { path: 'add-article-polygon', loadChildren: './add-article-polygon/add-article-polygon.module#AddArticlePolygonPageModule' },
  { path: 'add-article-line', loadChildren: './add-article-line/add-article-line.module#AddArticleLinePageModule' },
  { path: 'map-article-line', loadChildren: './map-article-line/map-article-line.module#MapArticleLinePageModule' },
  { path: 'map-article-polygon', loadChildren: './map-article-polygon/map-article-polygon.module#MapArticlePolygonPageModule' },
  { path: 'map-article-point', loadChildren: './map-article-point/map-article-point.module#MapArticlePointPageModule' },
 
  { path: 'agergar-article-line', loadChildren: './agergar-article-line/agergar-article-line.module#AgergarArticleLinePageModule' },


 // { path: 'map-add-article/:idTipo,', loadChildren: './map-add-article/map-add-article.module#MapAddArticlePageModule' }
  //{ path: 'personas/:id', component: MiComponente },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
