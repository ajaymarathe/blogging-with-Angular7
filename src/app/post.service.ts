import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8000/api/";

  Posts(){
    return this.http.get(this.url+'posts');
  }

  ShowPost(slug){
    return this.http.get(this.url+'posts/'+slug);
  }

  DeletePost(slug){
    return this.http.delete(this.url+'posts/'+slug);
  }
}
