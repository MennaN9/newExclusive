import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-scrollable-tabs',
  templateUrl: './scrollable-tabs.component.html',
  styleUrls: ['./scrollable-tabs.component.scss']
})
export class ScrollableTabsComponent implements OnInit {

  @Input() tabs: any;
  selectedIndex = 0;
  abc?: string;
  leftTabIdx = 0;
  atStart = true;
  atEnd = false
  @Output() emitSelectedTab = new EventEmitter()
  constructor() { }

  ngOnInit() {
    this.emitSelectedTab.emit(this.tabs[0])
    this.abc = `translateX(0px)`
  }

  selectTab(index: any) {
    this.selectedIndex = index
    this.emitSelectedTab.emit(this.tabs[index])
    this.scrollTab(index - this.leftTabIdx - 1)
  }

  scrollTab(x: any) {
    if (this.atStart && x < 0 || this.atEnd && x > 0) {
      return
    }
    this.leftTabIdx = this.leftTabIdx + x
    this.abc = `translateX(${(this.leftTabIdx) * -140}px)`
    this.atStart = this.leftTabIdx === 0
    this.atEnd = this.leftTabIdx === this.tabs.length - 1
  }
  customOptions2: OwlOptions = {
    loop: true,
    // autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    rtl: true,
    navSpeed: 600,
    navText: ['', ''],
    margin: 8,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 6,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };

  customOptions1: OwlOptions = {
    loop: true,
    // autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    rtl: true,
    navSpeed: 600,
    navText: ['', ''],
    margin: 8,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 6,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };
}
