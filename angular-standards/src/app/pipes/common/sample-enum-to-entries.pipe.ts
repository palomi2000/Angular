import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "sampleEnumToEntries",
})
export class SampleEnumToEntriesPipe implements PipeTransform {
  transform(data: Object) {
    return Object.entries(data);
  }
}
