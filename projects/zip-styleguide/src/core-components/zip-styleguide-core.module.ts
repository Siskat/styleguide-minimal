import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './select/select.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
    declarations: [
        InputComponent,
        SelectComponent,
        RadioButtonComponent
    ],
    imports: [
        BrowserModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatRadioModule
    ],
    exports: [
        InputComponent,
        SelectComponent,
        RadioButtonComponent
    ]
})
export class ZipStyleguideCoreModule { }
