import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {BookGroup} from "../../models/book-group.interface";
import {Book} from "../../models/book.interface";
import {LibraryService} from "../../services/library.service";

/**
 * Generated class for the BookGroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-book-group',
  templateUrl: 'book-group.html',
})
export class BookGroupPage {

  bookGroup: BookGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private libraryService: LibraryService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookGroupPage');
  }

  ngOnInit() {
    this.bookGroup = this.navParams.data;
  }

  addToBookmarks(selectedBook: Book) {
    const alert = this.alertCtrl.create({
      title: 'Bookmark',
      subTitle: selectedBook.title,
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.libraryService.addBookToBookmarks(selectedBook)
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No pressed !!, book not added to bookmark list');
          }
        }
      ]
    });

    alert.present();
  }

  isBookmarked(book: Book) {
    return this.libraryService.isBookBookmarked(book);
  }

  removeFromBookmarks(book: Book) {
    this.libraryService.removeBookFromBookmarks(book);
  }

}
