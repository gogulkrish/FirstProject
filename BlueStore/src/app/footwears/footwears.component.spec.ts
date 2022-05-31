import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootwearsComponent } from './footwears.component';

describe('FootwearsComponent', () => {
  let component: FootwearsComponent;
  let fixture: ComponentFixture<FootwearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootwearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootwearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
