import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component:HomeComponent, pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'blog-detail', component: BlogDetailComponent},
    {path: 'blogs', component: BlogsComponent},
    {path: 'login', component:LoginComponent}
];
