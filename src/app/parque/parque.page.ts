
import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { AlertController,ModalController } from '@ionic/angular';

import {AddArticlePage} from '../add-article/add-article.page'
import {Geolocation} from '@ionic-native/geolocation/ngx';
declare var google: any;

@Component({
  selector: 'app-parque',
  templateUrl: './parque.page.html',
  styleUrls: ['./parque.page.scss'],
})

export class ParquePage implements OnInit {

  @ViewChild('Map') mapElement: ElementRef;
  map: any;
  mapOptions: any;
  location = {lat: null, lng: null};
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
  apiKey: any = 'AIzaSyAjTjGIunMIKzq8jybWY-cm4d1N9-4-dGQ'; /*Your API Key*/


//,public modalController: ModalController
  constructor(public alertController: AlertController,
    public modalController: ModalController,
    public zone: NgZone,
    public geolocation: Geolocation) {
  }
     

  async ngOnInit() {
    const alert = await this.alertController.create({
      header: 'Bienvenido a tu app',
      message: 'esta app nos ayudara a cuidar los recursos naturales y fisicos que tiene el estado. Ayudanos a cuidar lo de todos.',
     buttons: ['Siguiente']
    });

    await alert.present();

    
      /*load google map script dynamically */
      const script = document.createElement('script');
      script.id = 'googleMap';
      if (this.apiKey) {
          script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
      } else {
          script.src = 'https://maps.googleapis.com/maps/api/js?key=';
      }
      document.head.appendChild(script);
      /*Get Current location*/
      this.geolocation.getCurrentPosition().then((position) =>  {
          this.location.lat = position.coords.latitude;
          this.location.lng = position.coords.longitude;
      });
      /*Map options*/
      this.mapOptions = {
          center: this.location,
          zoom: 19,
          mapTypeControl: false,
          fullscreenControl: false
      };
      setTimeout(() => {
          this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
          /*Marker Options*/
          this.markerOptions.position = this.location;
          this.markerOptions.map = this.map;
          this.markerOptions.title = 'My Location';
          this.marker = new google.maps.Marker(this.markerOptions);
      }, 3000);
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
