import { JoinCareerWeb } from './../models/viewModel/JoinCareerWeb';
import { JoinMerchantWeb } from './../models/viewModel/JoinMerchantWeb';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { CustomerCardRequestWeb } from '../models/viewModel/CustomerCardRequestWeb';
import { ResponseModel } from '../models/viewModel/response-model';
import { VacancyVM } from '../models/viewModel/VacancyVM';
import { TicketVM } from '../models/viewModel/TicketVM';
// import { Categories_SubCategories } from '../models/viewModel/Categories_SubCategories';
import { TicketComplaint } from '../models/viewModel/TicketComplaint';
import { NgxSpinnerService } from 'ngx-spinner';
import { Categories } from '../models/viewModel/Categories';
import { SubCategories } from '../models/viewModel/SubCategories';

@Injectable({
  providedIn: 'root'
})
export class CustomerWebService {

  constructor(private _httpClient: HttpClient, private spinnerService: NgxSpinnerService) { }

  createCardRequest(CardRequestVM: CustomerCardRequestWeb): Observable<ResponseModel<CustomerCardRequestWeb>> {
    return this._httpClient.post<ResponseModel<CustomerCardRequestWeb>>(`${environment.apiUrl}/CustomerWeb/AddCardRequest`, CardRequestVM);
  }

  JoinMerchant(JoinMerchantVM: JoinMerchantWeb): Observable<ResponseModel<JoinMerchantWeb>> {
    return this._httpClient.post<ResponseModel<JoinMerchantWeb>>(`${environment.apiUrl}/CustomerWeb/JoinMerchant`, JoinMerchantVM);
  }

  JoinCareer(JoinCareerObj: JoinCareerWeb) {
    //debugger;
    //console.log(JoinCareerObj)
    return this._httpClient.post<ResponseModel<JoinCareerWeb>>(`${environment.apiUrl}/CustomerWeb/JoinCareer`, JoinCareerObj);
  }

  UploadFile(uploadedFile: any) {
    return this._httpClient.post<ResponseModel<string>>(`${environment.apiUrl}/CustomerWeb/UploadFiles`, uploadedFile);
  }

  GetAllVacancies(): Observable<ResponseModel<VacancyVM[]>> {
    return this._httpClient.get<ResponseModel<VacancyVM[]>>(`${environment.apiUrl}/TransferDataWeb/GetAllVacancies`);
  }

  //--------------- New ApiTicket For Join Our Merchant (Merchant Join Us)-------------//
  JoinMerchantTicket(ticketVM: TicketVM): Observable<ResponseModel<TicketVM>> {
    return this._httpClient.post<ResponseModel<TicketVM>>(`${environment.crmapitUrl}/Tickets/Create`, ticketVM);
  }

  // GetAllCategoryAndSubCategory(): Observable<ResponseModel<Categories_SubCategories>> {
  //   return this._httpClient.get<ResponseModel<Categories_SubCategories>>(`${environment.crmapitUrl}/TransferData/Categories_SubCategories`);
  // }

  GetAllCategory(): Observable<ResponseModel<Categories[]>> {
    return this._httpClient.get<ResponseModel<Categories[]>>(`${environment.crmapitUrl}/TransferData/Categories`);
  }
  GetAllSubCategory(CategoryID:number): Observable<ResponseModel<SubCategories[]>> {
    return this._httpClient.get<ResponseModel<SubCategories[]>>(`${environment.crmapitUrl}/TransferData/SubCategories?CategoryID=`+CategoryID);
  }

  CreateTicketComplaint(ticketComplaint: TicketComplaint) {
    return this._httpClient.post<ResponseModel<TicketComplaint>>(`${environment.crmapitUrl}/Tickets/TicketComplaint`, ticketComplaint);
  }

  public showSpinner(): void {
    this.spinnerService.show();
  }

  public hideSpinner(): void {
    this.spinnerService.hide();
  }

}
