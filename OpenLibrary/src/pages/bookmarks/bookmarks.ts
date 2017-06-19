import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, MenuController} from 'ionic-angular';
import {LibraryService} from "../../services/library.service";
import {Book} from "../../models/book.interface";
import {BookPage} from "../book/book";

/**
 * Generated class for the BookmarksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksPage {

  bookmarkedCollection: Book[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private libraryService: LibraryService,
              private modalCtrl: ModalController,
              /*private menuCtrl: MenuController*/) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarksPage');
  }

  ionViewWillEnter() {
    this.bookmarkedCollection = this.libraryService.getBookmarkedBooks();
  }

  viewBook(book: Book) {
    const modal = this.modalCtrl.create(BookPage, book);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove)
        this.removeFromBookmarks(book)
    })
  }

  removeFromBookmarks(book: Book) {
    this.libraryService.removeBookFromBookmarks(book);
    const position = this.bookmarkedCollection.findIndex((b: Book) => {
      return b.id == book.id;
    });

    this.bookmarkedCollection.splice(position, 1)
  }

  /*showMenu() {
    this.menuCtrl.open();
  }*/

}
