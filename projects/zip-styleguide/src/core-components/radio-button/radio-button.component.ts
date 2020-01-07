import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'zip-radio-button',
  template: /* html */ `
    <mat-radio-button [value]=label>{{ label }}</mat-radio-button>
  `,
  styleUrls: ['./radio-button.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RadioButtonComponent),
        multi: true
    }
]
})
export class RadioButtonComponent implements ControlValueAccessor {

  @Input() public label;
  @Input() formControl = new FormControl();

  writeValue(value: any) {
      if (value === this.formControl.value) {
          return;
      }
      this.formControl.setValue(value);
      this.onChangeCallback(value);
  }

  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }

  onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };
}
