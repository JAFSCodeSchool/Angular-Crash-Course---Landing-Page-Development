import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeFormReactiveComponent } from './subscribe-form-reactive.component';

describe('SubscribeFormReactiveComponent', () => {
  let component: SubscribeFormReactiveComponent;
  let fixture: ComponentFixture<SubscribeFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeFormReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
