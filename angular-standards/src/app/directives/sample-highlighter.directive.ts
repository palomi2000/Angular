import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[sampleHighlighter]',
})
export class SampleHighlighterDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'grey';
  }
}