import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts$ = this.postService.posts;
  postsJson = '';

  constructor(private postService: ApiService) {
    this.posts$.subscribe((posts: any) => {
      this.postsJson = JSON.stringify(posts, null, 2);
    });
  }

}
