import { Pipe, PipeTransform } from '@angular/core';
import { SampleRegistrationSectionResponse } from 'src/app/models/apis/responses/sample-registration-section-response';
import { SampleRegistrationSectionFormOutput } from 'src/app/models/forms/outputs/sample-registration-section-form-output';

@Pipe({
  name: "sampleRegistrationSectionResponse",
})
export class SampleRegistrationSectionResponsePipe implements PipeTransform {
  transform(sampleRegistrationSectionResponse: SampleRegistrationSectionResponse) {
    return new SampleRegistrationSectionFormOutput(
      sampleRegistrationSectionResponse.status,
      sampleRegistrationSectionResponse.section_name,
      sampleRegistrationSectionResponse.section_description,
      sampleRegistrationSectionResponse.sort_order
    );
  }
}
