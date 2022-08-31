import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[BlockPaste]'
})
export class PasteDirective {

    constructor() { }

    @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
      e.preventDefault();
    }

    @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
      e.preventDefault();
    }

    @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
      e.preventDefault();
    }

}
