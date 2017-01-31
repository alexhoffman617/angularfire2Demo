import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods, AngularFire} from 'angularfire2';


export const firebaseConfig = {
    apiKey: "AIzaSyAxb2bqyFPng5Tee0MZrHZ5PbACPN2_zCg",
    authDomain: "angularfire2demo.firebaseapp.com",
    databaseURL: "https://angularfire2demo.firebaseio.com",
    storageBucket: "angularfire2demo.appspot.com",
    messagingSenderId: "1088505020716"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect,
  remember: 'default', scope: ['email','id','name','picture']
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { 
}
