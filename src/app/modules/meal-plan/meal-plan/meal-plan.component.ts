import { Component, OnInit } from '@angular/core';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss'],
})
export class MealPlanComponent implements OnInit {
  public addIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'plus'],
  };

  constructor() {}

  ngOnInit(): void {}
}
