import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ShowCategoriesComponent } from './show-categories/show-categories.component';
import { CatgoriesComponent } from './catgories/catgories.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'create', component: CreatePostComponent},
  { path: 'edit/:id', component: EditPostComponent},
  { path: 'show/:id', component: ShowPostComponent},
  { path: 'create_category', component: CreateCategoryComponent},
  { path: 'show_category', component: ShowCategoriesComponent},
  { path: 'category/:id', component: CatgoriesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
