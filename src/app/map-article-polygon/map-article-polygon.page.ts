import { Component, OnInit } from '@angular/core';
import { Platform,NavParams } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  Polygon,
  BaseArrayClass,
  ILatLng,
  LatLng,
  MarkerCluster,
  GoogleMapsAnimation
  
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-map-article-polygon',
  templateUrl: './map-article-polygon.page.html',
  styleUrls: ['./map-article-polygon.page.scss'],
})
export class MapArticlePolygonPage implements OnInit {
  map: GoogleMap;
  GORYOKAKU_POINTS: ILatLng[] =[];

  tipoArticulo:String
  articulo:String
  descripcion:String

  constructor(
    private platform: Platform
    ) {
 
   }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
   
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 4.645796,
          lng: -74.088352
        },
        zoom: 18,
        tilt: 30
      }
    });
   
    let polygon: Polygon = this.map.addPolygonSync({
      'points': this.GORYOKAKU_POINTS,
      'strokeColor' : '#db0d3a',
      'fillColor' : '#00ff6a',
      'strokeWidth': 10
    });

      //poligono
      this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((params: any[]) => {
        const latLng: LatLng = params[0];
       let agr=   this.GORYOKAKU_POINTS.push(latLng);
       // console.log(JSON.stringify(location, null, 2));
       console.log(JSON.stringify(latLng))
        this.map.addMarkerSync({
          position: latLng,
          title: latLng.toString(),
          animation: GoogleMapsAnimation.DROP
        });
      });
  //poligono
  
  
     }
async onButtonClick() {
      this.map.clear();
      this.GORYOKAKU_POINTS=[];
      
  }

  //poligono
async pintarPoligonp() {
  let polygon: Polygon = this.map.addPolygonSync({
    'points': this.GORYOKAKU_POINTS,
    'strokeColor' : '#AA00FF',
    'fillColor' : '#00FFAA',
    'strokeWidth': 10
  });
  const points: BaseArrayClass<ILatLng> = polygon.getPoints();
  console.log(this.tipoArticulo);
  points.forEach((latLng: ILatLng, idx: number) => {
    let marker: Marker = this.map.addMarkerSync({
      draggable: true,
      position: latLng
    });
    marker.on(GoogleMapsEvent.MARKER_DRAG).subscribe((params) => {
      let position: LatLng = params[0];
      points.setAt(idx, position);
    });
  });
}
//Poligono



//agrupacion iconos
 /*
addCluster(data) {
  let markerCluster: MarkerCluster = this.map.addMarkerClusterSync({
    markers: data,
    icons: [
      {
        min: 3,
        max: 9,
        url: "./assets/markercluster/small.png",
        label: {
          color: "white"
        }
      },
      {
        min: 10,
        url: "./assets/markercluster/large.png",
        label: {
          color: "white"
        }
      }
    ]
  });

  markerCluster.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
    let marker: Marker = params[1];
    marker.setTitle(marker.get("name"));
    marker.setSnippet(marker.get("address"));
    marker.showInfoWindow();
  });

}

dummyData() {
  return [
    {
      "position": {
        "lat": 4.665460,
        "lng": -74.085384 
      },
      "name": "Starbucks - HI - Aiea  03641",
      "address": "Aiea Shopping Center_99-115\nAiea Heights Drive #125_Aiea, Hawaii 96701",
      "icon": "assets/markercluster/marker.png"
    },
    {
      "position": {
        "lat": 4.660755,
        "lng": -74.081993
      },

      "name": "Starbucks - HI - Aiea  03642",
      "address": "Pearlridge Center_98-125\nKaonohi Street_Aiea, Hawaii 96701",
      "icon": "assets/markercluster/marker.png"
    },
    {
      "position": {
        "lat": 4.660830,
        "lng": -74.089959
      },
      "name": "Starbucks - HI - Aiea  03643",
      "address": "Stadium Marketplace_4561\nSalt Lake Boulevard_Aiea, Hawaii 96818",
      "icon": "assets/markercluster/marker.png"
    },
    {
      "position": {
        "lat":  4.660840,//
        "lng": -74.081908
      },
      "name": "Starbucks - HI - Aiea  03644",
      "address": "Pearlridge Mall_98-1005\nMoanalua Road_Aiea, Hawaii 96701",
      "icon": "assets/markercluster/marker.png"
    },
    {
      "position": {
        "lat": 4.658702,//, 
        "lng": -74.078303
      },
      "name": "Starbucks - HI - Aiea  03644",
      "address": "Pearlridge Mall_98-1005\nMoanalua Road_Aiea, Hawaii 96701",
      "icon": "assets/markercluster/marker.png"
    },
    {
      "position": {
        "lat":  4.656606,//, 
        "lng": -74.085427
      },
      "name": "Starbucks - HI - Aiea  03644",
      "address": "Pearlridge Mall_98-1005\nMoanalua Road_Aiea, Hawaii 96701",
      "icon": "assets/markercluster/marker.png"
    },
    {
      "position": {
        "lat":  4.659685,//, 
        "lng": -74.088130
      },
      "name": "Starbucks - HI - Aiea  03644",
      "address": "Pearlridge Mall_98-1005\nMoanalua Road_Aiea, Hawaii 96701",
      "icon": "assets/markercluster/marker.png"
    },
    {
      "position": {
        "lat":  4.661739,//, , 
        "lng": -74.087100
      },
      "name": "Starbucks - HI - Aiea  03644",
      "address": "Pearlridge Mall_98-1005\nMoanalua Road_Aiea, Hawaii 96701",
      "icon": "assets/markercluster/marker.png"
    }
    
  ];
}*/


}