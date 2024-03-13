import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
  <form [formGroup]="addPostForm" (ngSubmit)="onAddPost()">
    <div class="form-group" >
      <label for="title">Title</label>
      <input type="text" id="title" class="form-control" formControlName="title">
    </div>
    <div class="form-group">
      <label for="content">Content</label>
      <textarea id="content" rows="5" class="form-control" formControlName="content"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Add Post</button>
  </form>`,
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  addPostForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: ApiService) {
    this.addPostForm = this.formBuilder.group({
      title: [''],
      content: ['']
    });
  }

  onAddPost() {
    this.postService.addPost(this.addPostForm.value.title, this.addPostForm.value.content);
    this.addPostForm.reset();
  }
}
