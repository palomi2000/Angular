import { Pipe, PipeTransform } from '@angular/core';
import { SampleRegistrationAddressRequest, SampleRegistrationContactRequest, SampleRegistrationRequest } from 'src/app/models/apis/requests/sample-registration-request';

@Pipe({
  name: "sampleRegistrationRequest",
})
export class SampleRegistrationRequestPipe implements PipeTransform {
  transform(formData: any) {
    let sampleRegistrationRequest = new SampleRegistrationRequest();
    sampleRegistrationRequest.email_id = formData.email;
    sampleRegistrationRequest.password = formData.password;
    sampleRegistrationRequest.surname = formData.surname;
    sampleRegistrationRequest.other_name = formData.otherName;
    sampleRegistrationRequest.section = formData.section;
    sampleRegistrationRequest.application = formData.application;
    sampleRegistrationRequest.contact_details = new SampleRegistrationContactRequest(
      [formData.private_phone_number],
      [formData.private_mobile_number],
      [formData.business_phone_number]
    );

    sampleRegistrationRequest.address_details = new SampleRegistrationAddressRequest(
      formData.address1,
      formData.address2,
      formData.address3,
      formData.address4,
      formData.address5
    );

    sampleRegistrationRequest.country = formData.country;
    sampleRegistrationRequest.gender = formData.gender;
    sampleRegistrationRequest.nic = formData.nic;
    sampleRegistrationRequest.photo = formData.photo;
    sampleRegistrationRequest.status = formData.status;

    console.log(`Request Body :: ${JSON.stringify(sampleRegistrationRequest)}`);
    return sampleRegistrationRequest;
  }
}
