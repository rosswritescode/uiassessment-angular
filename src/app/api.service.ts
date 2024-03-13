import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // This array will act as a mock database
  private postsArray: any[] = [];
  postsSubject = new Subject<any[]>();
  posts = this.postsSubject.asObservable();

  constructor() { }

  addPost(title: string, content: string) {
    const post = { title, content }; // Create a new post object
    this.postsArray.push(post); // Add the post to the array
    alert({ post })
    this.postsSubject.next([...this.postsArray]); // Add the new post to the array
  }
}
