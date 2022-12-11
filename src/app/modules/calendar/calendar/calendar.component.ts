import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {
  DietProgressDTO,
  DietProgressProductDTO,
  DietService,
  GetCurrentDietRes,
} from 'src/app/services/diet/diet.service';
import { Translate } from 'src/app/utilities/tools';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
@Translate({
  en: require('../i18n/calendar.en.json'),
})
export class CalendarComponent implements OnInit {
  public days: string[] = [];
  public progress: DietProgressDTO | undefined;
  public currentDayProducts: DietProgressProductDTO[] = [];
  public date: string | undefined;

  public progressPerc: number = 0;

  constructor(private readonly _dietService: DietService) {}

  ngOnInit(): void {
    this._dietService.getCurrentDiet().subscribe((res: GetCurrentDietRes) => {
      if (res.success) {
        this.progress = res.result;
        this.days = res.result.days.map((x) => x.date);
        this.getTotalProgress();
      }
    });
  }

  public onDayChange(index: number) {
    if (this.progress) {
      this.currentDayProducts = this.progress.days[index].products;
      this.date = this.days[index];
    }
  }

  public getTotalProgress() {
    let totalProducts = 0;
    let consumed = 0;
    if (this.progress) {
      for (let day of this.progress.days) {
        for (let product of day.products) {
          totalProducts++;

          if (product.consumed) {
            consumed++;
          }
        }
      }
    }

    this.progressPerc = (consumed / totalProducts) * 100;
  }

  private getProgressPercColor() {
    if (this.progressPerc > 30 && this.progressPerc < 60) {
      return '#DCD41A';
    } else if (this.progressPerc >= 60) {
      return '#36f1cd';
    } else {
      return '#e61444';
    }
  }

  public getBGColor() {
    return `conic-gradient(${this.getProgressPercColor()} var(--progress), #39a0ed 0deg)`;
  }

  public getDegree() {
    return `${(this.progressPerc * 360) / 100}deg`;
  }

  public onConsume(event: any) {
    this.getTotalProgress();
  }
}
