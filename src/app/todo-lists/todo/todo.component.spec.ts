import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { CommonsModule } from 'src/app/commons/commons.module';
import { NO_ERRORS_SCHEMA, Component, ViewChild } from '@angular/core';
import { Todo, emptyTodo } from '../models';
import { random } from 'lodash';

@Component({
  selector: 'app-test',
  template: `
    <app-todo
      [todo]="todo"
    ></app-todo>
  `,
})
class HostComponent {
  @ViewChild(TodoComponent, { static: true })
  child: TodoComponent;
  todo: Todo;
}

describe('TodoComponent', () => {
  let component: TodoComponent;
  let hostComponent: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let element: HTMLElement;
  let elementCheckbox;
  let elementButton;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ CommonsModule ],
      declarations: [ HostComponent, TodoComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    component = hostComponent.child;
    element = fixture.debugElement.nativeElement;

    hostComponent.todo = {
      id: 0,
      title: '',
      status: 'AR'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when input todo ', () => {
    it('is null should create, and todo should be emptyTodo', () => {
      hostComponent.todo  = null;
      fixture.detectChanges();
      expect(component).toBeTruthy();
      expect(component.todo).toEqual(emptyTodo);
    });
    it('is undefined should create, and todo should be emptyTodo', () => {
      hostComponent.todo  = undefined;
      fixture.detectChanges();
      expect(component).toBeTruthy();
      expect(component.todo).toEqual(emptyTodo);
    });

    it('is an empty object should create, and todo should be emptyTodo', () => {
      hostComponent.todo = {} as Todo;
      fixture.detectChanges();
      expect(component).toBeTruthy();
      expect(component.todo).toEqual(emptyTodo);
    });

    describe('is defined and', () => {
      describe('status is AR', () => {
        beforeEach(() => {
          hostComponent.todo = {
            id: random(1, 100),
            title: 'asdasdasd',
            status: 'AR'
          };
          fixture.detectChanges();
          elementCheckbox = element.querySelector('input');
          elementButton = element.querySelector('button');
        });
        it('should has the checkbox disabled', () => {
          expect(elementCheckbox.disabled).toBeTruthy();
        });
        it('should has no button', () => {
          expect(elementButton).toBeNull();
        });
      });

      describe('status is IN', () => {
        beforeEach(() => {
          hostComponent.todo = {
            id: random(1, 100),
            title: 'asdasdasd',
            status: 'IN'
          };
          fixture.detectChanges();
          elementCheckbox = element.querySelector('input');
          elementButton = element.querySelector('button');
        });
        it('should has the checkbox enabled', () => {
          expect(elementCheckbox.disabled).toBeFalsy();
        });

        it('should has the button enabled', () => {
          expect(elementButton.disabled).toBeFalsy();
        });
      });

      describe('status is CO', () => {
        beforeEach(() => {
          hostComponent.todo = {
            id: random(1, 100),
            title: 'asdasdasd',
            status: 'CO'
          };
          fixture.detectChanges();
          elementCheckbox = element.querySelector('input');
          elementButton = element.querySelector('button');
        });
        it('should has the checkbox enabled', () => {
          expect(elementCheckbox.disabled).toBeFalsy();
        });
        it('should has the button enabled', () => {
          expect(elementButton.disabled).toBeFalsy();
        });
      });
    });
  });
});
