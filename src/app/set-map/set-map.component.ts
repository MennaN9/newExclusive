import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const L: any;
@Component({
  selector: 'app-set-map',
  templateUrl: './set-map.component.html',
})
export class SetMapComponent implements OnInit {
 latitude: number=0; 
  longitude: number = 0;
  myMap!:any;
  constructor(private route: ActivatedRoute,) {
    this.latitude = Number(this.route.snapshot.paramMap.get("Latitude")?.toString());
    this.longitude = Number(this.route.snapshot.paramMap.get("Longitude")?.toString());
  }
  
  ngOnInit(): void {
    //this.watchPosition();
    let coords = [this.latitude, this.longitude];
    if (this.longitude == 0 && this.latitude == 0)
      return;
    /*var mapDiv = document.getElementById('map');
    if (mapDiv)
    mapDiv.innerHTML = "< div id='map' style='width: 100%; height: 100%;'>";*/
    //L.map('map')?.off();
   /* if (this.myMap != undefined)
      this.myMap = L.map('map').remove();*/
    
      this.myMap = L.map('map').setView(coords, 13)
    
    

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
        }).addTo(this.myMap);
    var marker = L.marker(coords).addTo(this.myMap);

    

    
  }
  

  
}
