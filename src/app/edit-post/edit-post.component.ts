import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postservice: PostService) { }
  editPost;

  ngOnInit() {
    this.getPost();
  }

  getPost(){
    const slug = this.route.snapshot.params.id;
    console.log(slug);

    this.postservice.ShowPost(slug)
    .subscribe(
      (response: Response) =>{
        this.editPost = response;
        console.log(response)
      },
      (error) => console.log(error)
    );
  }

}
