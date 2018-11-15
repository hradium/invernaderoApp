import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the PlantaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planta',
  templateUrl: 'planta.html',
})
export class PlantaPage {
  plantas = [
    {
      "cultivo": "durazno",
      "fecha": "Wed, 14 Nov 2018 00:00:00 GMT",
      "id": 2,
      "id_clasi": 2,
      "id_inv": 2
    },
    {
      "cultivo": "platano",
      "fecha": "Wed, 26 Sep 2018 00:00:00 GMT",
      "id": 3,
      "id_clasi": 1,
      "id_inv": 2
    }
  ];
  nombre = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: Http) {
    let id = this.navParams.get('id');
    console.log(id);
    this.nombre = this.navParams.get('nombre');
    this.getPlantas(id);
  }

  getPlantas(id){
    this.http.get('/planta/?id=' + id.toString())
      .subscribe(data =>{
        console.log(data.text());
        this.plantas = data.json();
      },error1 =>{
        console.log('error');
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlantaPage');
  }

}
