import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input()
  checked: boolean;

  @Output()
  changed: EventEmitter<any>;

  constructor() {
    this.checked = true;
    this.changed = new EventEmitter();

  }

  handleChange(ev) {
    ev.stopPropagation();
    this.changed.emit({ chedled: ev.target.checked });
  }

}
