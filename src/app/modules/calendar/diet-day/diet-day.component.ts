import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';
import {
  DietProductItem,
  DietProgressProductDTO,
  DietService,
} from 'src/app/services/diet/diet.service';
import * as moment from 'moment';
import {
  MealService,
  MealType,
} from 'src/app/services/meal-service/meal.service';

@Component({
  selector: 'diet-day',
  templateUrl: './diet-day.component.html',
  styleUrls: ['./diet-day.component.scss'],
})
export class DietDayComponent implements OnInit, OnChanges {
  @Input()
  public products: DietProgressProductDTO[] = [];

  @Input()
  public date: string | undefined;

  public dietProductItems: DietProductItem[] = [];

  public arrowLeft: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'arrow-left'],
  };

  public arrowRight: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'arrow-right'],
  };

  public currentMealIndex: number = 0;

  public allowUpdate: boolean = false;

  private _mealTypes: MealType[] = [
    MealType.BREAKFAST,
    MealType.LUNCH,
    MealType.DINNER,
  ];

  constructor(
    private readonly _dietService: DietService,
    private readonly _mealService: MealService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.sortProducts();
    this._checkIfUpdateAllowed();
  }

  ngOnInit(): void {
    this.currentMealIndex = this._getCurrentMealTypeIndex();

    this.sortProducts();
  }

  public sortProducts() {
    const products = this.products.filter(
      (x) => x.mealType === this._mealTypes[this.currentMealIndex]
    );

    this.dietProductItems = this._dietService.parseToDietProductItems(products);
  }

  // private _setCurrentMealType() {
  //   const time = parseInt(moment().format('H'));

  //   if (time >= 5 && time < 11) {
  //     this.currentMealIndex = 0;
  //   } else if (time >= 11 && time < 15) {
  //     this.currentMealIndex = 1;
  //   } else {
  //     this.currentMealIndex = 2;
  //   }
  // }

  private _getCurrentMealTypeIndex() {
    const time = parseInt(moment().format('H'));
    if (time >= 5 && time < 11) {
      return 0;
    } else if (time >= 11 && time < 15) {
      return 1;
    } else {
      return 2;
    }
  }

  private _checkIfUpdateAllowed() {
    if (this.date) {
      const today = moment();
      const date = moment(this.date);

      if (date.isAfter(today, 'day')) {
        this.allowUpdate = false;
        return;
      } else {
        this.allowUpdate = true;
      }
    }
  }

  public get mealType() {
    return this._mealService.getMealTypeTranslationItem(
      this._mealTypes[this.currentMealIndex]
    );
  }

  public nextMeal() {
    this.currentMealIndex++;
    this.sortProducts();
  }
  public prevMeal() {
    this.currentMealIndex--;
    this.sortProducts();
  }
}
