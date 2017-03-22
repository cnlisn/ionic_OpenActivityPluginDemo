import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
declare var OpenPagePlugin;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  OpenPage(){
    // alert("OpenPage");
    OpenPagePlugin.openActivity(data => {
      alert("ss="+data);
    },data => {
      alert("ff="+data);
    });
  }
}
