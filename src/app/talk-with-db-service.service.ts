import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TalkWithDbServiceService {
  serverUrl:string;
  constructor(public httpClient:HttpClient) {
    this.serverUrl="http://localhost:3000/";
   }

   getAllPlacesInfo()
   {
    var myServerUrl=this.serverUrl+"api/allPlacesInfo";
    return this.httpClient.get(myServerUrl);
   }
}
