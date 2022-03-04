import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleCommonRoutingModule } from '../routing/sample-common-routing.module';
import { SampleRegistrationComponent } from '../components/common/sample-registration/sample-registration.component';
import { SampleCommonUtilPipe } from '../pipes/common/sample-common-util.pipe';
import { SampleEnumToEntriesPipe } from '../pipes/common/sample-enum-to-entries.pipe';
import { SampleRegistrationApplicationResponsePipe } from '../pipes/api-form-binding/sample-registration-application-response.pipe';
import { SampleRegistrationSectionResponsePipe } from '../pipes/api-form-binding/sample-registration-section-response.pipe';
import { SampleRegistrationRequestPipe } from '../pipes/form-api-binding/sample-registration-request.pipe';
import { SampleRegistrationResponsePipe } from '../pipes/api-form-binding/sample-registration-response.pipe';
import { SampleHighlighterDirective } from '../directives/sample-highlighter.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    //COMPONENTS
    SampleRegistrationComponent,

    // PIPES
    SampleCommonUtilPipe,
    SampleEnumToEntriesPipe,
    SampleRegistrationSectionResponsePipe,
    SampleRegistrationApplicationResponsePipe,
    SampleRegistrationRequestPipe,
    SampleRegistrationResponsePipe,

    // DIRECTIVES
    SampleHighlighterDirective,
  ],
  imports: [
    CommonModule,
    SampleCommonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    NgbModule,
  ],
  exports: [
    //COMPONENTS
    SampleRegistrationComponent,

    // PIPES
    SampleCommonUtilPipe,
    SampleEnumToEntriesPipe,
    SampleRegistrationSectionResponsePipe,
    SampleRegistrationApplicationResponsePipe,
    SampleRegistrationRequestPipe,
    SampleRegistrationResponsePipe,

    // DIRECTIVES
    SampleHighlighterDirective,
  ],

   providers: [
    { provide: SampleRegistrationSectionResponsePipe },
    { provide: SampleRegistrationApplicationResponsePipe },
    { provide: SampleRegistrationRequestPipe },
    { provide: SampleRegistrationResponsePipe },
  ],
})
export class SampleCommonModule {}
