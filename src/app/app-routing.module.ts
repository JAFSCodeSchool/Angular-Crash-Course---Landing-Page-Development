import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCourseComponent } from './all-course/all-course.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'all-course', component: AllCourseComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pages', component: PagesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
