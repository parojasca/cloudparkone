
import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { AlertController,ModalController,NavController } from '@ionic/angular';

import {AddArticlePage} from '../add-article/add-article.page'
import {Geolocation} from '@ionic-native/geolocation/ngx';
declare var google: any;

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
  HtmlInfoWindow
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-parque',
  templateUrl: './parque.page.html',
  styleUrls: ['./parque.page.scss'],
})

export class ParquePage implements OnInit {

  map: GoogleMap;
  loading: any;

  tipoArticulo:String
  articulo:String
  descripcion:String

//,public modalController: ModalController
  constructor(public alertController: AlertController,
    public modalController: ModalController,
    public zone: NgZone,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform,
    private navCtrl: NavController
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
        // controls:{
        //   myLocationButton:true
        // },
        // camera: {
        //   target: {
        //     lat: 4.645796,
        //     lng: -74.088352
           
        //   },
        //   zoom: 11,
        //   tilt: 30
        // },
        
      });
  

    
    let htmlInfoWindow = new HtmlInfoWindow();

    // flip-flop contents
    // https://davidwalsh.name/css-flip
    let frame: HTMLElement = document.createElement('div');
    frame.innerHTML = `
<div class="flip-container" id="flip-container">
  
  <div class="back">
    <!-- back content -->
    <ion-button routerDirection="calificacion" size="small" color="primary">Calificar</ion-button>
    </div>
  </div>
</div>`;

    frame.addEventListener("click", (evt) => {
      this.navMapa();
    });
    htmlInfoWindow.setContent(frame, {
      width: "100px"
    });

    this.map.addMarker({
      position: {lat: 35.685208, lng: -121.168225},
      draggable: true,
      disableAutoPan: true
    }).then((marker: Marker) => {

      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          htmlInfoWindow.open(marker);
      });
      marker.trigger(GoogleMapsEvent.MARKER_CLICK);

    });

}
  
//Ubicarme
// async onButtonClick() {
//   this.map.clear();

//   this.loading = await this.loadingCtrl.create({
//     message: 'Please wait...'
//   });
//   await this.loading.present();

//   // Get the location of you
//   this.map.getMyLocation().then((location: MyLocation) => {
//     this.loading.dismiss();
//     console.log(JSON.stringify(location, null ,2));

//     // Move the map camera to the location with animation
//     this.map.animateCamera({
//       target: location.latLng,
//       zoom: 17,
//       tilt: 30
//     });

//     // add a marker
//     let marker: Marker = this.map.addMarkerSync({
//        title: '@ionic-native/google-maps plugin!',
//        snippet: '<ion-button (click)="navMapa()" size="small" color="primary">Calificar</ion-button>',
//       position: location.latLng,
//       draggable: true,
//       animation: GoogleMapsAnimation.BOUNCE
//     });
//   let  infowindow = new google.maps.InfoWindow({
//       content: " "
//     });
   
//     // show the infoWindow
//     marker.showInfoWindow();

//     // If clicked it, display the alert
//     marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
//       //this.showToast('clicked!');
//         this.navMapa();

//     });

    

//     //********************************************** */
    
//   })
//   .catch(err => {
//     this.loading.dismiss();
//     this.showToast(err.error_message);
//   });
// }

// async showToast(message: string) {
//   let toast = await this.toastCtrl.create({
//     message: message,
//     duration: 2000,
//     position: 'middle'
//   });

//   toast.present();
// }

//   async presentModal() {
//     const modal = await this.modalController.create({
//       component: AddArticlePage,
//       componentProps: { 
//         tipoArticulo:this.tipoArticulo,
//         articulo:this.articulo,
//         descripcion:this.descripcion 
//        }
//     });
//     return await modal.present();
//   }
  
//   locali:string;


//   parques=[
//     {
//       localidad : "Engativa",
//       parque : "la clara",
//       position: {lat: 41.624615, lng: 0.6238626}
//     },
  
//     {
//       localidad : "Usaquén",
//       parque : "Brasilia",
//       position: {lat: 41.624615, lng: 0.6248626}
//     },
//     {
//       localidad : "Chapinero",
//       parque : "Los Hippes",
//       position: {lat: 41.624615, lng: 0.6258626}
//     }
//   ]

  
  navMapa(){
  
    this.navCtrl.navigateForward('calificacion')
   
  }
}
