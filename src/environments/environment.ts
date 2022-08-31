// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  // baseUrl: 'http://localhost:1169/',
  // apiUrl: 'http://localhost:1169/Api',
  currentApi:'https://xclusiveswebcloneportal.xclusives.co', // for share buttons
  URLEvoucher:`https://Clone.xclusives.co/offers/offerDetails?`,
  crmapitUrl: 'https://crmapitest.xclusives.co/api',
  
   baseUrl: 'https://xclusiveswebapi.xclusives.co/',
   apiUrl: 'https://xclusiveswebapi.xclusives.co/Api',
  // currentApi:'https://xclusiveswebcloneportal.xclusives.co', // for share buttons


 /* xclusiveUrl: 'https://clone.xclusives.co/CustomerActivities/Details?Mobile=',
  xclusiveUrlId: 'https://cloneprodapi.xclusives.co/api/customer/GetCustomerIdByMobile?Mobile=',
  IntegrationUrl: 'http://41.33.214.107:5056/'*/


  recaptcha: {
    siteKey: '6LfKNi0cAAAAACeYwFRY9_d_qjGhpiwYUo5gNW5-',
  },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
