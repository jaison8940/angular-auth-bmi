import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from '../classes/post';

@Injectable()
export class freeApiService
{
    constructor(private httpclient: HttpClient) { }

    getcomments(): Observable<any> {
        return this.httpclient.get('http://jsonplaceholder.typicode.com/posts/1/comments');

    }

    ypost(opost:Post): Observable<any> {
        return this.httpclient.post('https://3qlctmqmuj.execute-api.us-east-1.amazonaws.com/dev/enter/',opost);

    }

}
