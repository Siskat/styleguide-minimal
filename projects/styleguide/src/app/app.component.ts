import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'styleguide';
  public error = 'Unable to find ABN. <a>Enter manually</a>';
  public selectError = 'This is required';
  public checkError = 'Please check this. This is required';
  public hint = 'Hint with <a>link</a>';

  email = new FormControl('', [Validators.required, Validators.email]);
  public form = new FormGroup({
    field: new FormControl('', [Validators.required])
  });

  public disabledForm = new FormGroup({
    field: new FormControl({ value: 'n/a', disabled: true })
  });

  public preFilled = new FormGroup({
    field: new FormControl()
  });

  public items = ['All branches', 'branch1', 'Sydney', 'Melbourne', 'Brisbane'];

  public radio = new FormGroup({
    field: new FormControl(true)
  });

  public selectForm = new FormGroup({
    required: new FormControl('', Validators.required)
  });
}
