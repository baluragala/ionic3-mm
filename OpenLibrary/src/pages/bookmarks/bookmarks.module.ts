import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BookmarksPage} from './bookmarks';
import {BookPageModule} from "../book/book.module";

@NgModule({
  declarations: [
    BookmarksPage,
  ],
  imports: [
    IonicPageModule.forChild(BookmarksPage),
    BookPageModule
  ],
  exports: [
    BookmarksPage
  ]
})
export class BookmarksPageModule {
}
