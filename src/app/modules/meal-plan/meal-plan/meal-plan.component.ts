import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';
import {
  BalancedDietDetails,
  Diet,
  DietDay,
  DietGoal,
  GetDietRes,
  MealDTO,
  MealService,
  MealType,
} from 'src/app/services/meal-service/meal.service';
import { Translate } from 'src/app/utilities/tools';
import { SidemodalService } from '../../sidemodal/services/sidemodal.service';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss'],
})
@Translate({ en: require('../i18n/meal-plan.en.json') })
export class MealPlanComponent implements OnInit {
  @ViewChild('sidebar') public sideBar: TemplateRef<any> | undefined;
  @ViewChild('tabs') public tabs: MatTabGroup | undefined;

  public DietGoal = DietGoal;

  public addIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'plus'],
  };

  constructor(
    private readonly _sidebarModal: SidemodalService,
    private readonly _mealService: MealService
  ) {}

  ngOnInit(): void {}

  public dietGoal: DietGoal = DietGoal.BALANCEDIET;
  public diet: Diet | undefined;

  public addNewMealPlan() {
    if (this.sideBar) {
      this._sidebarModal.open(this.sideBar, '800px');
    }
  }

  public close() {
    this._sidebarModal.close();
  }

  public selectDietGoal(dietGoal: DietGoal) {
    this.dietGoal = dietGoal;
  }

  public createDiet() {
    this._mealService
      .createDiet(this.dietGoal, 10)
      .subscribe((res: GetDietRes) => {
        if (res.success && this.tabs) {
          this.diet = res.result;
          //console.log(JSON.stringify(this.diet));

          setTimeout(() => {
            if (this.tabs) {
              this.tabs.selectedIndex = 0;
            }
          }, 200);
          this._sidebarModal.close();
        }
      });
  }

  public saveDiet() {
    this._mealService.saveDiet(this.diet!).subscribe((res) => {
      console.log(res);
    });
  }
}
