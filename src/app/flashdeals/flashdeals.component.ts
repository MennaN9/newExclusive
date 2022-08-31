import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Data } from 'popper.js';
import { EvoucherWeb } from '../models/viewModel/evoucherWeb';
import { GetAllDataWeb } from '../models/viewModel/get-all-data-web';
import { TransferDataService } from '../services/transfer-data.service';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { TemplateRef } from '@angular/core';
import { environment } from './../../environments/environment';


@Component({
  selector: 'app-flashdeals',
  templateUrl: './flashdeals.component.html',
  styleUrls: ['./flashdeals.component.scss']
})
export class FlashdealsComponent implements OnInit {
  dir: string = "ltr";
  getAllDataWeb: GetAllDataWeb = new GetAllDataWeb();
  evoucherWeb: EvoucherWeb[] = [];
  evoucherWebCurrent: EvoucherWeb[] = [];
  deviceInfo: DeviceInfo | any;
  evoucherWebSearch: EvoucherWeb[] = [];
  firstTime: boolean = true;
  URLEvoucher: string="";
  chainNameSearch: string = "";

  idClick?: number;
  constructor(private router: Router,
    public service: TransferDataService,
    private deviceDetectorService: DeviceDetectorService,  ) { }



  ngOnInit(): void {
    this.dir = document.dir;
    this.service.showSpinner();
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
    this.service.GetEvouchers(0).subscribe(
      res => {
        this.evoucherWeb = res.Data;
        this.evoucherWebCurrent = [...this.evoucherWeb]
        //console.log(this.evoucherWeb);
        this.service.hideSpinner();
      });
    this.service.GetAlldata().subscribe(
      res => {
        this.getAllDataWeb = res.Data;
        this.service.hideSpinner();
      });
    // this.search()
  }
  customOptions1: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
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
        items: 1,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };
  onSlideChange(e: any, categoryId: number) {
    // this.activeSlides = e;
    //e.style.color = "red";
    this.idClick = categoryId
    this.evoucherWeb = this.evoucherWebCurrent.filter(x => x.CategoryIds.includes(categoryId))
  }
  toBrandDetails(chainID: number = 0) {
    this.router.navigate(['/brandDetails', chainID]);
  }
  mostPopular() {
    this.evoucherWeb = this.evoucherWeb.sort((a, b) => b.Weight - a.Weight);
  }
  aToZ() {
    if (this.dir == "ltr")
      this.evoucherWeb = this.evoucherWeb.sort((a, b) => a.ChainNameEN.localeCompare(b.ChainNameEN))
    else {
      this.evoucherWeb = this.evoucherWeb.sort((a, b) => a.ChainNameAR.localeCompare(b.ChainNameAR))
    }
  }
  bestValue() {
    this.evoucherWeb = this.evoucherWeb.sort((a, b) => b.XEVoucherValue - a.XEVoucherValue)
  }

  getDateTime(endDate: Date) {
    let today = new Date();
    //var x=this.getDifferenceInDays(endDate)
  }
  date1: Date = new Date();


  onButtonGroupClick($event: any) {
    let clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === "BUTTON") {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }

  }
  getDifferenceInDays(endDate: Date) {
    const diffInMs = Math.abs(Number(new Date(endDate.toString())) - Number(this.date1));
    return Math.floor((diffInMs / (1000 * 60 * 60)) / 24);
  }

  getDifferenceInHours(endDate: Date) {
    const diffInMs = Math.abs(Number(new Date(endDate.toString())) - Number(this.date1));
    return Math.floor((diffInMs / (1000 * 60 * 60)) - (this.getDifferenceInDays(endDate) * 24));
  }

  getDifferenceInMinutes(endDate: Date) {
    const diffInMs = Math.abs(Number(new Date(endDate.toString())) - Number(this.date1));
    return Math.floor((diffInMs / (1000 * 60)) - ((this.getDifferenceInDays(endDate) * 24 * 60) + (this.getDifferenceInHours(endDate) * 60)));
  }

  getDifferenceInSeconds(endDate: Date) {
    const diffInMs = Math.abs(Math.abs(Number(new Date(endDate.toString())) - Number(this.date1)));
    return Math.floor((diffInMs / 1000) - ((this.getDifferenceInMinutes(endDate) * 60) + ((this.getDifferenceInDays(endDate) * 24 * 60 * 60) + (this.getDifferenceInHours(endDate) * 60 * 60))));
  }

  // startTimer(s:number) {
  //   debugger;
  //   this.interval = setInterval(() => {
  //     if(this.timeSecond > 0) {
  //       this.timeSecond--;
        
  //     } else {
  //       this.timeSecond = 60;
  //     }
  //   },1000)
  //   alert(this.timeSecond)
  // }
  search() {
    if (this.firstTime)
      this.evoucherWebSearch = [...this.evoucherWeb];
    this.firstTime = false;
    this.evoucherWeb = this.evoucherWebSearch.filter(x => x.ChainNameEN.toLowerCase().startsWith(this.chainNameSearch.toLowerCase()) || x.ChainNameAR.toLowerCase().startsWith(this.chainNameSearch.toLowerCase()))
  }

  CheckDeviceType() {
    if (this.deviceInfo.os == "Android") {
      window.open("https://play.google.com/store/apps/details?id=com.olit.xclusivescard", "_blank");
    }
    else if (this.deviceInfo.os == "iOS") {
      window.open("https://apps.apple.com/eg/app/xclusivescard/id639390165", "_blank");
    }
    else {
      window.open("https://play.google.com/store/apps/details?id=com.olit.xclusivescard", "_blank");
    }
  }

  openShare(EvoucherID: number) {
    //const url = this.router.serializeUrl(
    //  this.router.createUrlTree(['/map', { Latitude: Latitude, Longitude: Longitude }])
    //);
    this.URLEvoucher = environment.URLEvoucher + `id=${EvoucherID}&type=1`;
  }
}
