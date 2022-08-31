import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'xclusives | Egypt';
  currentLang?: string;
  isLoading = true;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  langImage = '../../assets/img/EG.png';
  constructor(
    private translate: TranslateService, private router: Router, private observer: BreakpointObserver
  ) { }

  ngOnInit() {
    // window.scrollTo(0, 0);
    // AOS.init({
    //   duration: 1200,
    // });
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    if (localStorage.getItem('lang') == "en") {
      this.translate.use('en');
      document.dir = "ltr"
    } else {
      this.translate.use('ar');
      document.dir = "rtl";
    }

    // } else {
    //   this.translate.use('ar');
    //   document.dir = "rtl";
    //   localStorage.setItem('lang', 'ar');
    //   localStorage.setItem('direction', 'rtl');
    // }
  }


  onActivate(event: any) {
    window.scroll(0, 0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)

  }




}

