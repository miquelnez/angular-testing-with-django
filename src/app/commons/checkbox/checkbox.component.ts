import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input()
  checked: boolean;

  @Input()
  label: string;

  @Input()
  name: string;

  @Output()
  changed: EventEmitter<any>;

  constructor() {
    this.checked = true;
    this.changed = new EventEmitter();

  }

  handleChange(ev) {
    ev.stopPropagation();
    this.changed.emit({ checked: ev.target.checked });
  }

}
