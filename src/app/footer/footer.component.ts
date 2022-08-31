import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  id: string = 'login';
  footerimg = '../../assets/img/Xclusives-Hotline-Number-White-Arabic-150x45.png';
  showScroll?: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 600;
  constructor() {

  }



  ngOnInit(): void {
    if (localStorage.getItem('lang') == "en") {
      this.footerimg = '../../assets/img/Xclusives-Hotline-Number-White-150x45.png'
    } else {
      this.footerimg = '../../assets/img/Xclusives-Hotline-Number-White-Arabic-150x45.png'

    }

  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
      this.showScroll = true;
    }
    else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }
}
