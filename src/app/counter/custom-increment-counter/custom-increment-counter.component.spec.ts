import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIncrementCounterComponent } from './custom-increment-counter.component';

describe('CustomIncrementCounterComponent', () => {
  let component: CustomIncrementCounterComponent;
  let fixture: ComponentFixture<CustomIncrementCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomIncrementCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomIncrementCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
