import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { BaseResponse } from 'src/app/utilities/types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _controllerURL = '/api/products';

  constructor(
    private readonly _http: HttpClient,
    private readonly _translateService: TranslateService
  ) {}

  public getAllProducts(): Observable<GetAllProductsRes> {
    return this._http.get<GetAllProductsRes>(this._controllerURL);
  }

  public getProductGroups(): ProductGroupDTO[] {
    return [
      {
        groupName: 'Vegetables',
        id: '1',
      },
      {
        groupName: 'Fruit',
        id: '2',
      },
    ];
  }

  public parseProducts(products: ProductDTO[]) {
    for (let item of products) {
      this._translateService.get(item.name).subscribe((trans: string) => {
        item.name = trans;
      });

      this._translateService
        .get(item.productGroup.groupName)
        .subscribe((trans: string) => {
          item.productGroup.groupName = trans;
        });
    }
  }

  public banProducts(products: BannedProduct[]): Observable<BaseResponse> {
    return this._http.post<BaseResponse>(
      `${this._controllerURL}/ban-products`,
      products
    );
  }

  public getBannedProducts(): Observable<GetBannedProductsRes> {
    return this._http.get<GetBannedProductsRes>(
      `${this._controllerURL}/ban-products`
    );
  }

  public removeFromBanList(ids: string[]): Observable<BaseResponse> {
    return this._http.post<BaseResponse>(
      `${this._controllerURL}/ban-products-remove`,
      ids
    );
  }
}

export interface BannedProduct {
  id: string;
  name: string;
  productGroup: ProductGroupDTO;
  isCustom: boolean;
  selected: boolean;
}

export interface GetAllProductsRes extends BaseResponse {
  result: ProductDTO[];
}

export interface GetBannedProductsRes extends BaseResponse {
  result: BannedProduct[];
}

export interface ProductGroupDTO {
  groupName: string;
  id: string;
}

export interface ProductDTO {
  id: string;
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
  isCustom: boolean;
}
