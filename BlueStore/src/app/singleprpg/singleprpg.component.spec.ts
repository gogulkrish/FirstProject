import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleprpgComponent } from './singleprpg.component';

describe('SingleprpgComponent', () => {
  let component: SingleprpgComponent;
  let fixture: ComponentFixture<SingleprpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleprpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleprpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
