import { TicketVM } from './../models/viewModel/TicketVM';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { JoinMerchantWeb } from '../models/viewModel/JoinMerchantWeb';
import { CustomerWebService } from '../services/Customer-Web.service';
import { MatSelectChange } from '@angular/material/select/public-api';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatHorizontalStepper;
  isEditable = false;
  token: string|undefined;
  constructor(private _formBuilder: FormBuilder,
    private customerWebService: CustomerWebService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {this.token = undefined; }
  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    selectGender: ['', Validators.required],
  });


  // secondFormGroup = this._formBuilder.group({
  //   Bname: ['', Validators.required],
  //   Cname: ['', Validators.required],
  //   Nbranches: ['', Validators.required],
  //   website: ['', Validators.required],
  //   captcha: ['', Validators.required,],
  // });

  validatePersionAddress: boolean = false;
  durationInSeconds = 5;
  joinMerchantWeb: JoinMerchantWeb=new JoinMerchantWeb();
  ticketVM:TicketVM=new TicketVM();
  message = "";

  ngOnInit(): void {
  }

  onSubmit() {
    //debugger;
    this.customerWebService.JoinMerchant(this.joinMerchantWeb)
    .subscribe(() => {
      this.ticketVM.Name=this.joinMerchantWeb.CustomerName;
      this.ticketVM.Email=this.joinMerchantWeb.Email;
      this.ticketVM.Mobile=this.joinMerchantWeb.Mobile;
      this.ticketVM.TicketForJoinMerchant=true;
      this.ticketVM.TicketDetails=
      "NumberOfBranches : "+this.joinMerchantWeb.NumberOfBranches+
      " , BusinessName : "+this.joinMerchantWeb.BusinessName+
      " , CommercialName : "+this.joinMerchantWeb.CommercialName+
      " , WebsiteLink : "+this.joinMerchantWeb.WebsiteLink

      //console.log(this.ticketVM);
        this.customerWebService.JoinMerchantTicket(this.ticketVM).subscribe();
        this.route.navigate(['/home']);
        this.openSnackBar() ;
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

  onGenderChange(entry: number): void {

    if(entry==1){
      this.ticketVM.Gender=1;
    }
    if(entry==2){
      this.ticketVM.Gender=2;
    }
  }

  selectedGender(event:MatSelectChange){
    //debugger;
    this.ticketVM.Gender=event.value;
    //console.log(this.ticketVM.Gender)
  }


  send(form:NgForm){
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    //console.debug(`Token [${this.token}] generated`);
  }


}
