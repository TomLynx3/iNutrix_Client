import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  DailyProduct,
  MealService,
  ProductListItem,
} from 'src/app/services/meal-service/meal.service';

@Component({
  selector: 'diet-product-list',
  templateUrl: './diet-product-list.component.html',
  styleUrls: ['./diet-product-list.component.scss'],
})
export class DietProductListComponent implements OnInit, OnChanges {
  @Input()
  public productList: DailyProduct[] | undefined;

  public productListItems: ProductListItem[] = [];

  constructor(private readonly _mealService: MealService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.productList) {
      this.productListItems = this._mealService.castDailyProductToListItem(
        this.productList
      );
    }
  }

  ngOnInit(): void {}
}
