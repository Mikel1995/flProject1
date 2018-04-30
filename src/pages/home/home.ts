import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainProvider } from './../../providers/mainProvider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public mainProvider: MainProvider) {

  }

  lockMethod(){
    this.mainProvider.lock().subscribe()
  }

  sleepMethod(){
    this.mainProvider.sleep().subscribe()
  }


  shutDownMethod(){
    this.mainProvider.shutdown().subscribe(
)
  }


}
