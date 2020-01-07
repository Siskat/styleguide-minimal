import { Component, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'zip-input',
    template: /* html */ `
        <mat-form-field class="zip" appearance="outline">
            <mat-label>{{ label }}</mat-label>
            <input matInput [placeholder]=placeholder [formControl]="formControl" [type]="type" [value]="value">
            <mat-hint>{{ hint }}</mat-hint>
            <mat-error *ngIf="formControl.invalid" innerHTML="{{error}}" (click)="linkClick()">{{error}}</mat-error>
            <span
                matSuffix
                *ngIf="
                formControl.touched &&
                formControl.invalid
                ">
            </span>
        </mat-form-field>
    `,
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ]
})

export class InputComponent implements ControlValueAccessor {
    @Input() public label;
    @Input() public placeholder;
    @Input() public icon;
    @Input() public hint;
    @Input() formControl = new FormControl();
    @Input() public type = 'text';
    @Input() errorMessages = {};
    @Input() value = '';

    @Output() linkClicked = new EventEmitter<boolean>();

    linkClick() {
        this.linkClicked.emit(true);
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
