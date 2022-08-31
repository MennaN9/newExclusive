import { ChainsWeb } from "./chain"

export class CategoryWeb {
  CategoryID!: number;
  CategoryNameEN!: string;
  CategoryNameAR!: string;
  Weight!: number;
  Chains: ChainsWeb[]=[];
}
