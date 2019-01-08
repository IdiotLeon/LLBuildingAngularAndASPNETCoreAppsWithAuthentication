import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:10968/api/';

    messages = [];

    constructor(private http: Http, private snackbar: MatSnackBar) {
        this.getMessages();
    }

    async getMessages() {
        try {
            var response = await this.http.get(this.BASE_URL + 'messages').toPromise();
            this.messages = response.json();
        } catch (error) {
            this.handleError("Unable to get messages");
        }
    }

    async postMessage(message) {
        try {
            var response = await this.http.post(this.BASE_URL + 'messages', message).toPromise();
            this.messages.push(response.json());
        } catch (error) {
            this.handleError("Unable to post the message");
        }
    }

    private handleError(error) {
        console.error(error);
        this.snackbar.open(error, 'close', { duration: 2000 });
    }
}