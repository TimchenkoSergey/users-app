import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import {
    User,
    USERS_URL
} from '../';

@Injectable()
export class UsersService {
    private _users      : User[];
    private _observable : Observable<any>;

    constructor(private http: Http) {}

    getUsers() : Observable<User[]> {
        if (this._users) {
            return Observable.of(this._users);
        }
        else if (this._observable) {
            return this._observable;
        }
        else {
            this._observable = this.http.get(USERS_URL)
                                        .map((response : Response) =>  {
                                            this._users = response.json();
                                            return this._users;
                                        });

            return this._observable;
        }
    }
}