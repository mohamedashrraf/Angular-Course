import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildArmy1Component } from './child-army1.component';

describe('ChildArmy1Component', () => {
  let component: ChildArmy1Component;
  let fixture: ComponentFixture<ChildArmy1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildArmy1Component]
    });
    fixture = TestBed.createComponent(ChildArmy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
