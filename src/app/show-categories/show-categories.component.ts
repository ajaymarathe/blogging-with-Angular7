import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrls: ['./show-categories.component.css']
})
export class ShowCategoriesComponent implements OnInit {

  constructor(private categoryservice: CategoryService) { }

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

  DeleteCategory(){
    console.log("delete category");
  }

}
