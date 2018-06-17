 import { Injectable } from '@angular/core';

import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers  } from '@angular/http';
 import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the CurdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurdProvider {

  constructor(public storage: Storage ,
    public http: Http, 
   ) {
    console.log('Hello CurdProvider Provider');
  }






  getPosts(){
    return new Promise((resolve, reject) => {
     this.storage.get('token').then((value) => {

       let headers = new Headers();
       headers.append('Content-Type', 'application/json');
       headers.append('Authorization', 'Bearer '+value);

        
  
       this.http.get(apiKey+'posts/', {headers: headers})
         .map(res => res.json())
         .subscribe(data => {
           resolve(data);
         }, (err) => {
           reject(err);
         }); 
     }) 

   });

 }






 insertPosts(postInfo){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer '+value);
     

     this.http.post(apiKey+'posts/',  JSON.stringify(postInfo),  {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}





editPosts(id,postInfo){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer '+value);
     

     this.http.put(apiKey+'posts/' +id ,  JSON.stringify(postInfo),  {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}






deletePosts(id ){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Access-Control-Allow-Origin' , '*');
     headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
     headers.append('Accept','application/json');
     headers.append('content-type','application/json');
     headers.append('Authorization', 'Bearer '+value);
     

     this.http.delete(apiKey+'posts/' +id  ,    {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}











}
