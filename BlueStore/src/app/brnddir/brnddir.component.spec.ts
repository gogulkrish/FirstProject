import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrnddirComponent } from './brnddir.component';

describe('BrnddirComponent', () => {
  let component: BrnddirComponent;
  let fixture: ComponentFixture<BrnddirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrnddirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrnddirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
