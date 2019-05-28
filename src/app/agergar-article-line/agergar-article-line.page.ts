import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
@Component({
  selector: 'app-agergar-article-line',
  templateUrl: './agergar-article-line.page.html',
  styleUrls: ['./agergar-article-line.page.scss'],
})
export class AgergarArticleLinePage implements OnInit {


  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  navMapa(){
    
    this.navCtrl.navigateForward('map-article-line')
   
  }
}
