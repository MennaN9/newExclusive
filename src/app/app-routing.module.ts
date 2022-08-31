import { CopyrightsComponent } from './copyrights/copyrights.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ApplycardComponent } from './applycard/applycard.component';
import { CareerComponent } from './career/career.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { BlogComponent } from './blog/blog.component';
import { MerchantComponent } from './merchant/merchant.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { FlashdealsComponent } from './flashdeals/flashdeals.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { MoredetailsComponent } from './moredetails/moredetails.component';
import { AlldealsComponent } from './alldeals/alldeals.component';
import { CardsComponent } from './cards/cards.component';
import { DealsComponent } from './deals/deals.component';
import { DownloadComponent } from './download/download.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FaqComponent } from './faq/faq.component';
import { WorksComponent } from './works/works.component';
import { SetMapComponent } from './set-map/set-map.component';
import { NotFoundDataComponent } from './not-found-data/not-found-data.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeheaderComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'card', component: CardsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'alldeals', component: AlldealsComponent },
  { path: 'works', component: WorksComponent },
  { path: 'moredetails', component: MoredetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'brandDetails/:ChainID', component: BrandDetailsComponent },
  { path: 'flashdeals', component: FlashdealsComponent },
  { path: 'merchant', component: MerchantComponent },
  { path: 'apply', component: ApplycardComponent },
  { path: 'career', component: CareerComponent },
  { path: 'complaint', component: ComplaintComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'map', component: SetMapComponent },
  { path: 'policy', component: PrivacyPolicyComponent },
  { path: 'copyrights', component: CopyrightsComponent },
  { path: 'data', component: NotFoundDataComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
