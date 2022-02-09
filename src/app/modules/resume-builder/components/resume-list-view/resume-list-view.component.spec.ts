import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeListViewComponent } from './resume-list-view.component';

describe('ResumeListViewComponent', () => {
  let component: ResumeListViewComponent;
  let fixture: ComponentFixture<ResumeListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
