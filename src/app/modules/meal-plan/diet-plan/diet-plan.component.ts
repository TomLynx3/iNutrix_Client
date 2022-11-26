import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DietDay } from 'src/app/services/meal-service/meal.service';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { CustomIcon, IconFamily } from '@ibabylondev/custom-icon';
@Component({
  selector: 'diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.scss'],
})
export class DietPlanComponent implements OnInit, OnChanges {
  @Input()
  public diet: DietDay[] = [];

  public currentIndex: number = 0;
  public currentDietDay: DietDay | undefined;
  public arrowLeft: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'arrow-left'],
  };

  public arrowRight: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'arrow-right'],
  };
  public calendar: CustomIcon = {
    iconFamily: IconFamily.FONTAWESOME,
    value: ['fas', 'calendar-days'],
  };

  constructor(private readonly _translateService: TranslateService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.currentIndex = 0;
    this._initCurrentDietDay();
  }

  ngOnInit(): void {
    //Set locale

    moment.locale(this._translateService.currentLang);

    this._initCurrentDietDay();
  }

  private _initCurrentDietDay() {
    this.currentDietDay = this.diet[this.currentIndex];
  }

  public nextDay() {
    this.currentIndex += 1;
    this._initCurrentDietDay();
  }
  public prevDay() {
    this.currentIndex -= 1;
    this._initCurrentDietDay();
  }
}
