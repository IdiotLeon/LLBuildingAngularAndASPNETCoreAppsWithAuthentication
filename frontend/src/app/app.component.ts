import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessagesComponent } from './new-messages.component';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  template: `
    <h1>Message Board</h1>
    <new-messages></new-messages>
    <messages></messages>
  `,
})
export class AppComponent { }