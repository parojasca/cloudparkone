import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-article-line',
  templateUrl: './add-article-line.page.html',
  styleUrls: ['./add-article-line.page.scss'],
})
export class AddArticleLinePage implements OnInit {

  constructor(
    public modalController: ModalController,
    private navCtrl: NavController,       
    public navParams:NavParams) { }

  ngOnInit() {
  }
  cerrarModal() {
    this.modalController.dismiss()
 
   }
   navMapa(){
     this.modalController.dismiss();
     this.navCtrl.navigateForward('map-add-article-line')
    
   }
}
