import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfashnComponent } from './topfashn.component';

describe('TopfashnComponent', () => {
  let component: TopfashnComponent;
  let fixture: ComponentFixture<TopfashnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopfashnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopfashnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
