import { Component, Input, OnInit } from '@angular/core';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';
import { DietDayMetadata } from 'src/app/services/meal-service/meal.service';

@Component({
  selector: 'diet-day-nutrition',
  templateUrl: './diet-day-nutrition.component.html',
  styleUrls: ['./diet-day-nutrition.component.scss'],
})
export class DietDayNutritionComponent implements OnInit {
  @Input()
  public nutritions: DietDayMetadata | undefined;

  public proteinIcon: CustomIcon = {
    iconFamily: IconFamily.PNG,
    value: 'assets/images/proteins.png',
  };

  public carbsIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'wheat-awn'],
  };

  public fatIcon: CustomIcon = {
    iconFamily: IconFamily.PNG,
    value: 'assets/images/fat.png',
  };

  public vitaminAIcon: CustomIcon = {
    iconFamily: IconFamily.PNG,
    value: 'assets/images/vitamin-a.png',
  };

  public vitaminB1Icon: CustomIcon = {
    iconFamily: IconFamily.PNG,
    value: 'assets/images/vitamin-b1.png',
  };
  public vitaminB2Icon: CustomIcon = {
    iconFamily: IconFamily.PNG,
    value: 'assets/images/vitamin-b2.png',
  };

  public vitaminPPIcon: CustomIcon = {
    iconFamily: IconFamily.PNG,
    value: 'assets/images/vitamins.png',
  };

  public vitaminCIcon: CustomIcon = {
    iconFamily: IconFamily.PNG,
    value: 'assets/images/vitamin-c.png',
  };

  public calciumIcon: CustomIcon = {
    iconFamily: IconFamily.PNG,
    value: 'assets/images/calcium.png',
  };

  public pIcon: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'p'],
  };
  public ferrumIcon: CustomIcon = {
    iconFamily: IconFamily.PNG,
    value: 'assets/images/ferrum.png',
  };
  constructor() {}

  ngOnInit(): void {}
}
