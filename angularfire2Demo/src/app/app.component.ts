import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { MdButton, MdInput, MdList, MdListItem, MdIcon } from '@angular/material';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    messages: FirebaseListObservable<any[]>;
    login() {
      this.af.auth.login();
    }

    logout() {
      this.af.auth.logout();
    }
    af;
    inputText: '';
    submitMessage(text){
      var username = this.af.auth._events[0].value ? this.af.auth._events[0].value.google.displayName: 'anonymous';
      var photo = this.af.auth._events[0].value ? this.af.auth._events[0].value.google.photoURL: 'http://cdn.onlinewebfonts.com/svg/img_210318.svg';
         this.messages.push({
           time: firebase.database.ServerValue.TIMESTAMP,
           name: username,
           text: text,
           photo: photo
         });
         this.inputText = '';
    };
    formatDate(date) {
      var actualDate = new Date(date);
      return actualDate.getHours() + ':' + actualDate.getMinutes();
    }
    constructor(af: AngularFire) {
        this.af = af;
         this.messages = af.database.list('/messages', { 
           query: {
             orderByChild: 'time'
           }
         });
  }
}
