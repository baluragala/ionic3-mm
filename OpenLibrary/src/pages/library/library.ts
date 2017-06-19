import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LibraryService} from "../../services/library.service";
import {BookGroup} from "../../models/book-group.interface";
import {BookGroupPage} from "../book-group/book-group";

/**
 * Generated class for the LibraryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  bookCollection:BookGroup[];
  bookGroupPage:any = BookGroupPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private libraryService: LibraryService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
    this.bookCollection = this.libraryService.getAllBooks();
    console.log(this.bookCollection)
  }



}
