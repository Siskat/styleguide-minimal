import { storiesOf, moduleMetadata } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatRadioModule, MatAutocompleteModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as markdown from './radio-button.notes.md';

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
  field: new FormControl('', [Validators.required])
});

storiesOf('Radio Button', module)
  .addDecorator(
    moduleMetadata(moduleData)
  )
  .add('Default', () => ({
    component: RadioButtonComponent,
    props: {
      label: 'This is a label',
      formControl: form.controls.field
    }
  }), { notes: { markdown }});



