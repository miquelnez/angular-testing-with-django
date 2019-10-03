import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { By } from '@angular/platform-browser';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;
  let element: HTMLElement;
  let elementCheckbox: HTMLElement;
  let debugCheckbox;

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

  describe('when checkbox is clicked', () => {
    beforeEach(() => {
      debugCheckbox = fixture.debugElement.query(By.css('input')).nativeElement;
    });
    it('and disabled should not emit a changed event, and dont have to change its checked value', () => {
      component.disabled = true;
      component.checked = false;
      fixture.detectChanges();
      spyOn(component.changed, 'emit');
      debugCheckbox.click();
      fixture.detectChanges();
      expect(component.changed.emit).not.toHaveBeenCalled();
      expect(debugCheckbox.checked).toBeFalsy();
    });

    describe('and not disabled', () => {
      it('and not checked should emit a changed event with true and change its checked value to true', () => {
        component.disabled = false;
        component.checked = false;
        fixture.detectChanges();
        expect(debugCheckbox.checked).toBeFalsy();
        spyOn(component.changed, 'emit');
        debugCheckbox.click();
        fixture.detectChanges();
        expect(component.changed.emit).toHaveBeenCalledWith({ checked: true });
        expect(debugCheckbox.checked).toBeTruthy();
      });

      it('and checked should emit a changed event with false and change its checked value to false', () => {
        component.disabled = false;
        component.checked = true;
        fixture.detectChanges();
        expect(debugCheckbox.checked).toBeTruthy();
        spyOn(component.changed, 'emit');
        debugCheckbox.click();
        fixture.detectChanges();
        expect(component.changed.emit).toHaveBeenCalledWith({ checked: false });
        expect(debugCheckbox.checked).toBeFalsy();
      });
    });
  });

  it('emit change on a checkbox as default should emit a changed event', () => {
    spyOn(component.changed, 'emit');
    elementCheckbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.changed.emit).toHaveBeenCalled();
  });

});
