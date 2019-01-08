import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
    constructor(private http: Http) { }

    getMessages() {
        return this.http.get('http://localhost:10968/api/messages').toPromise();
    }
}