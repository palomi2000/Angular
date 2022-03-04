import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sampleCommonUtil'
})
export class SampleCommonUtilPipe implements PipeTransform {

  transform(values: string[]) {
    return values.filter(value => value === "NAME1");
  }
}
