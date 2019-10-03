import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('CheckboxComponent', () => {
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
    elementCheckbox = element.querySelector('input');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fdescribe('when checkbox is clicked', () => {
    it('and disabled should not emit a changed event', () => {
      component.disabled = true;
      fixture.detectChanges();
      spyOn(component.changed, 'emit');
      elementCheckbox.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.changed.emit).not.toHaveBeenCalled();
    });

    it('and not disabled should emit a changed event', () => {
      component.disabled = false;
      fixture.detectChanges();
      spyOn(component.changed, 'emit');
      elementCheckbox.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.changed.emit).toHaveBeenCalled();
    });
  });

  it('emit change on a checkbox as default should emit a changed event', () => {
    spyOn(component.changed, 'emit');
    elementCheckbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.changed.emit).toHaveBeenCalled();
  });

});
