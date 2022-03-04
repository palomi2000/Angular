import { Pipe, PipeTransform } from '@angular/core';
import { SampleRegistrationResponse } from 'src/app/models/apis/responses/sample-registration-response';

@Pipe({
  name: 'sampleRegistrationResponse',
})
export class SampleRegistrationResponsePipe implements PipeTransform {
  transform(sampleRegistrationResponse: SampleRegistrationResponse) {
    console.log(`Response :: ${sampleRegistrationResponse}`);
    return sampleRegistrationResponse.email;
  }
}
