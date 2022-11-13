import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { MealPlanRoutingModule } from './meal-plan-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MealPlanComponent],
  imports: [CommonModule, MealPlanRoutingModule, SharedModule],
})
export class MealPlanModule {}
