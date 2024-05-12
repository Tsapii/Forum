import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFromComponent } from './comment-from.component';

describe('CommentFromComponent', () => {
  let component: CommentFromComponent;
  let fixture: ComponentFixture<CommentFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
