import { Component } from '@angular/core';
import { TopicService } from '../services/topic.service';
import { Topic } from '../models/topic.model';

@Component({
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css'
})
export class TopicListComponent {
  topics: Topic[] = [];

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.loadTopics();
  }

  loadTopics(): void {
    this.topicService.getAllTopics()
      .subscribe(topics => {
        this.topics = topics;
      });
  }
}
