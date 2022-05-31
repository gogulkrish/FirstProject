import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingComponent } from './grooming.component';

describe('GroomingComponent', () => {
  let component: GroomingComponent;
  let fixture: ComponentFixture<GroomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
