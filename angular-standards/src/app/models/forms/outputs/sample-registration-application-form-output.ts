export class SampleRegistrationApplicationFormOutput {
  constructor(
    status: string,
    applicationName: string,
    applicationDescription: string,
    sortOrder: number
  ) {
    this.status = status;
    this.applicationName = applicationName;
    this.applicationDescription = applicationDescription;
    this.sortOrder = sortOrder;
  }

  status: string;
  applicationName: string;
  applicationDescription: string;
  sortOrder: number;
}
