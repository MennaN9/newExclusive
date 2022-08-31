import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, HostListener, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() contentHeader?: any;
  // lang: string | null = "ar";
  show: boolean = false;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  langImage = '../../assets/img/EG.png';
  navSrc = '../../assets/img/logo_2c448879fece8b7f6463c6566ddcb9b8_1x (1).png';
  constructor(private translate: TranslateService,
    private router: Router,
    private observer: BreakpointObserver,
    private cdref: ChangeDetectorRef) {

  }


  ngOnInit(): void {
    if (localStorage.getItem('lang') == "en") {
      this.langImage = '../../assets/img/EG.png'
    } else {
      this.langImage = '../../assets/img/SH.png'

    }
  }

  //@HostListener('window:scroll', ['$event'])

  //onWindowScroll() {
  //  let element = document.querySelector('.navbar') as HTMLElement;
  //  if (window.pageYOffset > element.clientHeight) {
  //    element.classList.add('navbar-inverse');
  //    element.classList.remove('links');
  //    this.navSrc = '../../assets/img/logo_df053aa66c72dfd11b3d241ff8098d13_1x.png'

  //  } else {
  //    element.classList.remove('navbar-inverse');
  //    this.navSrc = '../../assets/img/logo_2c448879fece8b7f6463c6566ddcb9b8_1x (1).png'
  //  }
  //}


  setLang(): void {
    window.location.reload();
    if (localStorage.getItem('lang') == "en") {
      this.translate.use('ar');
      document.dir = "rtl"
      localStorage.setItem('lang', 'ar');
      localStorage.setItem('direction', 'rtl');
    } else {
      this.translate.use('en');
      document.dir = "ltr";
      localStorage.setItem('lang', 'en');
      localStorage.setItem('direction', 'ltr');

    }

    // this.lang = localStorage.getItem("lang");
    // if (this.lang == "en") {
    //   this.lang = "ar";
    //   document.dir = "rtl";
    // } else {
    //   this.lang = "en";
    //   document.dir = "ltr";
    // }
    // this.translate.use(this.lang);
    // localStorage.setItem("lang", this.lang);
  }
  closeMenu(e: any) {
    e.target.closest('.dropdown').classList.remove('show');
    e.target.closest('.dropdown .dropdown-menu').classList.remove('show');
  }

  toggleHeaderMenu(event: any) {
    event.preventDefault();
    let body = document.querySelector('body');
    body?.classList.toggle('az-header-menu-show');
    //az-header-menu
  }
  openNav() {
    let element = document.getElementById('mySidenav') as HTMLElement;
    element.style.width = "100%";
  }

  closeNav() {
    let element = document.getElementById('mySidenav') as HTMLElement;
    element.style.width = "0";
  }
}
