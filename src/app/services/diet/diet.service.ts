import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest, Observable } from 'rxjs';
import { BaseResponse } from 'src/app/utilities/types';
import {
  ColorfulIcon,
  MealService,
  MealType,
  ProductBase,
} from '../meal-service/meal.service';

@Injectable({
  providedIn: 'root',
})
export class DietService {
  private readonly controllerURL: string = '/api/diets';

  constructor(
    private readonly _http: HttpClient,
    private readonly _translateService: TranslateService,
    private readonly _mealService: MealService
  ) {}

  public getCurrentDiet(): Observable<GetCurrentDietRes> {
    return this._http.get<GetCurrentDietRes>(`${this.controllerURL}/active`);
  }

  public parseToDietProductItems(products: DietProgressProductDTO[]) {
    const res: DietProductItem[] = [];

    for (let product of products) {
      combineLatest(
        this._translateService.get(product.productGroup.groupName),
        this._translateService.get(product.name)
      ).subscribe(([groupName, name]: string[]) => {
        res.push(<DietProductItem>{
          id: product.productId,
          consumed: product.consumed,
          isCustom: product.isCustom,
          mealType: product.mealType,
          name: name,
          productGroupName: groupName,
          productGroupIcon: this._mealService.getPorductGroupIcon(
            product.productGroup.id
          ),
          amount: this._mealService.castToGrams(product.amount),
        });
      });
    }

    return res;
  }
}

export interface DietProductItem {
  id: string;
  consumed: boolean;
  isCustom: boolean;
  mealType: MealType;
  name: string;
  productGroupName: string;
  productGroupIcon: ColorfulIcon;
  amount: number;
}

export interface GetCurrentDietRes extends BaseResponse {
  result: DietProgressDTO;
}

export interface DietProgressDTO {
  id: string;
  days: DietProgressDay[];
}

export interface DietProgressDay {
  date: string;
  products: DietProgressProductDTO[];
}

export interface DietProgressProductDTO extends ProductBase {
  consumed: boolean;
  mealType: MealType;
}
