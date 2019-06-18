import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {

  data: any;

  constructor(public http: HttpClient) {}

  load(): any {

      // already loaded data
      //console.log("This is a test")
      return new Promise(resolve => {
        this.http.get('https://randomuser.me/api/?results=10').subscribe(data => {
          console.log(data["results"])
          return resolve(data["results"])
        });
    });

  }


}
