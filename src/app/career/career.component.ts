import { VacancyVM } from './../models/viewModel/VacancyVM';
import { Data } from 'popper.js';
import { JoinCareerWeb } from './../models/viewModel/JoinCareerWeb';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { CustomerWebService } from '../services/Customer-Web.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectChange } from '@angular/material/select';
import { HttpStatusCode } from '../models/enums/http-status-code';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  form = this._formBuilder.group({
    customerName: ['', Validators.required],
    Mobile: ['', Validators.required],
    Email: ['', Validators.required],
    //select:['', Validators.required],
    file:['', Validators.required],
    //isActive:['', Validators.required],
  });

  newJoinCareer:JoinCareerWeb=new JoinCareerWeb();
  message = "";
  public selectedFile!:FileList;
  newBlogForm!: FormGroup;
  durationInSeconds = 5;
  succeeded:boolean=false;
  public fileToUpload!: File;

  vacancies!:VacancyVM[];

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private customerWebService:CustomerWebService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
   this.customerWebService.showSpinner();
    this.customerWebService.GetAllVacancies()
      .subscribe(
        (res: any) => {
      this.vacancies=res.Data

      this.customerWebService.hideSpinner();
        }, (error: any) => {
          this.customerWebService.hideSpinner();

      }, () => {
        this.customerWebService.hideSpinner();
      });

    this.succeeded=false;
  }

  // selected(event:MatSelectChange){
  //   this.newJoinCareer.VacancyID=event.value;
  //   this.succeeded=true;
  // }

  onSubmit(form: FormGroup) {
    form.markAllAsTouched();
    var CurrentFileExtention =  form.controls["file"]["value"]["_fileNames"].split('.').pop().toLowerCase();
    var extentions = ["jpeg", "png", "pdf", "jpg", "doc" ];
    if(!extentions.includes(CurrentFileExtention)){
      this.openErrorBar("File Must Be Valid")
      return false;
    }

    const controls = form.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            // invalid.push(name)
            return false;
        }
    }

    //debugger;
    this.newJoinCareer.IsActive=true;
    return this.customerWebService.JoinCareer(this.newJoinCareer)
      .subscribe(() => {
        this.succeeded=false;
        this.closeDialogWithTemplateRef()
        this.form.reset();
        this.router.navigate(['/career']);
        this.openSnackBar();
      }, error => {
        //this.openErrorBar(massage);
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

  fileUpload(event:any){
    this.succeeded=false;
    let formData=new FormData();
    this.selectedFile=event.target.files;
    var uploadedFile=this.selectedFile.item(0);
    formData.append('file',uploadedFile as File);

    this.customerWebService.UploadFile(formData)
    .subscribe(res => {
      if(res.HttpStatusCode==HttpStatusCode.OK)
      {
        this.newJoinCareer.Attachement=res.Data;
        this.succeeded=true;
      }else{
        this.succeeded=false;

        this.openErrorBar(res.Message);
        //this.message=res.Message;
      }

    //console.log(res);
    }, error => {

    });

  }

  openErrorBar(massage:string) {
    if (localStorage.getItem('lang') == "en") {
      this.message = massage;
    } else {
      this.message ='الملف غير صالح'
    }
    this._snackBar.open(this.message, "Click", { duration: this.durationInSeconds * 1000 });

  }

  // selectedActivation(event:MatSelectChange){
  //   debugger;
  //   this.newJoinCareer.IsActive =event.value;
  //   console.log(event.value)
  //   console.log(this.newJoinCareer.IsActive)
  // }

  SaveID(id:number){
    //console.log(id);
    this.newJoinCareer.VacancyID=id;

    //console.log(this.newJoinCareer.VacancyID)
  }
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef,
      {
        // height: '600px',
        width: '800px',
      });
  }


  closeDialogWithTemplateRef() {
    this.dialog.closeAll();
  }

}
