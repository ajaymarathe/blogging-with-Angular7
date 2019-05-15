import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catgories',
  templateUrl: './catgories.component.html',
  styleUrls: ['./catgories.component.css']
})
export class CatgoriesComponent implements OnInit {

  constructor(private categoryservice: CategoryService, private route: ActivatedRoute) { }
  category;

  ngOnInit() {
    this.SingleCategory();
  }

  SingleCategory(){
    const id = this.route.snapshot.params.id;
    console.log(id);

    this.categoryservice.GetSingleCategory(id)
    .subscribe(
      (response: Response) =>{
        this.category = response;
        console.log(response);
      }
    );
  }

}
