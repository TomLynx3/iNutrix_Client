import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from 'src/app/utilities/types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _controllerURL = '/api/products';

  constructor(private readonly _http: HttpClient) {}

  public getAllProducts(): Observable<GetAllProductsRes> {
    return this._http.get<GetAllProductsRes>(this._controllerURL);
  }

  public getProductGroups(): ProductGroupDTO[] {
    return [
      {
        groupName: "Vegetables", 
        id: '1',
      }
    ]
  }
}

export interface GetAllProductsRes extends BaseResponse {
  result: ProductDTO[];
}


export interface ProductGroupDTO {
  groupName: string;
  id: string;
}

export interface ProductDTO {
  productGroup: ProductGroupDTO;
  name: string;
  protein: number;
  fat: number;
  carbohydrates: number;
  kcal: number;
  kj: number;
  a: number;
  b1: number;
  b2: number;
  pp: number;
  c: number;
  ca: number;
  p: number;
  fe: number;
  selected: boolean;
}
