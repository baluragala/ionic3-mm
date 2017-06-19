import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LibraryService} from "../services/library.service";
//import {AuthService} from "../services/auth.service";
import {BookGroupPageModule} from "../pages/book-group/book-group.module";
import {LibraryPageModule} from "../pages/library/library.module";
import {TabsPageModule} from "../pages/tabs/tabs.module";
import {SignupPageModule} from "../pages/signup/signup.module";
import {LoginPageModule} from "../pages/login/login.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BookGroupPageModule,
    TabsPageModule,
    LoginPageModule,
    SignupPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LibraryService
    //AuthService
  ]
})
export class AppModule {}
