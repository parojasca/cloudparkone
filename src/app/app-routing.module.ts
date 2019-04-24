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
  { path: 'map-add-article', loadChildren: './map-add-article/map-add-article.module#MapAddArticlePageModule' },  { path: 'calificacion', loadChildren: './calificacion/calificacion.module#CalificacionPageModule' },

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
