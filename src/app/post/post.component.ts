import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postservice: PostService) { }

  responseData;
  posts;

  ngOnInit() {
    this.getPosts()
  }

  getPosts(){
    this.postservice.Posts()
    .subscribe(
      (response: Response) => {
        this.responseData = response;
        this.posts = Object.keys(this.responseData.data).map((keys) => this.responseData.data[keys])
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

}
