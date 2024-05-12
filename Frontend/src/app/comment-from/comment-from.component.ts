import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TopicService } from '../services/topic.service';
import { Comment } from '../models/comment.model';

@Component({
  templateUrl: './comment-from.component.html',
  styleUrl: './comment-from.component.css'
})
export class CommentFromComponent {
  @Input() postId: number = 0;
  content: string = '';

  constructor(
    private authService: AuthService,
    private topicService: TopicService
  ) {}

  submitComment(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && this.content.trim()) {
      const newComment: Comment = {
        id: 0, 
        content: this.content,
        authorId: currentUser.id,
        postId: this.postId
      };
      this.topicService.createComment(newComment)
        .subscribe(comment => {
          console.log('Comment created:', comment);
        });
    }
  }
}