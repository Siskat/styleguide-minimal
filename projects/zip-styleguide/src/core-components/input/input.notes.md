# Input

```html
<zip-input
    label="Label"
    placeholder="Enter text here"
    hint="assistant text"
    [formControl]="form.controls.field"
    [errorMessages]="{
        required: error
    }"
    type="text" 
    value="Pre filled text"
    (linkClicked)="openLink($event)">
</zip-input>
```

| Attribute | Type |  |
|---|---|---|
|`label`|string||
|`placeholder`|string||
|`hint`|string| Html formatted text. For example: `public hintWithHTML = 'Hint with <a>link</a>'`|
|`formControl`| Angular Formcontrol | Formcontrol from your ts file (disable the input from a formcontrol). For example: `new FormControl({ value: 'n/a', disabled: true })`|
|`errorMessages`| Array of strings | Key should be the error name of your form control |
|`type`| string | Html input types |
|`value` | string | For prefilled values. Can do `formControl.controls.value` |
|`(linkCLicked)` | Method from your ts file | For the HTML `<a>` tag hint |
