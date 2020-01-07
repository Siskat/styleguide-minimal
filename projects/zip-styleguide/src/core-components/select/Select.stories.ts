import { storiesOf, moduleMetadata } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatRadioModule, MatAutocompleteModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, NgControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as markdown from './select.notes.md';
import { ZipStyleguideCoreModule } from '../zip-styleguide-core.module';

const moduleData = {
  imports: [
    BrowserModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ZipStyleguideCoreModule
  ]
}

storiesOf('Select', module)
  .addDecorator(
    moduleMetadata(moduleData)
  )
  .add('Default', () => ({
    component: SelectComponent,
    props: {
      label: 'This is a label',
      items: ['A','B','C'],
      placeholder: 'Placeholder...'
    }
  }), { notes: { markdown }})
  .add('Disabled', () => ({
    component: SelectComponent,
    props: {
      label: 'This is a label',
      items: ['A','B','C'],
      placeholder: 'Placeholder...',
      disabled: true
    }
  }), { notes: { markdown }});



