import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [CheckboxComponent, ButtonComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [CheckboxComponent, ButtonComponent, CardComponent],
})
export class CommonsModule { }
