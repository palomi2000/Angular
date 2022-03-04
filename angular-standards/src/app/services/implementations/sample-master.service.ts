import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SampleConfig } from 'src/app/configs/sample-config';
import { SampleApiUrlEnum } from 'src/app/enums/sample-api-route-enum';
import { SampleRegistrationApplicationResponse } from 'src/app/models/apis/responses/sample-registration-application-response';
import { SampleRegistrationSectionResponse } from 'src/app/models/apis/responses/sample-registration-section-response';
import { SampleRegistrationApplicationResponsePipe } from 'src/app/pipes/api-form-binding/sample-registration-application-response.pipe';
import { SampleRegistrationSectionResponsePipe } from 'src/app/pipes/api-form-binding/sample-registration-section-response.pipe';
import { SampleApiHttpService } from '../common/sample-api-http.service';
import { SampleMaster } from '../declarations/sample-master';

@Injectable()
export class SampleMasterService implements SampleMaster {
  constructor(
    private sampleApiHttpService: SampleApiHttpService,
    private sampleConfig: SampleConfig,
    private sampleRegistrationSectionResponsePipe: SampleRegistrationSectionResponsePipe,
    private sampleRegistrationApplicationResponsePipe: SampleRegistrationApplicationResponsePipe
  ) {}

  public fetchRegistrationSection() {
    return this.sampleApiHttpService
      .get(this.sampleConfig.getApiUrl(SampleApiUrlEnum.FETCH_REGISTRATION_SECTION))
      .pipe(
        map((response: any) => {
          return (response.data as SampleRegistrationSectionResponse[]).map(
            (sampleRegistrationSectionResponse) => {
              return this.sampleRegistrationSectionResponsePipe.transform(
                sampleRegistrationSectionResponse
              );
            }
          );
        })
      );
  }

  public fetchRegistrationApplication() {
    return this.sampleApiHttpService
      .get(
        this.sampleConfig.getApiUrl(SampleApiUrlEnum.FETCH_REGISTRATION_APPLICATION)
      )
      .pipe(
        map((response: any) => {
          return (response.data as SampleRegistrationApplicationResponse[]).map(
            (sampleRegistrationApplicationResponse) => {
              return this.sampleRegistrationApplicationResponsePipe.transform(
                sampleRegistrationApplicationResponse
              );
            }
          );
        })
      );
  }
}
