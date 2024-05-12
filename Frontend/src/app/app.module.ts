import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from '../app/register/register.component';
import { PostFromComponent } from '../app/post-from/post-from.component';
import { CommentFromComponent } from '../app/comment-from/comment-from.component';


@NgModule({
 declarations: [
    LoginComponent,
    RegisterComponent,
    PostFromComponent,
    CommentFromComponent,
  ],
  imports: [
    FormsModule
  ],
})
export class AppModule { }