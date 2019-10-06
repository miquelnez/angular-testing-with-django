import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  disabled: boolean;

  @Output()
  clicked: EventEmitter<void>;

  constructor() {
    this.disabled = false;
    this.clicked = new EventEmitter<void>();
  }

  handleClick(ev: any) {
    ev.stopPropagation();
    console.log('ButtonComponent handleClick');
    this.clicked.emit();
  }

}
