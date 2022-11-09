import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPopupComponent } from './video-popup.component';

describe('VideoPopupComponent', () => {
  let component: VideoPopupComponent;
  let fixture: ComponentFixture<VideoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
