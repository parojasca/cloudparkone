import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-article-point',
  templateUrl: './add-article-point.page.html',
  styleUrls: ['./add-article-point.page.scss'],
})
export class AddArticlePointPage implements OnInit {

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
     this.navCtrl.navigateForward('map-add-article-point')
    
   }

}
