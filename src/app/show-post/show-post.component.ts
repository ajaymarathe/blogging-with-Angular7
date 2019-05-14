import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postservice: PostService, public location: Location, public router: Router ) { }

  posts;

  ngOnInit() {
    this.Post();
  }

  Post(){
    const slug = this.route.snapshot.params.id;

    this.postservice.ShowPost(slug)
    .subscribe(
      (response: Response) => {
        this.posts = response;
        // console.log(response);
      },
      (error) => console.log(error)
    );
  }

  DeletePost(){
    const slug = this.route.snapshot.params.id;
    this.postservice.DeletePost(slug)
    .subscribe(
      (response: Response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.router.navigate(['']);
      }
    );
  }
}
