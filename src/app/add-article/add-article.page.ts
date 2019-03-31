import { Component, OnInit } from '@angular/core';
import { ModalController,NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.page.html',
  styleUrls: ['./add-article.page.scss'],
})
export class AddArticlePage implements OnInit {
//,private camera: Camera


  constructor(public modalController: ModalController,
    private navCtrl: NavController       
    

 
   ) { }

  async ngOnInit() {
   // await this.platform.ready();
   // await this.loadMap();
   
  // this.loadMap();
  }

  cerrarModal() {
   this.modalController.dismiss()

  }
  navMapa(){
    this.modalController.dismiss();
    this.navCtrl.navigateForward('map-add-article')
   
  }

/*
  async activeCamara(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   let base64Image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
}*/
}
