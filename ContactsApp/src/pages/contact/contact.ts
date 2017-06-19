import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage implements OnInit {

  username: string;
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    console.log(this.navParams);
    this.username = this.navParams.data["username"];
    this.email = this.navParams.data["email"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

}
