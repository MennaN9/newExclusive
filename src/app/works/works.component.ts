import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  deviceInfo: DeviceInfo | any;
  dir: string = "ltr";



  constructor(private deviceDetectorService: DeviceDetectorService,) { }

  ngOnInit(): void {

    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
    this.dir = document.dir;


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
