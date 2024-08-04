import { Component } from '@angular/core';
import { BlogsComponent } from "../blogs/blogs.component";
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogsComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
