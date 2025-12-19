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
  standalone: true,
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
      ba_description: ['', Validators.required],
      ba_business_objective: ['', Validators.required],
      ba_main_business_objectives: ['', Validators.required],
      ba_activities_description: ['', Validators.required],
      ad_p: ['', Validators.required],
      ad_district_khan: ['', Validators.required],
      ad_commune_sangkat: ['', Validators.required],
      ad_village: ['', Validators.required],
      ad_street: ['', Validators.required],
      ad_house_building_numb: ['', Validators.required],
      ad_mobile_phone: ['', Validators.required],
      ad_email: ['', [Validators.required, Validators.email]],
      ad_latitude: ['', Validators.required],
      ad_longitude: ['', Validators.required],
      ad_attached_file: ['', Validators.required],
      d_i_am_director: ['', Validators.required],
      d_family_name_khmer: ['', Validators.required],
      d_given_name_khmer: ['', Validators.required],
      d_family_name_latin: ['', Validators.required],
      d_given_name_latin: ['', Validators.required],
      d_date_of_birth: ['', Validators.required],
      d_nationality: ['', Validators.required],
      d_gender: ['', Validators.required],
      d_national_id: ['', Validators.required],
      d_date_of_issue: ['', Validators.required],
      d_date_of_expiry: ['', Validators.required],
      d_country: ['', Validators.required],
      d_province_capital_city: ['', Validators.required],
      d_district_khan: ['', Validators.required],
      d_commune_sangkat: ['', Validators.required],
      d_village: ['', Validators.required],
      d_street: ['', Validators.required],
      d_house_building_numb: ['', Validators.required],
      d_mobile_phone: ['', Validators.required],
      d_email: ['', [Validators.required, Validators.email]],
      d_landline: ['', Validators.required],
      d_attached_file: ['', Validators.required],
      sns_type_of_class_shares: ['', Validators.required],
      sns_registered_share_capital_khr: ['', Validators.required],
      sns_share_par_value_khr: ['', Validators.required],
      sns_family_name_khmer: ['', Validators.required],
      sns_given_name_khmer: ['', Validators.required],
      sns_family_name_latin: ['', Validators.required],
      sns_given_name_latin: ['', Validators.required],
      sns_date_of_birth: ['', Validators.required],
      sns_nationality: ['', Validators.required],
      sns_gender: ['', Validators.required],
      sns_national_id: ['', Validators.required],
      sns_date_of_issue: ['', Validators.required],
      sns_date_of_expiry: ['', Validators.required],
      sns_number_of_shares: ['', Validators.required],
      sns_postal_code: ['', Validators.required],
      sns_country: ['', Validators.required],
      sns_province_capital_city: ['', Validators.required],
      sns_district_khan: ['', Validators.required],
      sns_commune_sangkat: ['', Validators.required],
      sns_village: ['', Validators.required],
      sns_street: ['', Validators.required],
      sns_house_building_numb: ['', Validators.required],
      sns_mobile_phone: ['', Validators.required],
      sns_email: ['', [Validators.required, Validators.email]],
      sns_attached_file: ['', Validators.required],
      sns_nationality_of_majority: ['', Validators.required],
      sns_number_of_shares_of_majority: ['', Validators.required],
      rp_authorization_letter: ['', Validators.required],
      ad_memorandum_articles_of_association: ['', Validators.required],
      ad_supporting_documents: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      alert('Your Registration Successfully!');
    }
  }
}