import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookGroupPage } from './book-group';

@NgModule({
  declarations: [
    BookGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(BookGroupPage),
  ],
  exports: [
    BookGroupPage
  ]
})
export class BookGroupPageModule {}
