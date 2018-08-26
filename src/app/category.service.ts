import { Injectable } from '@angular/core';
//import { AngularFireDatabase } from '../../node_modules/angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Body } from '../../node_modules/@angular/http/src/body';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories() {     
    return this.http.get("http://localhost:6002/api/categories");   
  }
  
  saveCategory(body){
    console.log(body);
    return this.http.post("http://localhost:6002/api/categories", body);
  }
}
