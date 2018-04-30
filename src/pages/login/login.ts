import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainProvider } from './../../providers/mainProvider';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LogIn {

  constructor(public navCtrl: NavController, ) {

  }


  loginExec(){ 
      this.navCtrl.push(HomePage)
  }

}
