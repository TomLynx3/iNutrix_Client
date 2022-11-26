import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { MealPlanRoutingModule } from './meal-plan-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';
import { MatTabsModule } from '@angular/material/tabs';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { DietProductListComponent } from './diet-product-list/diet-product-list.component';
import { DietDayNutritionComponent } from './diet-day-nutrition/diet-day-nutrition.component';

@NgModule({
  declarations: [MealPlanComponent, DietPlanComponent, DietProductListComponent, DietDayNutritionComponent],
  imports: [
    CommonModule,
    MealPlanRoutingModule,
    SharedModule,
    ProductsModule,
    MatTabsModule,
  ],
})
export class MealPlanModule {}
