export class OfferWeb {

  ID!: number;
  ChainNameEN!: string;
  ChainNameAR!: string;
  DiscountValue!: number;
  RefundValue!: number;
  FK_ChainID!: number;
  Value!: number;
  OfferWeight!: number;
  URLLogImg!: string;
  StartDate!: Date;
  EndDate!: Date;
  //TermsAndConditionsAR!: string;
  //TermsAndConditionsEN!: string;
  OfferDescriptionEN!: string;
  OfferDescriptionAR!: string;
  AbbreviationDescriptionEN!: string;
  AbbreviationDescriptionAR!: string;
  AbbreviationValueEN!: string;
  AbbreviationValueAR!: string;
  LogoURL!: string;
  ProductImage!: string;
  BrandImage!: string;
  ChainStatus!: boolean;
  OfferValue!: number;
  OfferID!: number;
  LayoutTypeID!: number;
  CategoryIds: number[] = [];
  OfferDiscountTypeAR!: string;
  OfferDiscountTypeEN!: string;
 
}
