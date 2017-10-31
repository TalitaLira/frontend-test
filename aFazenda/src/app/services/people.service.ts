import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {
  baseDB = "../../assets/api/fazenda.json";

  constructor(private http: Http) { }

  getAll(){
    return this.http.get(this.baseDB)
    .map(response => response.json().data)
  }
   
}
