import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FaqComponent } from './faq/faq.component';
import { DownloadComponent } from './download/download.component';
import { DealsComponent } from './deals/deals.component';
import { CardsComponent } from './cards/cards.component';
import { LoaderComponent } from './loader/loader.component';
import { IsLoadingDirective } from './is-loading.directive';
import { AlldealsComponent } from './alldeals/alldeals.component';

import { MoredetailsComponent } from './moredetails/moredetails.component';
import { SectionthreeComponent } from './sectionthree/sectionthree.component';
import { AllbrandsComponent } from './allbrands/allbrands.component';
import { WorksComponent } from './works/works.component';
import { TheExclusiveAppComponent } from './the-exclusive-app/the-exclusive-app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { DialogComponent } from './dialog/dialog.component';
import { FlashdealsComponent } from './flashdeals/flashdeals.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MerchantComponent } from './merchant/merchant.component';
import { BlogComponent } from './blog/blog.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { CareerComponent } from './career/career.component';
import { ApplycardComponent } from './applycard/applycard.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ScrollingTabsModule } from 'ngc-scrolling-tabs';
import { DragScrollModule } from 'ngx-drag-scroll';
import { ScrollableTabsComponent } from './scrollable-tabs/scrollable-tabs.component';
// import { CoreModule } from 'src/@core/core.module';
// import { CoreCommonModule } from 'src/@core/common.module';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { ArabicNumberPipe } from './pipe/arabic-number.pipe';
import { SetMapComponent } from './set-map/set-map.component';
import { NgxRecaptchaModule } from 'ngx-recaptcha-easy'

import { CarouselModule } from 'ngx-owl-carousel-o';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { CoreDirectivesModule } from 'src/@core/directives/directives';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NotFoundDataComponent } from './not-found-data/not-found-data.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    AboutComponent,
    HomeheaderComponent,
    FooterComponent,
    FaqComponent,
    DownloadComponent,
    DealsComponent,
    CardsComponent,
    LoaderComponent,
    IsLoadingDirective,
    AlldealsComponent,
    MoredetailsComponent,
    SectionthreeComponent,
    AllbrandsComponent,
    WorksComponent,
    TheExclusiveAppComponent,
    ContactusComponent,
    BrandDetailsComponent,
    DialogComponent,
    FlashdealsComponent,
    MerchantComponent,
    BlogComponent,
    ComplaintComponent,
    CareerComponent,
    ApplycardComponent,
    ScrollableTabsComponent,
    ArabicNumberPipe,
    SetMapComponent,
    PrivacyPolicyComponent,
    CopyrightsComponent,
    NotFoundDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule,
    CoreDirectivesModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    NgxSpinnerModule,
    ShareButtonsModule,
    ShareIconsModule,
    NgMatSearchBarModule,
    ScrollingTabsModule,
    DragScrollModule,
    NgxScrollTopModule,
    TabsModule.forRoot(),
    AnimateOnScrollModule.forRoot(),
    MaterialFileInputModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: CreateTranslateLoader,
        deps: [HttpClient]
      }
    }),
    /*  CarouselModule.forRoot(),*/
    NgxRecaptchaModule,
    CarouselModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
export function CreateTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
