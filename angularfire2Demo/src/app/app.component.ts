import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


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
    submitMessage(time, name, text){
      var username = this.af.auth._events[0].value ? this.af.auth._events[0].value.google.displayName: 'anonymous'
         this.messages.push({
           time: time,
           name: username,
           text: text
         });
    };
    constructor(af: AngularFire) {
        this.af = af;
         this.messages = af.database.list('/messages');
  }
}
