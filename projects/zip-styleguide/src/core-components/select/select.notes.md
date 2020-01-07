# Select

```html
<zip-select
    label="Branches"
    [items]=items
    placeholder="Select a branch"
    (selectChange)="onSelect($event)"
    disabled=true
    [errorMessages]="{
        required: selectError
    }"
    [formControl]="selectForm.controls.required">
</zip-select>
```

Include `(selectChange)` method in your ts file