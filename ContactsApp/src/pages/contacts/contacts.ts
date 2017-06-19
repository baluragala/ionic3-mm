import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ContactPage} from "../contact/contact";

/**
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  contactPage = ContactPage;

  contacts = [
    {username: 'user1', email: 'user1@zeo,com'},
    {username: 'user2', email: 'user2@zeo,com'},
    {username: 'user3', email: 'user3@zeo,com'},
    {username: 'user5', email: 'user4@zeo,com'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /*
   ionViewCanEnter
   ionViewDidLoad
   ionViewWillEnter
   ionViewDidEnter

   */

  ionViewCanEnter() {
    console.log('ionViewCanEnter ContactsPage');
    return true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ContactsPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ContactsPage');
  }

  ionViewCanLeave() {
    console.log('ionViewCanLeave ContactsPage');
    return true;
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave ContactsPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave ContactsPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload ContactsPage');
  }


  /*gotoContact(contact) {
   this.navCtrl.push(ContactPage, contact)
   }*/
}
