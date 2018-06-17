import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CurdProvider } from '../../providers/curd/curd';

import { EditPage } from '../edit/edit';
import { InsertPage } from '../insert/insert';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mydata:any


  constructor(public navCtrl: NavController,
    public crudProvider: CurdProvider ) {


  this.crudProvider.getPosts().then((data) => {
    console.log(JSON.stringify(data))
    this.mydata = data
  })



  }





  onEdit( id, title, province, name, pdate, ptime, description){

   
    
this.navCtrl.push(EditPage, {

  id:id, 
  title:title, 
  province:province, 
  name:name, 
  pdate:pdate, 
  ptime:ptime,
  description:description

})
    
  }





  inserPage(){
    this.navCtrl.push(InsertPage)
  }






  onDelete(id){


    this.crudProvider.deletePosts( id ).then((result)=>{
      console.log(result)
      
    },(err)=>{
      console.log("insert err: "+ err)
       
    })
 

  }


}
