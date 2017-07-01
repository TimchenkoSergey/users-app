import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    URLSearchParams
} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import {
    Post,
    POSTS_URL
} from '../';

@Injectable()
export class PostsService {

    constructor(private http: Http) {}

    getPosts(userId : string) : Observable<Post[]> {
        const params : URLSearchParams = new URLSearchParams();
        params.set('userId', userId);

        return this.http.get(POSTS_URL, { search : params })
                        .map((response : Response) =>  response.json());
    }
}