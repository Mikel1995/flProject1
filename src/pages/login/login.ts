import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MainProvider } from "./../../providers/mainProvider";
import { LoginProvider } from "./../../providers/loginProvider";
import { HomePage } from "../home/home";
import { Storage } from '@ionic/storage';
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LogIn {
  form = {};

  constructor(
    public loginProvider: LoginProvider,
    public navCtrl: NavController,
    private storage: Storage
  ) {}

  loginExec() {
    this.loginProvider.login(this.form).subscribe(
      data => {
      this.navCtrl.push(HomePage)
      this.storage.set('token', data._body );
      },error => {
        console.log('error: ', error);
      }
    )
    console.log(this.form);
  }
}
