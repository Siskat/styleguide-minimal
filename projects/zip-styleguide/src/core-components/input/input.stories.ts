import { storiesOf, moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatRadioModule, MatAutocompleteModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as markdown from './input.notes.md';

const moduleData = {
  imports: [
    BrowserModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatAutocompleteModule,
    BrowserAnimationsModule
  ]
}

const form = new FormGroup({
  field: new FormControl('', [Validators.required]),
  disabled: new FormControl({ value: 'n/a', disabled: true })
});

const error = 'Required, <a>click here</a>';

storiesOf('Input', module)
  .addDecorator(
    moduleMetadata(moduleData)
  )
  .add('Default', () => ({
    component: InputComponent,
    props: {
      label: 'Label',
      placeholder: 'Placeholder',
      hint: 'hint',
      formControl: form.controls.field,
      errorMessages: {
        required: error
      }
    }
  }), { notes: { markdown }})
  .add('Disabled', () => ({
    component: InputComponent,
    props: {
      label: 'Label',
      placeholder: 'Placeholder',
      hint: 'hint',
      formControl: form.controls.disabled,
      errorMessages: {
        required: 'Required'
      }
    }
  }), { notes: { markdown }});
