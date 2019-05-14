import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { CommentService} from '../comment.service';


@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private postservice: PostService, 
    public router: Router,
    public commentservice: CommentService  
  ) { }

  posts;
  comments;

  comment;

  ngOnInit() {
    this.Post();
    this.GetComments();
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

  GetComments(){
    const slug = this.route.snapshot.params.id;
    console.log('slug',slug);
    this.commentservice.Comments(slug)
    .subscribe(
      (response: Response) => {
        this.comments = Object.keys(response).map((keys) => response[keys]);
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  // post comments
  PostComment(){
    // const post_id = 4;
    const user_id = 2;
    const commentData = [this.comment, user_id];
    const slug = this.route.snapshot.params.id;
    console.log(commentData);

    this.commentservice.StoreComments(commentData,slug)
    .subscribe(
      (response: Response) => {
        console.log(response);
      },
      (error) =>{
        console.log(error);
        this.GetComments();
        this.comment = '';
      }
    )
  }

  // delete comment
  DeleteComment(id){

    console.log(id);
    const slug = this.route.snapshot.params.id;

    this.commentservice.DestoryComment(id,slug)
    .subscribe(
      (response: Response) =>{
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
