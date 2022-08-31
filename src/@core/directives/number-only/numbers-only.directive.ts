import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[numberOnly]'
})
export class NumbersOnlyDirective {
    @Input('PhoneNumber') PhoneNumber: boolean = true;

    // @Input() CheckValue: boolean = false;

    // patternPhoneNumber1: RegExp = new RegExp('^((01)|(0)$)');
    patternPhoneNumber1: RegExp = new RegExp('^01[0125][0-9]{8}$');

    // patternPhoneNumber2: RegExp = new RegExp('^01[0-2|5]$');

    // DecimalNumber: RegExp = new RegExp("^[0-9]*(\.[0-9]{0,2})?$")


    constructor(private elRef: ElementRef) {
       // alert("NumbersOnlyDirective");
    }

    @HostListener('keypress', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        console.log(this.elRef.nativeElement.value)

         if(this.elRef.nativeElement.value == "" && event.which != 48)
         {
          event.preventDefault();
         }
         else if (this.elRef.nativeElement.value == "0" && event.which != 49)
         {
          event.preventDefault();
         }
         else if (this.elRef.nativeElement.value == "01" && (event.which != 48 && event.which != 49 &&  event.which != 50&& event.which != 53 ))
         {
          event.preventDefault();
         }
        // if (this.CheckValue) {
        //     if (this.elRef.nativeElement.value.includes('.') && event.which == 46)
        //         event.preventDefault();
        //     else if (event.which != 8 && event.which != 0 && (event.which < 48 && event.which !=  46) || event.which > 57) {
        //         event.preventDefault();
        //     }
        //     else if (!this.DecimalNumber.test(this.elRef.nativeElement.value + event.key))
        //         event.preventDefault();
        // }

        else if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
            event.preventDefault();
        }
        else if (this.PhoneNumber) {
            if (this.elRef.nativeElement.value.length >= 11)
                event.preventDefault();
            // else if (this.elRef.nativeElement.value.length < 2) {
            //     if (!this.patternPhoneNumber1.test(this.elRef.nativeElement.value + event.key))
            //         event.preventDefault();
            // }

            // else if (this.elRef.nativeElement.value.length < 3) {
            //     if (!this.patternPhoneNumber2.test(this.elRef.nativeElement.value + event.key))
            //         event.preventDefault();
            // }

        }


        //alert(this.elRef.nativeElement.value + event.key + "   " + this.patternPhoneNumber.test(this.elRef.nativeElement.value + event.key));

    }

}
