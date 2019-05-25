import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor(private route: ActivatedRoute, private postservice: PostService, private router: Router) { }
  editPost;
  categories_data;

  ngOnInit() {
    this.getPost();
    this.GetCategories();
  }

  EditPost(){
    const slug = this.route.snapshot.params.id;
    console.log(slug);
    const editPostData =[this.editPost];  

    this.postservice.UpdatePost(editPostData,slug)
    .subscribe(
      (response: Response) =>{
        console.log(response);
      },
      (error) =>{ 
        console.log(error);
        this.router.navigate(['']);
      }
    );
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

  GetCategories(){
    this.postservice.Catgories()
    .subscribe(
      (response: Response) => {
        this.categories_data = Object.keys(response).map((keys) => response[keys])
        // console.log(response);
      }
    );
  }

}
