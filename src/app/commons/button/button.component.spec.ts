import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let debugButton;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugButton = fixture.debugElement.query(By.css('button')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when disabled is', () => {
    it('false and we click it should emit a changed event', () => {
      component.disabled = false;
      fixture.detectChanges();
      spyOn(component.clicked, 'emit');
      debugButton.click();
      fixture.detectChanges();
      expect(component.clicked.emit).toHaveBeenCalled();
    });

    it('true and we click it should emit a changed event', () => {
      component.disabled = true;
      fixture.detectChanges();
      spyOn(component.clicked, 'emit');
      debugButton.click();
      fixture.detectChanges();
      expect(component.clicked.emit).not.toHaveBeenCalled();
    });
  });
});
