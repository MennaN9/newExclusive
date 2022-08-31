
import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[Times]'
})
export class TimesDirective {
    SecondElement:any

    constructor(private elRef: ElementRef) {
    }

    ngAfterContentInit(){
        this.startTimerSecond(this.elRef.nativeElement)
    }

    startTimerSecond(element:any) {
        setInterval(() => {
           if(element.innerHTML > 0) {
            element.innerHTML--;
            element.innerHTML= element.innerHTML;
        var Minutes  =element.parentElement.previousSibling.querySelector(".Minutes").innerHTML   
        } 
           else {
            element.innerHTML=59;
            var MinuteElement  =element.parentElement.previousSibling.querySelector(".Minutes");   
                   var minutes = Number(MinuteElement.innerHTML)
                   if(minutes ==0)
                   {
                        MinuteElement.innerHTML =""+ 59;
                        var HoursElement  =MinuteElement.parentElement.previousSibling.querySelector(".Hours");  
                        var Hours = Number(HoursElement.innerHTML)
                         HoursElement.innerHTML = (Hours-1).toString()

                        if(Hours == 0)
                        {
                            HoursElement.innerHTML = 23;
                            var DaysElement  =HoursElement.parentElement.previousSibling.querySelector(".Days"); 
                            var Days = Number(DaysElement.innerHTML)
                            DaysElement.innerHTML = (Days-1).toString()
                            if(Days ==0 && Hours == 0 && minutes==0 )
                            {
                                MinuteElement.innerHTML = ""+0;
                                HoursElement.innerHTML = ""+0;
                                DaysElement.innerHTML = ""+0;
                            }
                        }
                        else
                        {
                            HoursElement.innerHTML = (Hours-1).toString()
                        }
                       
                   }
                   else
                   {
                       MinuteElement.innerHTML = (minutes-1).toString()
                   }
           }
         },1000)
       }


    



// startTimerSecond(s:number) {
//  setInterval(() => {
//     if(s > 0) {
//       s--;
//     this.SecondElement.innerHTML= s;
//     } 
//     else {
//       s=60;
//       var MinuteElement=document.getElementsByClassName("Minutes")[0];
//         // if(MinuteElement!=null)
//         // {
//             var minutes = Number(MinuteElement.innerHTML)
//             if(minutes ==1)
//             {
//                 MinuteElement.innerHTML =""+ 60;
//                 var HoursElement=document.getElementsByClassName("Hours")[0];
//                 var Hours = Number(HoursElement.innerHTML)
//                 HoursElement.innerHTML = (Hours-1).toString()
//             }
//             else
//             {
//                 MinuteElement.innerHTML = (minutes-1).toString()
//             }
//         // }
//     }
//   },1000)
// }
}


