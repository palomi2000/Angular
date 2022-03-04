import {
  HttpClientModule,
  HTTP_INTERCEPTORS as HttpInterceptors,
} from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../routing/app-routing.module";
import { AppComponent } from "../main/app.component";
import { SampleCommonModule } from "../modules/sample-common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SampleMasterService } from "../services/implementations/sample-master.service";
import { SampleMaster } from "../services/declarations/sample-master";
import { SampleLoaderInterceptor } from "../interceptors/sample-loader.interceptor";
import { SampleCommonInterceptor } from "../interceptors/sample-common.interceptor";
import { SampleRegistration } from "../services/declarations/sample-registration";
import { SampleRegistrationService } from "../services/implementations/sample-registration.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SampleCommonModule, //To keep the main module.ts file clean, we have created another file i.e sample-common.module.ts file where all the imports for pipes, components, etc are written and that file is imported here.
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SweetAlert2Module,
  ],
  providers: [
    { provide: SampleMaster, useClass: SampleMasterService },
    { provide: SampleRegistration, useClass: SampleRegistrationService },
    {
      provide: HttpInterceptors,
      useClass: SampleCommonInterceptor,
      multi: true,
    },
    {
      provide: HttpInterceptors,
      useClass: SampleLoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
