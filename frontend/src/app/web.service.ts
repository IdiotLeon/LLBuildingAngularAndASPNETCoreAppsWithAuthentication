import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:10968/api/';
    constructor(private http: Http) { }

    getMessages() {
        return this.http.get(this.BASE_URL + 'messages').toPromise();
    }

    postMessage(message) {
        return this.http.post(this.BASE_URL + 'messages', message).toPromise();
    }
}