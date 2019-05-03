import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

import {AddArticlePageModule} from './add-article/add-article.module'

import { HttpClientModule } from "@angular/common/http";
import { AddArticleLinePageModule } from './add-article-line/add-article-line.module';
  
import { AddArticlePolygonPageModule } from './add-article-polygon/add-article-polygon.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
   ChartsModule
   ,    AddArticlePageModule,
   AddArticleLinePageModule,
   AddArticlePolygonPageModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
