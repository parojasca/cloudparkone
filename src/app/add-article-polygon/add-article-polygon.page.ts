import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-article-polygon',
  templateUrl: './add-article-polygon.page.html',
  styleUrls: ['./add-article-polygon.page.scss'],
})
export class AddArticlePolygonPage implements OnInit {

  constructor(
    public modalController: ModalController,
    private navCtrl: NavController,       
    public navParams:NavParams
  ) { }

  ngOnInit() {
  }
  cerrarModal() {
    this.modalController.dismiss()
 
   }
   navMapa(){
     this.modalController.dismiss();
     this.navCtrl.navigateForward('map-article-polygon')
    
   }
}
