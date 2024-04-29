import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxFormsTempComponent } from './max-forms-temp.component';

describe('MaxFormsTempComponent', () => {
  let component: MaxFormsTempComponent;
  let fixture: ComponentFixture<MaxFormsTempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaxFormsTempComponent]
    });
    fixture = TestBed.createComponent(MaxFormsTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
