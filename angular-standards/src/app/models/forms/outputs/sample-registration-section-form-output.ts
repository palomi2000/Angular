export class SampleRegistrationSectionFormOutput {
  constructor(
    status: string,
    sectionName: string,
    sectionDescription: string,
    sortOrder: number
  ) {
    this.status = status;
    this.sectionName = sectionName;
    this.sectionDescription = sectionDescription;
    this.sortOrder = sortOrder;
  }

  status: string;
  sectionName: string;
  sectionDescription: string;
  sortOrder: number;
}
