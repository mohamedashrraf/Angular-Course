import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Army1Component } from './army1.component';

describe('Army1Component', () => {
  let component: Army1Component;
  let fixture: ComponentFixture<Army1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Army1Component]
    });
    fixture = TestBed.createComponent(Army1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
