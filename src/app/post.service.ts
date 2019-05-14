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

  StorePosts(postData){
    return this.http.post(this.url+'posts',{
      title: postData[0],
      category_id: postData[1],
      body: postData[2]
    });
  }

  // get post by slug
  ShowPost(slug){
    return this.http.get(this.url+'posts/'+slug);
  }

  DeletePost(slug){
    return this.http.delete(this.url+'posts/'+slug);
  }

  Catgories(){
    return this.http.get(this.url+'category');
  }
}
