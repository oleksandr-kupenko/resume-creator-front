import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddBtnComponent } from 'src/app/shared/layout-active-elements/buttons/add-btn/add-btn.component';
import { AddPhotoBtnComponent } from 'src/app/shared/layout-active-elements/buttons/add-photo-btn/add-photo-btn.component';
import { DataRangePickerComponent } from 'src/app/shared/layout-active-elements/data-range-picker/data-range-picker.component';

@NgModule({
  declarations: [
    DataRangePickerComponent,
    AddBtnComponent,
    AddPhotoBtnComponent,
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    OverlayModule,
    MatCardModule,
    MatSlideToggleModule,
    FontAwesomeModule,
  ],
  exports: [DataRangePickerComponent, AddBtnComponent, AddPhotoBtnComponent],
})
export class LayoutActiveElementsModule {}
