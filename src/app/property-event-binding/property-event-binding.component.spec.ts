import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyEventBindingComponent } from './property-event-binding.component';

describe('PropertyEventBindingComponent', () => {
  let component: PropertyEventBindingComponent;
  let fixture: ComponentFixture<PropertyEventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyEventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
