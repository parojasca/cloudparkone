import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.page.html',
  styleUrls: ['./calificacion.page.scss'],
})
export class CalificacionPage implements OnInit {

  constructor( private navCtrl: NavController, ) { }

  ngOnInit() {
  }
  navMapa(){
  
    this.navCtrl.navigateForward('calificacion')
   
  }
}
