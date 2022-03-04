import { Injectable, isDevMode } from '@angular/core';
import { environment as DevEnvironment } from '../../environments/environment';
import { environment as ProdEnvironment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SampleConfig {
  BACKEND_API_URL: string;

  constructor() {
    if (isDevMode()) {
      this.BACKEND_API_URL = DevEnvironment.BACKEND_API_URL;
    } else {
      this.BACKEND_API_URL = ProdEnvironment.BACKEND_API_URL;
    }
  }

  getBaseUrl() {
    return this.BACKEND_API_URL;
  }

  getApiUrl(apiRoute: string) {
    return this.BACKEND_API_URL.concat(apiRoute);
  }
}
