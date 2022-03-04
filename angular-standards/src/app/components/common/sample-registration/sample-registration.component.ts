import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SampleGenderEnum } from 'src/app/enums/sample-gender-enum';
import { SampleRegistrationStatusEnum } from 'src/app/enums/sample-registration-status-enum';
import { SampleRegistrationResponse } from 'src/app/models/apis/responses/sample-registration-response';
import { SampleRegistrationApplicationFormOutput } from 'src/app/models/forms/outputs/sample-registration-application-form-output';
import { SampleRegistrationSectionFormOutput } from 'src/app/models/forms/outputs/sample-registration-section-form-output';
import { SampleAlertService } from 'src/app/services/common/sample-alert.service';
import { SampleMaster } from 'src/app/services/declarations/sample-master';
import { SampleRegistration } from 'src/app/services/declarations/sample-registration';

@Component({
  selector: 'app-sample-registration',
  templateUrl: './sample-registration.component.html',
  styleUrls: ['./sample-registration.component.scss']
})
export class SampleRegistrationComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private sampleMaster: SampleMaster,
    private sampleRegistration: SampleRegistration,
    private sampleAlertService: SampleAlertService
  ) {}

  passwordVisibility = true;

  registrationForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
    section: new FormControl('', [Validators.required]),
    application: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    otherName: new FormControl('', [Validators.required]),
    nic: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required]),
    privatePhoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+230-?)|0)?[0-9]{8,}$'),
    ]),
    privateMobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+230-?)|0)?[0-9]{8,}$'),
    ]),
    businessPhoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+230-?)|0)?[0-9]{8,}$'),
    ]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl(),
    address3: new FormControl(),
    address4: new FormControl(),
    address5: new FormControl(),
    country: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  });

  sampleGenderEnum = SampleGenderEnum;
  sampleRegistrationStatusEnum = SampleRegistrationStatusEnum;

  sampleRegistrationSectionFormOutput!: SampleRegistrationSectionFormOutput[];
  sampleRegistrationApplicationFormOutput!: SampleRegistrationApplicationFormOutput[];

  ngOnInit(): void {
    this.sampleMaster.fetchRegistrationSection().subscribe({
      next: (response: SampleRegistrationSectionFormOutput[]) => {
        this.sampleRegistrationSectionFormOutput = response;
      },
      error: (error: any) => {
        console.error(`Error occurred :: ${error}`);
      },
      complete: () => console.info(`Section api call completed.`),
    });

    this.sampleMaster.fetchRegistrationApplication().subscribe({
      next: (response: SampleRegistrationApplicationFormOutput[]) => {
        this.sampleRegistrationApplicationFormOutput = response;
      },
      error: (error: any) => {
        console.error(`Error occurred :: ${error}`);
      },
      complete: () => console.info(`Application api call completed.`),
    });
  }

  onSubmit(): void {
    this.sampleRegistration.registration(this.registrationForm.value).subscribe({
      next: (response: any) => {
        if (response instanceof SampleRegistrationResponse) {
          console.log(
            `Response with email:: ${JSON.stringify(response.email)}`
          );
        } else {
          console.log(`Response: ${JSON.stringify(response)}`);
          this.sampleAlertService.showToast('', response.message, 'success');
        }
      },
      error: (error: any) => {
        this.sampleAlertService.showToast('', error.message, 'error');
      },
      complete: () => console.info(`Application api call completed.`),
    });
    console.info('Registration done successfully');
  }

  populateDataInForm() {
    this.registrationForm.patchValue({ email: 'Susmit.khot@gmail.com' });
    this.registrationForm.patchValue({ gender: SampleGenderEnum.OTHER });
    this.registrationForm.patchValue({
      status: SampleRegistrationStatusEnum.ACTIVE,
    });
    this.registrationForm.patchValue({
      section: 'Enforcement North',
    });
    this.registrationForm.patchValue({
      application: 'Back Office Application',
    });
  }

  get formControls() {
    return this.registrationForm.controls;
  }
}