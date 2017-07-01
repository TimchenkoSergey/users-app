import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    URLSearchParams
} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import {
    Comment,
    COMMENTS_URL
} from '../';

@Injectable()
export class CommentsService {
    constructor(private http: Http) {}

    getComments(postId : string) : Observable<Comment[]> {
        const params : URLSearchParams = new URLSearchParams();
        params.set('postId', postId);

        return this.http.get(COMMENTS_URL, { search : params })
                        .map((response : Response) =>  response.json());
    }
}