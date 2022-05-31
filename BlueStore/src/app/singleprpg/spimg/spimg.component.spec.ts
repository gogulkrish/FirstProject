import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpimgComponent } from './spimg.component';

describe('SpimgComponent', () => {
  let component: SpimgComponent;
  let fixture: ComponentFixture<SpimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
