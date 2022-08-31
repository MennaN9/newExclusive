import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AcceptValidator, MaxSizeValidator } from '@angular-material-components/file-input';
import { CustomerCardRequestWeb } from '../models/viewModel/CustomerCardRequestWeb';
import { CustomerWebService } from '../services/Customer-Web.service';
import { MatSelectChange } from '@angular/material/select/public-api';
//import { CustomerWebService } from '../services/Customer-Web.service';

@Component({
  selector: 'app-applycard',
  templateUrl: './applycard.component.html',
  styleUrls: ['./applycard.component.scss']
})
export class ApplycardComponent implements OnInit {
  // form = this._formBuilder.group({
  //   Name: ['', Validators.required],
  //   Email: ['', Validators.required],
  //   Mobile: ['', Validators.required],
  //   recaptcha: ['', Validators.required],
  //   selectedCustomerType: ['', Validators.required]
  // });

  // token: string|undefined;

  model:any={};

  durationInSeconds = 5;
  CustomerCard: CustomerCardRequestWeb = new CustomerCardRequestWeb();
  message = "";
  constructor(private _formBuilder: FormBuilder,
    private customerWebService: CustomerWebService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {
    // this.token = undefined;
  }
  ngOnInit(): void {

  }


  onSubmit(form:NgForm) {

    //form.markAllAsTouched();
    const controls = form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        // invalid.push(name)
        return false;
      }
    }
    // console.debug(`Token [${this.token}] generated`);

    return this.customerWebService.createCardRequest(this.CustomerCard)
      .subscribe(() => {
        //form.reset();
        //this.CustomerCard=new CustomerCardRequestWeb();
        this.route.navigate(['/home']);
        this.openSnackBar();
      }, error => {
      });
  }

  onMemberChange(entry: number): void {
    this.CustomerCard.CustomerType = entry;
  }

  openSnackBar() {
    if (localStorage.getItem('lang') == "en") {
      this.message = 'Request Added Successfully'
    } else {
      this.message = 'تم إضافة الطلب بنجاح'
    }
    this._snackBar.open(this.message, "Click", { duration: this.durationInSeconds * 1000 });

  }

  selectedCustomerType(event:MatSelectChange){
    this.CustomerCard.CustomerType =event.value;
  }


  send(form:NgForm){
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    // console.debug(`Token [${this.token}] generated`);
  }



}
