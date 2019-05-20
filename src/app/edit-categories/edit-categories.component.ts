import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private categoryservice: CategoryService, private router: Router) { }
  
  category;

  ngOnInit() {
    this.EditCategories();
  }

  EditCategories(){
    const id = this.route.snapshot.params.id;
    console.log(id);

    this.categoryservice.GetSingleCategory(id)
    .subscribe(
      (response: Response) =>{
        console.log(response);
        this.category = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  UpdateCategory(){
    const id = this.route.snapshot.params.id;
    const updatedData = [this.category.category,id]
    console.log('updated category', updatedData);

    this.categoryservice.UpdateCategory(updatedData)
    .subscribe(
      (response: Response) =>{
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.router.navigate(['show_category']);
      }
    );
  }


}
