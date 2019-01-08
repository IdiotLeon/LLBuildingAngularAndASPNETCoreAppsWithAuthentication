import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'new-messages',
    template: `
            <mat-card class="card">
                <mat-card-content>
                    <mat-form-field>
                        <input [(ngModel)]="message.owner" matInput placeholder="Name">
                    </mat-form-field>
                    <mat-form-field>
                        <textarea [(ngModel)]="message.content" matInput placeholder="Message"></textarea>
                    </mat-form-field>
                    <mat-card-actions>
                        <button (click)="post()" mat-button color="primary">POST</button>
                    </mat-card-actions>
                </mat-card-content>
            </mat-card>
            `
})

export class NewMessagesComponent {

    constructor(private webService: WebService) { }

    message = {
        owner: "",
        content: ""
    };

    post() {
        this.webService.postMessage(this.message);
    }
}