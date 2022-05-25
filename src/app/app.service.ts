import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  public testGetPosts(): Observable<unknown> {
    return this.http.get<unknown>(
      `https://my-json-server.typicode.com/typicode/demo/posts`
    );
  }
}
