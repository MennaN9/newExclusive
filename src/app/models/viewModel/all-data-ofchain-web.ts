import { ChainLinksDataWeb } from "./chain-links-data-web";
import { EvouchersDataWeb } from "./evouchers-data-web";
import { OffersDataWeb } from "./offers-data-web";
import { StoresDataWeb } from "./stores-data-web";

export class AllDataOFChainWeb {
  ChainID !: number;
  ChainNameEN!: string;
  ChainNameAR!: string;
  HeaderTextEN !: string;
  HeaderTextAR!: string;
  AboutChainEN !: string;
  AboutChainAR !: string;
  URLImgLogo !: string;
  URLImgHeader !: string;
  DiscountValue!: number;
  RefundValue !: number;
  TermsAndConditionsEN!: string;
  TermsAndConditionsAR!: string;
  OfferData: OffersDataWeb[] = [];
  EvouchersData: EvouchersDataWeb[] = [];
  ChainLinks: ChainLinksDataWeb[] = [];
  Stores: StoresDataWeb[] = [];
}
