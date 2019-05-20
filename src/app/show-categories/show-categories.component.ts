import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.css']
})
export class ShowCategoriesComponent implements OnInit {

  constructor(private categoryservice: CategoryService, private route: ActivatedRoute, private router: Router) { }

  category;

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categoryservice.Catgories()
    .subscribe(
      (response: Response) => {
        this.category = Object.keys(response).map((key) => response[key]);
        console.log(response);
      }
    )
  }

  EditCategory(){
    console.log("edit cateogry");
  }

  
  CategoryDelete(id: any){
    console.log('category delete id', id);
    this.categoryservice.DeleteCategory(id)
    .subscribe(
      (response: Response) =>{
        console.log("this is res",response);
      },
      (error) =>{ 
        console.log("this is err",error);
        this.router.navigate(['']);
      }
    );
  }

}
