import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/Rx";


@Injectable()
export class LoginProvider {
    constructor(public http: Http) {
        
    }

    login(form: any){
        let myHeader = new Headers();
        myHeader.append("Content-Type", "application/json");
        return this.http.post("http://10.7.2.45:8080/auth", form, {headers:myHeader});
    }
}