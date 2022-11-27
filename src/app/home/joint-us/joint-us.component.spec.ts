import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JointUsComponent } from './joint-us.component';

describe('JointUsComponent', () => {
  let component: JointUsComponent;
  let fixture: ComponentFixture<JointUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JointUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JointUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
