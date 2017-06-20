import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {Camera} from "@ionic-native/camera";
import {CallNumber} from "@ionic-native/call-number";
import {Vibration} from "@ionic-native/vibration";
import {ImagePicker} from "@ionic-native/image-picker";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Toast} from "@ionic-native/toast";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    Camera,
    CallNumber,
    Vibration,
    ImagePicker,
    InAppBrowser,
    Toast
  ]
})
export class AppModule {
}
