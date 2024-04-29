import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxFormsRactiveComponent } from './max-forms-ractive.component';

describe('MaxFormsRactiveComponent', () => {
  let component: MaxFormsRactiveComponent;
  let fixture: ComponentFixture<MaxFormsRactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaxFormsRactiveComponent]
    });
    fixture = TestBed.createComponent(MaxFormsRactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
