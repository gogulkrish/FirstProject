import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdydealsComponent } from './tdydeals.component';

describe('TdydealsComponent', () => {
  let component: TdydealsComponent;
  let fixture: ComponentFixture<TdydealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdydealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdydealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
