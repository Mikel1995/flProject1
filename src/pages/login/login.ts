import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MainProvider } from "./../../providers/mainProvider";
import { LoginProvider } from "./../../providers/loginProvider";
import { HomePage } from "../home/home";
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LogIn {
  form = {};
  response: any;

  constructor(
    public loginProvider: LoginProvider,
    public navCtrl: NavController
  ) {}

  loginExec() {
    this.loginProvider.login(this.form).subscribe(
      data => {
        this.response = data;
        sessionStorage.setItem('token', this.response._body);
      this.navCtrl.push(HomePage)
      },error => {
        console.log('error: ', error);
      }
    )
    console.log(this.form);
  }
}
