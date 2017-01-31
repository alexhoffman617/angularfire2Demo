import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    messages: FirebaseListObservable<any[]>;
<<<<<<< HEAD
    login() {
      this.af.auth.login();
    }

    logout() {
      this.af.auth.logout();
    }
    af;
    inputText: '';
    submitMessage(text){
      var username = this.af.auth._events[0].value ? this.af.auth._events[0].value.google.displayName: 'anonymous'
         this.messages.push({
           time: firebase.database.ServerValue.TIMESTAMP,
           name: username,
           text: text
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
