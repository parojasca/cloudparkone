import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-parque',
  templateUrl: './parque.page.html',
  styleUrls: ['./parque.page.scss'],
})
export class ParquePage implements OnInit {

  constructor(public alertController: AlertController) { }

  async ngOnInit() {
    const alert = await this.alertController.create({
      header: 'Bienvenido a tu app',
      message: 'esta app nos ayudara a cuidar los recursos naturales y fisicos que tiene el estado. Ayudanos a cuidar lo de todos.',
     buttons: ['Siguiente']
    });

    await alert.present();
  }

  async about() {
    let alert = await this.alertController.create({
     
      header: 'This is a subtitle',
      cssClass: 'custom-alertDanger',
      message: `<p>This is a message </p>`, 
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {}}]});
          await alert.present();
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
