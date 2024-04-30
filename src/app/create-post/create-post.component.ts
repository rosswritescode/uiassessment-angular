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
  <form>
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" id="title" class="form-control">
    </div>
    <div class="form-group">
      <label for="content">Content</label>
      <textarea id="content" rows="5" class="form-control"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Add Post</button>
  </form>`
})
export class CreatePostComponent {
  addPostForm: FormGroup;

  // 1. call onAddPost when form is submitted 
  // 2. add required validation for both fields 
  // 3. call saveDraft after 5 seconds of inactivity 
  
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

  saveDraft() {
    console.log("Draft saved: ", this.addPostForm.value.title, this.addPostForm.value.content);
  }
}
