import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/Rx";


@Injectable()
export class MainProvider {
    constructor(public http: Http) {
        
    }

    firstApiCall(){
        return this.http.get("").map(res => res.json());
    }

    secondApiCall(){
        return this.http.get("").map(res => res.json());
    }
    thirdApiCall(){
        return this.http.get("").map(res => res.json());
    }
    fourthApiCall(){
        return this.http.get("").map(res => res.json());
    }

}