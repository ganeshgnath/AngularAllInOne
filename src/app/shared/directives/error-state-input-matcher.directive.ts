import { Directive } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

@Directive({
  selector: '[appErrorStateInputMatcher]'
})
export class ErrorStateInputMatcherDirective {

  constructor() { }
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}
