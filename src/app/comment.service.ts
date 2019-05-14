import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8000/api/";

  // get comments by post slug
  Comments(slug){
    return this.http.get(this.url+'post/'+slug+'/comment');
  }

  // store comments
  StoreComments(commentData,slug){
    return this.http.post(this.url+'post/'+slug+'/comment',{
      body: commentData[0],
      user_id: commentData[1]
    });
  }

  // delete comments
  DestoryComment(id,slug){
    return this.http.delete(this.url+'post/'+slug+'/comment/'+id);
  }
}
