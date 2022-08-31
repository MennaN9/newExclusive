// import { Categories_SubCategories } from './../models/viewModel/Categories_SubCategories';
import { SubCategories } from './../models/viewModel/SubCategories';
import { Categories } from './../models/viewModel/Categories';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerWebService } from '../services/Customer-Web.service';
import { TicketComplaint } from '../models/viewModel/TicketComplaint';
import { MatSelectChange } from '@angular/material/select/public-api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {

  form = this._formBuilder.group({
    Name: ['', Validators.required],
    Mobile: ['', Validators.required],
    ComplaintDetails: ['', Validators.required],
    email: ['', Validators.required],
    selectCategory:['', Validators.required],
    selectSubCategory:['', Validators.required],
    selectGender:['', Validators.required]
  });

  constructor(
    private _formBuilder: FormBuilder,
    private customerWebService:CustomerWebService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) { }

    allCategory:Categories[] =[];
    allSubCategories:SubCategories[] =[];

    message = "";

    ticketComplaint:TicketComplaint=new TicketComplaint()
    durationInSeconds = 5;

  ngOnInit(): void {
    this.customerWebService.GetAllCategory()
    .subscribe(res => {
      this.allCategory=res.Data;
    }, error => {
    });
  }

  onSubmit(form: FormGroup) {

    form.markAllAsTouched();
    const controls = form.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            return false;
        }
    }

    return this.customerWebService.CreateTicketComplaint(this.ticketComplaint)
    .subscribe(() => {
      this.router.navigate(['/home']);
        this.openSnackBar() ;
    }, error => {
      });
  }
  SubCategory(event:any)
  {
   return this.customerWebService.GetAllSubCategory(event)
    .subscribe(res => {
      this.allSubCategories=res.Data;
      
    }, error => {
    });
   
  }

  openSnackBar() {
    if (localStorage.getItem('lang') == "en") {
      this.message = 'Saved Successfully'
    } else {
      this.message = 'تم الحفظ بنجاح'
    }
    this._snackBar.open(this.message, "Click", { duration: this.durationInSeconds * 1000 });

  }

  selectedCategory(event:MatSelectChange){
    this.ticketComplaint.MainCategoryID=event.value
  }

  selectedSubCategory(event:MatSelectChange){
    this.ticketComplaint.SubCategoryID=event.value
  }

  // onGenderChange(entry: number): void {

  //   if(entry==1){
  //     this.ticketComplaint.Gender=1;
  //   }
  //   if(entry==2){
  //     this.ticketComplaint.Gender=2;
  //   }
  // }


  selectedGender(event:MatSelectChange){
    this.ticketComplaint.Gender=event.value;
  }


}
