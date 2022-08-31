import { Component, OnInit, OnDestroy } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  public contentHeader?: object;
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Layout Empty',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Layouts',
            isLink: true,
            link: '/'
          },
          {
            name: 'Layout Empty',
            isLink: false
          }
        ]
      }
    };
  }
}


