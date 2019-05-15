import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  PostCategory(categoryData){
    return this.http.post('http://localhost:8000/api/category',{
      user_id: categoryData[0],
      category: categoryData[1]
    });
  }

  // get all categories
  Catgories(){
    return this.http.get('http://localhost:8000/api/category');
  }

  GetSingleCategory(id){
    return this.http.get('http://localhost:8000/api/category/'+id);
  }
}
