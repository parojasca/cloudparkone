
import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Observable, pairs } from "rxjs";
import { HttpClient } from "@angular/common/http";
declare var google: any;

import { ParqueService } from "./parque.service";
import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  MarkerOptions,
  GoogleMapsAnimation,
  MyLocation,
  HtmlInfoWindow,
  BaseArrayClass,
  ILatLng,
  LatLng
} from '@ionic-native/google-maps';

import { AddArticleLinePage } from '../add-article-line/add-article-line.page';
import { AddArticlePolygonPage } from '../add-article-polygon/add-article-polygon.page';
import { AddArticlePointPage } from '../add-article-point/add-article-point.page';

@Component({
  selector: 'app-parque',
  templateUrl: './parque.page.html',
  styleUrls: ['./parque.page.scss'],
})

export class ParquePage implements OnInit {
  paises: any[] = [];
  POINTS: any[] = [];
  map: GoogleMap;
  loading: any;

  tipoArticulo: String
  articulo: String
  descripcion: String

  //,public modalController: ModalController
  constructor(public alertController: AlertController,
    public modalController: ModalController,
    public zone: NgZone,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform,
    private navCtrl: NavController,
    private servicoPaises: ParqueService
  ) {




  }


  async ngOnInit() {
    const alert = await this.alertController.create({
      header: 'Bienvenido a tu app',
      message: 'esta app nos ayudara a cuidar los recursos naturales y fisicos que tiene el estado. Ayudanos a cuidar lo de todos.',
     buttons: ['Siguiente']
    });

    await alert.present();
    await this.platform.ready();
    await this.loadMap();
    }

    loadMap() {
      this.map = GoogleMaps.create('map_canvas', {
        controls:{
          myLocationButton:true
        },
        camera: {
          target: {
            lat: 4.645796,
            lng: -74.088352
           
          },
          zoom: 11,
          tilt: 30
        },
        
      });
  
    }
//Ubicarme
async onButtonClick() {
  this.map.clear();

  this.loading = await this.loadingCtrl.create({
    message: 'Please wait...'
  });
  await this.loading.present();

  // Get the location of you
  this.map.getMyLocation().then((location: MyLocation) => {
    this.loading.dismiss();
    console.log(JSON.stringify(location, null ,2));

    // Move the map camera to the location with animation
    this.map.animateCamera({
      target: location.latLng,
      zoom: 17,
      tilt: 30
    });

    // add a marker
    let marker: Marker = this.map.addMarkerSync({
      title: '@ionic-native/google-maps plugin!',
      snippet: 'This plugin is awesome!',
      position: location.latLng,
      draggable: true,
      animation: GoogleMapsAnimation.BOUNCE
    });

    // show the infoWindow
    marker.showInfoWindow();

    // If clicked it, display the alert
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.showToast('clicked!');
    });
  })
  .catch(err => {
    this.loading.dismiss();
    this.showToast(err.error_message);
  });
}

async showToast(message: string) {
  let toast = await this.toastCtrl.create({
    message: message,
    duration: 2000,
    position: 'middle'
  });

  toast.present();
}

  async presentModalPoint() {
    const modal = await this.modalController.create({
      component: AddArticlePointPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
 async presentLine(){
  const modal1 =await this.modalController.create({
    component:AddArticleLinePage,
    componentProps: { value: 123 }
  });
  return await modal1.present();
}
async presentPolygon(){
  const modal2 =await this.modalController.create({
component:AddArticlePolygonPage,
componentProps: { value: 123 }
  });
  return await modal2.present();
}

}