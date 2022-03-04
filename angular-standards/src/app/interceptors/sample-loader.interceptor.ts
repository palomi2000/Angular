import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { SampleAlertService } from "../services/common/sample-alert.service";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class SampleLoaderInterceptor implements HttpInterceptor {
  constructor(private sampleAlertService: SampleAlertService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.sampleAlertService.showProgress();
    return next
      .handle(request)
      .pipe(
        catchError((error) => {
          this.sampleAlertService.hideProgress();
          return throwError(() => error);
        })
      )
      .pipe(
        map<HttpEvent<any>, any>((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse)
            this.sampleAlertService.hideProgress();
          return event;
        })
      );
  }
}
