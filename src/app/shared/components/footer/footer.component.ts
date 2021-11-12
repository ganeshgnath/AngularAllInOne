import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerNewsLetterForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  copyYear = new Date().getFullYear();
  ngOnInit() {
    this.footerNewsLetterForm = this.formBuilder.group({
      email: ['', Validators.email],
    });
  }

  onFormSubmit(val: any): void {
    console.log(val);
  }
}
