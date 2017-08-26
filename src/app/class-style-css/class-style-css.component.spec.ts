import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStyleCssComponent } from './class-style-css.component';

describe('ClassStyleCssComponent', () => {
  let component: ClassStyleCssComponent;
  let fixture: ComponentFixture<ClassStyleCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassStyleCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassStyleCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
