import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TabsPage} from './tabs';
import {BookmarksPageModule} from "../bookmarks/bookmarks.module";
import {LibraryPageModule} from "../library/library.module";

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    BookmarksPageModule,
    LibraryPageModule
  ],
  exports: [
    TabsPage
  ]
})
export class TabsPageModule {
}
