import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdealsComponent } from './topdeals.component';

describe('TopdealsComponent', () => {
  let component: TopdealsComponent;
  let fixture: ComponentFixture<TopdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
