import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public Editor = ClassicEditor;

  constructor(private postservice: PostService, private router: Router) { }

  title;
  category;
  body;

  categories_data;

  ngOnInit() {
    this.GetCategories();
  }

  GetCategories(){
    this.postservice.Catgories()
    .subscribe(
      (response: Response) => {
        this.categories_data = Object.keys(response).map((keys) => response[keys])
        console.log(response);
      }
    );
  }

  PublishPost(){
    const postData = [this.title, this.category, this.body];
    console.log(postData);

    this.postservice.StorePosts(postData)
    .subscribe(
      (response: Response) => {
        console.log(response);
      },
      (error) => {
        this.router.navigate(['']);
        console.log(error);
      }
    )
  }
}
