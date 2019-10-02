import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;
  let element: HTMLElement;
  let elementCheckbox: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ],
      // schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
    console.log(element);
    elementCheckbox = element.querySelector('input');
    console.log(elementCheckbox);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click on a checkbox should emit a changed event', () => {
    spyOn(component.changed, 'emit');
    elementCheckbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.changed.emit).toHaveBeenCalled();
  });

});
