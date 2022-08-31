import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaqVM } from '../models/viewModel/FaqVM';
import { TransferDataService } from '../services/transfer-data.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  dir: string = "ltr";
  getAllFaq: FaqVM[] = [];
  panelOpenState = false;
  constructor(private router: Router,
    public service: TransferDataService) { }

  ngOnInit(): void {
    this.dir = document.dir;
    this.service.GetAllFAQ().subscribe(
      res => {
        this.getAllFaq = res.Data;
        //console.log(res.Data)
      });
  }

}
