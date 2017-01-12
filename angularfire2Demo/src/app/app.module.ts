import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';

export const firebaseConfig = {
    apiKey: "AIzaSyAxb2bqyFPng5Tee0MZrHZ5PbACPN2_zCg",
    authDomain: "angularfire2demo.firebaseapp.com",
    databaseURL: "https://angularfire2demo.firebaseio.com",
    storageBucket: "angularfire2demo.appspot.com",
    messagingSenderId: "1088505020716"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
