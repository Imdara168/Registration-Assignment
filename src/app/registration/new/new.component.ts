import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      cn_reserved_name: ['', Validators.required],
      cn_name_in_latin: ['', Validators.required],
      ba_main_bu: ['', Validators.required],
      ba_business_objective: ['', Validators.required],
      ba_main_business_objectives: ['', Validators.required],
      ad_p: ['', Validators.required],
      ad_district_khan: ['', Validators.required],
      ad_village: ['', Validators.required],
      ad_house_building_numb: ['', Validators.required],
      ad_longitude: ['', Validators.required],
      ad_attached_file: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      alert('Your Registration Successfully!');
    }
  }
}
