import { HttpStatusCode } from "../enums/http-status-code";


export class ResponseModel<T> {
  HttpStatusCode!: HttpStatusCode;
  Message!: string;
  Data!: T;
  DataList: T[] = [];
  ItemCount!: number;

}
