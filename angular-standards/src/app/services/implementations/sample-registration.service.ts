import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SampleConfig } from 'src/app/configs/sample-config';
import { SampleApiUrlEnum } from 'src/app/enums/sample-api-route-enum';
import { SampleRegistrationResponse } from 'src/app/models/apis/responses/sample-registration-response';
import { SampleRegistrationResponsePipe } from 'src/app/pipes/api-form-binding/sample-registration-response.pipe';
import { SampleRegistrationRequestPipe } from 'src/app/pipes/form-api-binding/sample-registration-request.pipe';
import { SampleApiHttpService } from '../common/sample-api-http.service';
import { SampleRegistration } from '../declarations/sample-registration';

@Injectable()
export class SampleRegistrationService implements SampleRegistration {
  constructor(
    private sampleApiHttpService: SampleApiHttpService,
    private sampleConfig: SampleConfig,
    private sampleRegistrationRequestPipe: SampleRegistrationRequestPipe,
    private sampleRegistrationResponsePipe: SampleRegistrationResponsePipe
  ) {}

  registration(formData: any) {
    return this.sampleApiHttpService
      .post(
        this.sampleConfig.getApiUrl(SampleApiUrlEnum.REGISTRATION),
        this.sampleRegistrationRequestPipe.transform(formData)
      )
      .pipe(
        map((response: any) => {
          console.log(`Response :: ${JSON.stringify(response)}`);
          if (response.data)
            return this.sampleRegistrationResponsePipe.transform(
              response.data as SampleRegistrationResponse
            );
          return response;
        })
      );
  }
}
