import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';
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

  public MealType = MealType;

  public addIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'plus'],
  };

  constructor(private readonly _sidebarModal: SidemodalService) {}

  ngOnInit(): void {}

  public selectedMealPlan: MealType = MealType.BALANCED;

  public addNewMealPlan() {
    if (this.sideBar) {
      this._sidebarModal.open(this.sideBar, '800px');
    }
  }

  public close() {
    this._sidebarModal.close();
  }

  public selectMealType(mealType: MealType) {
    this.selectedMealPlan = mealType;
  }
}

export enum MealType {
  MUSCLEGROWTH,
  BALANCED,
  WEIGHTLOSS,
}
