import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  ThemePalette,
} from '@angular/material/core';
import { Moment } from 'moment';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-data-range-picker',
  templateUrl: './data-range-picker.component.html',
  styleUrls: ['./data-range-picker.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DataRangePickerComponent implements OnInit {
  public isDatePickerFromOpen = false;
  public isDatePickerToOpen = false;

  public isToDatePrecent = false;

  public checkBoxColor: ThemePalette = 'primary';

  public todayDate = new Date();
  public oldestDate = new Date('01.01.1935');
  public futureDateForDisable = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  );

  public fromDate = new Date(`01.01.${new Date().getFullYear() - 5}`);
  public toDate = new Date();

  constructor() {}

  ngOnInit(): void {}

  public handleSetDate(
    normalizedYear: Moment,
    processedValue: 'from' | 'to',
    period: 'month' | 'year'
  ) {
    console.log(normalizedYear.toDate());
    if (processedValue == 'from') {
      if (period == 'year') {
        this.fromDate = new Date(
          this.fromDate.setFullYear(normalizedYear.toDate().getFullYear())
        );
      } else if (period == 'month') {
        this.fromDate = new Date(
          this.fromDate.setMonth(normalizedYear.toDate().getMonth())
        );
        this.isDatePickerFromOpen = false;
      }
      return;
    }

    if (processedValue == 'to') {
      if (period == 'year') {
        this.toDate = new Date(
          this.toDate.setFullYear(normalizedYear.toDate().getFullYear())
        );
      } else if (period == 'month') {
        this.toDate = new Date(
          this.toDate.setMonth(normalizedYear.toDate().getMonth())
        );
        this.isDatePickerToOpen = false;
      }
    }
  }
}
