import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CurdProvider } from '../../providers/curd/curd';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {




  myInfo = {
 
    title : "",
    province : "",
    name : "",
    pdate : "",
    ptime : "",
    description : "",

 }

id=''



  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public crudProvider: CurdProvider) {


      this.id = navParams.get('id');
      this.myInfo.title = navParams.get('title');
      this.myInfo.province = navParams.get('province');
      this.myInfo.name = navParams.get('name');
      this.myInfo.pdate = navParams.get('pdate');
      this.myInfo.ptime = navParams.get('ptime');
      this.myInfo.description = navParams.get('description');



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }




  myUpdate(){



    this.crudProvider.editPosts(this.id,this.myInfo).then((result)=>{
      console.log(result)
      this.navCtrl.pop()
    },(err)=>{
      console.log("insert err: "+ err)
     
    })
 


  }







}
