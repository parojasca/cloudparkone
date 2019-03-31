import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  Polygon,
  BaseArrayClass,
  ILatLng,
  LatLng,
  MarkerCluster
  
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-map-add-article',
  templateUrl: './map-add-article.page.html',
  styleUrls: ['./map-add-article.page.scss'],
})
export class MapAddArticlePage implements OnInit {
  map: GoogleMap;
  GORYOKAKU_POINTS: ILatLng[] =[
    {lat: 4.664824, lng: -74.093119},//, 
    {lat: 4.660825, lng: -74.089943},//, 
    {lat: 4.658312, lng: -74.089546},//, 
    {lat: 4.653086, lng: -74.092121},//, 
    {lat: 4.656241, lng: -74.098709},//, 
    {lat: 4.658914, lng: -74.098827},//, 
    {lat: 4.664122, lng: -74.094782}//, 
  
  ];


  constructor(private platform: Platform) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: this.GORYOKAKU_POINTS
      }
    });

    let polygon: Polygon = this.map.addPolygonSync({
      'points': this.GORYOKAKU_POINTS,
      'strokeColor' : '#db0d3a',
      'fillColor' : '#00ff6a',
      'strokeWidth': 10
    });

    let points: BaseArrayClass<ILatLng> = polygon.getPoints();

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
    this.addCluster(this.dummyData());
     }

//agrupacion iconos
 
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
}


}