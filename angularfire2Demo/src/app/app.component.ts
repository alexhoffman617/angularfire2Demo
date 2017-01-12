import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    messages: FirebaseListObservable<any[]>;
    submitMessage(time, name, text){
         this.messages.push({
           time: time,
           name: name,
           text: text
         });
    };
    constructor(af: AngularFire) {
         this.messages = af.database.list('/messages');

  }
}
