import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpdescprtnComponent } from './spdescprtn.component';

describe('SpdescprtnComponent', () => {
  let component: SpdescprtnComponent;
  let fixture: ComponentFixture<SpdescprtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpdescprtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpdescprtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
