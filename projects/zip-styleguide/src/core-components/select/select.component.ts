import { Component, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'zip-select',
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => SelectComponent),
          multi: true
        }
    ],
    template: /* html */ `
    <mat-form-field appearance="outline">
        <mat-label>{{ label }}</mat-label>
        <mat-select [placeholder]=placeholder disableOptionCentering [formControl]=formControl
            (selectionChange)="select($event)">
            <mat-option *ngFor="let item of items" [value]="item">
                {{ item }}
            </mat-option>
        </mat-select>
        <mat-error *ngIf="formControl.invalid" innerHTML="{{error}}" (click)="linkClick()">{{error}}</mat-error>
    </mat-form-field>
    `,
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements ControlValueAccessor {

    @Input() public label;
    @Input() public items = [];
    @Input() public placeholder = 'Please select one...';
    @Input() public disabled = false;
    @Input() errorMessages = {};
    @Input() formControl = new FormControl();

    @Output() selectChange = new EventEmitter();
    @Output() linkClicked = new EventEmitter<boolean>();

    linkClick() {
        this.linkClicked.emit(true);
    }

    select(option) {
        this.selectChange.emit(option.value);
    }

    get invalid() {
        return this.formControl.status === 'INVALID';
    }

    get error() {
        if (!this.formControl.errors) {
            return null;
        }
        const error = Object.keys(this.formControl.errors)
            .map(validationError => this.errorMessages[validationError])[0];

        return error || 'Invalid';
    }

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
