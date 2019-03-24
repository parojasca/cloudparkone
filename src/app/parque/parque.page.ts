import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {AddArticlePage} from '../add-article/add-article.page'
@Component({
  selector: 'app-parque',
  templateUrl: './parque.page.html',
  styleUrls: ['./parque.page.scss'],
})
export class ParquePage implements OnInit {
//,public modalController: ModalController
  constructor(public alertController: AlertController,public modalController: ModalController) { }

  async ngOnInit() {
    const alert = await this.alertController.create({
      header: 'Bienvenido a tu app',
      message: 'esta app nos ayudara a cuidar los recursos naturales y fisicos que tiene el estado. Ayudanos a cuidar lo de todos.',
     buttons: ['Siguiente']
    });

    await alert.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddArticlePage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  locali:string;


  parques=[
    {
      localidad : "Engativa",
      parque : "la clara",
      
    },
  
    {
      localidad : "Usaquén",
      parque : "Brasilia",
      
    },
    {
      localidad : "Chapinero",
      parque : "Los Hippes",
      
    },
    {
      localidad : "Santa Fe",
      parque : "Lima",
     
    },
    {
      localidad : "Kennedy",
      parque : "Caracas",
      
    },
  ]
}
