import { environment } from './../../environments/environment';
import { StoresDataWeb } from './../models/viewModel/stores-data-web';
import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllDataOFChainWeb } from '../models/viewModel/all-data-ofchain-web';
import { EvoucherWeb } from '../models/viewModel/evoucherWeb';
import { OfferWeb } from '../models/viewModel/offer web';
import { TransferDataService } from '../services/transfer-data.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { NgForm } from '@angular/forms';
import { url } from 'inspector';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent implements OnInit {

  allDataOFChainWeb: AllDataOFChainWeb = new AllDataOFChainWeb()
  chainID!: number;
  dir: string = "ltr";
  offerWeb: OfferWeb[] = [];
  evoucherWeb: EvoucherWeb[] = [];
  Latitude: number = 0;
  Longitude: number = 0;
  deviceInfo: DeviceInfo | any;

  StoreAddress!:string;

  Stores: StoresDataWeb[] = [];
  lat: any;
  lng: any;

  constructor(private transferDataService: TransferDataService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private deviceDetectorService: DeviceDetectorService,
  ) {
    this.chainID = Number(this.route.snapshot.paramMap.get("ChainID")?.toString());
  }

  ngOnInit(): void {

    this.transferDataService.showSpinner();
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();

    this.dir = document.dir;
    this.transferDataService.GetChainAllData(this.chainID).subscribe(
      res => {
        this.allDataOFChainWeb = res.Data[0];

        this.Stores = this.allDataOFChainWeb.Stores;
        //this.StorePhone=this.allDataOFChainWeb.Stores

        //this.StorePhone=this.allDataOFChainWeb.
        //console.log(res.Data);
        //console.log("allDataOFChainWeb");
        //console.log(this.allDataOFChainWeb);
        this.transferDataService.hideSpinner();
      },
      err => { },
      () => { this.getOffer(); this.getEvoucher(); }

    );


  }

  getOffer() {
    this.transferDataService.GetOffers(this.allDataOFChainWeb.ChainID).subscribe(
      res => {
        this.offerWeb = res.Data
      }

    )
  }

  getEvoucher() {
    this.transferDataService.GetEvouchers(this.allDataOFChainWeb.ChainID).subscribe(
      res => {
        this.evoucherWeb = res.Data
      }

    )
  }

  getMap(Latitude: number, Longitude: number) {

    //this.router.navigate(['/map', { Latitude: Latitude, Longitude: Longitude }]);

    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/map', { Latitude: Latitude, Longitude: Longitude }])
    );
    this.StoreAddress = `https://www.google.com/maps/search/?api=1&query=${Latitude},${Longitude}`;;

    window.open(`https://www.google.com/maps/search/?api=1&query=${Latitude},${Longitude}`, '_blank');
  }

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

  aToZ() {
    if (this.dir == "ltr")
      this.Stores = this.Stores.sort((a, b) => a.StoreNameEN.localeCompare(b.StoreNameEN))
    else {
      this.Stores = this.Stores.sort((a, b) => a.StoreNameAR.localeCompare(b.StoreNameAR))
    }
  }
  bestValue() {
    //this.Stores = this.Stores.sort((a, b) => b.XEVoucherValue - a.XEVoucherValue)
  }


  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef,
      {
        // height: '400px',
        width: '600px',
      });
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          //console.log("Latitude: " + position.coords.latitude +
          //  "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          //console.log(this.lat);
          //console.log(this.lat);
        }
      },
        () => { });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  calculate() {
    this.getCurrentLocation();

  }

  openShare(templateRef: TemplateRef<any>,Latitude: number, Longitude: number)
  {
    //const url = this.router.serializeUrl(
    //  this.router.createUrlTree(['/map', { Latitude: Latitude, Longitude: Longitude }])
    //);
    this.StoreAddress = `https://www.google.com/maps/search/?api=1&query=${Latitude},${Longitude}`;
    //console.log(this.StoreAddress);
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

}


