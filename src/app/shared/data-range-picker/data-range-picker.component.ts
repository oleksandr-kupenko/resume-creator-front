import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { format } from 'date-fns';
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
import { Period } from 'src/app/resume-templates/resume.interface';

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
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DataRangePickerComponent implements OnInit {
  @Input() propsFromDate!: string | null;
  @Input() propsToDate!: string | null;

  @Input() isOnlyYear = false;
  @Input() isOnlyEndDate = false;

  @Output() periodChange = new EventEmitter<Period>();
  @Output() dateChange = new EventEmitter<string>(); //for "isOnlyEndDate mode"

  public fromDate!: Date;
  public toDate!: Date;

  public defaultFromDate = new Date(`01.01.${new Date().getFullYear() - 5}`);

  public isDatePickerFromOpen = false;
  public isDatePickerToOpen = false;

  public isToDatePrecent = false;

  public checkBoxColor: ThemePalette = 'primary';

  public todayDate = new Date();
  public oldestDate = new Date('01.01.1935');

  constructor() {}

  ngOnInit(): void {
    this.setFirstDate();
  }

  private setFirstDate() {
    this.fromDate = this.propsFromDate
      ? new Date(this.propsFromDate)
      : this.defaultFromDate;

    this.toDate =
      this.propsToDate && this.propsToDate !== '@now'
        ? new Date(this.propsToDate)
        : new Date();

    this.isToDatePrecent = this.propsToDate === '@now';
  }

  public handleSetDate(
    normalizedYear: Moment,
    processedValue: 'from' | 'to',
    period: 'month' | 'year'
  ) {
    if (processedValue == 'from') {
      if (period == 'year') {
        this.fromDate = new Date(
          this.fromDate.setFullYear(normalizedYear.toDate().getFullYear())
        );
        this.isOnlyYear &&
          (this.closeDatePicker(), this.sendOutputNewDateValue());
      } else if (period == 'month') {
        this.fromDate = new Date(
          this.fromDate.setMonth(normalizedYear.toDate().getMonth())
        );
        this.sendOutputNewDateValue();
        this.closeDatePicker();
      }
      return;
    }

    if (processedValue == 'to') {
      if (period == 'year') {
        this.toDate = new Date(
          this.toDate.setFullYear(normalizedYear.toDate().getFullYear())
        );
        this.isOnlyYear &&
          (this.closeDatePicker(), this.sendOutputNewDateValue());
      } else if (period == 'month') {
        this.toDate = new Date(
          this.toDate.setMonth(normalizedYear.toDate().getMonth())
        );
        this.sendOutputNewDateValue();
        this.closeDatePicker();
      }
    }
  }

  public handleSetPercentDate(checked: boolean) {
    this.toDate = new Date();
    this.isToDatePrecent = checked;
    this.sendOutputNewDateValue();
  }

  private closeDatePicker() {
    this.isDatePickerToOpen = false;
    this.isDatePickerFromOpen = false;
  }

  private sendOutputNewDateValue() {
    if (this.isOnlyEndDate) {
      this.sendOutputEndDate();
    } else {
      this.sendOutputPeriod();
    }
  }

  private sendOutputPeriod() {
    const endDate = this.isToDatePrecent
      ? '@now'
      : format(this.toDate, 'MM/dd/yyyy');

    this.periodChange.emit({
      start: format(this.fromDate, 'MM/dd/yyyy'),
      end: endDate,
    });
  }

  private sendOutputEndDate() {
    this.dateChange.emit(format(this.toDate, 'MM/dd/yyyy'));
  }
}
