import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendartRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarDaysComponent } from './calendar-days/calendar-days.component';
import { SharedModule } from '../shared/shared.module';
import { DietDayComponent } from './diet-day/diet-day.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [CalendarComponent, CalendarDaysComponent, DietDayComponent],
  imports: [
    CommonModule,
    CalendartRoutingModule,
    SharedModule,
    MatCheckboxModule,
  ],
})
export class CalendarModule {}
