import { Pipe, PipeTransform } from '@angular/core';
import { SampleRegistrationApplicationResponse } from 'src/app/models/apis/responses/sample-registration-application-response';
import { SampleRegistrationApplicationFormOutput } from 'src/app/models/forms/outputs/sample-registration-application-form-output';

@Pipe({
  name: "sampleRegistrationApplicationResponse",
})
export class SampleRegistrationApplicationResponsePipe
  implements PipeTransform
{
  transform(
    sampleRegistrationApplicationResponse: SampleRegistrationApplicationResponse
  ) {
    return new SampleRegistrationApplicationFormOutput(
      sampleRegistrationApplicationResponse.status,
      sampleRegistrationApplicationResponse.application_name,
      sampleRegistrationApplicationResponse.application_description,
      sampleRegistrationApplicationResponse.sort_order
    );
  }
}
