import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor(private categoryservice: CategoryService, private router: Router) { }

  category;

  ngOnInit() {
  }

  CreateCategory(){
    const user_id = 2;
    const categoryData = [user_id, this.category];
    console.log(categoryData);

    this.categoryservice.PostCategory(categoryData)
    .subscribe(
      (respone: Response)=>{
        console.log(respone);
      },
      (error) => {
        console.log(error);
        this.category = '';
        this.router.navigate([''])
      }
    );
  }
}
