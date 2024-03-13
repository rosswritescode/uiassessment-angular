import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from '../post-list/post-list.component';
import { CreatePostComponent } from '../create-post/create-post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostListComponent, CreatePostComponent],
  template: `<div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <app-create-post></app-create-post>
        <app-post-list></app-post-list>
      </div>
    </div>
  </div>`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
