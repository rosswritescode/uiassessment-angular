import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ApiService } from './api.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreatePostComponent,
    HomeComponent
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
