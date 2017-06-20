import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {CallNumber} from "@ionic-native/call-number";
import {Vibration} from "@ionic-native/vibration";
import {ImagePicker} from "@ionic-native/image-picker";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Toast} from "@ionic-native/toast";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  capturedImage: any;

  constructor(public navCtrl: NavController,
              private camera: Camera,
              private alert: AlertController,
              private callNumber: CallNumber,
              private vibration: Vibration,
              private imagePicker: ImagePicker,
              private iap: InAppBrowser,
              private toast: Toast) {

  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.capturedImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      this.alert.create({
        title: 'Error',
        message: err,
        buttons: ['OK']
      })
    });
  }

  makeCall() {
    this.callNumber.callNumber("1234567890", true)
      .then(success => console.log(success))
      .catch(err => console.log(err))
  }

  vibrate() {
    this.vibration.vibrate(1000);
  }

  pickImages() {
    this.imagePicker.getPictures({})
      .then(pictures => console.log(pictures))
  }

  browse() {
    const browser = this.iap.create("https://www.ionicframework.com");
    browser.show();
  }

  showToast() {
    console.log('Toast');
    this.toast.show("I am toast!!", '2000', 'bottom').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }
}
