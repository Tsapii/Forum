import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic.model';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) {}

  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>('http://localhost:3000/api/topics');
  }

  getAllPosts(): Observable<Topic[]> {
    return this.http.get<Topic[]>('http://localhost:3000/api/posts');
  }

  createTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>('http://localhost:3000/api/topics', topic);
  }

  deleteTopic(topicId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/api/topics/${topicId}`);
  }

  getTopic(topicId: number): Observable<Topic> {
    return this.http.get<Topic>(`http://localhost:3000/api/topics${topicId}`);
  }

  getCommentsByPosts(postIds: number[]): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:3000/api/posts/${ postIds }/comments`);
  }

  deletePost(postId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/api/posts/${postId}`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/api/posts/', post);
  }

  createComment(comment: Comment): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/api/comments/', comment);
  }

}

