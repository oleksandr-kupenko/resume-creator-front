import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A4WrapperComponent } from './a4-wrapper/a4-wrapper.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { AddBtnComponent } from './buttons/add-btn/add-btn.component';
import { AddPhotoBtnComponent } from './buttons/add-photo-btn/add-photo-btn.component';
import { InfoBlockWrapperComponent } from './info-block-wrapper/info-block-wrapper.component';
import { DataRangePickerComponent } from './data-range-picker/data-range-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    A4WrapperComponent,
    AddBtnComponent,
    AddPhotoBtnComponent,
    InfoBlockWrapperComponent,
    DataRangePickerComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DirectivesModule,
    IconsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    OverlayModule,
    MatCardModule,
    MatSlideToggleModule,
  ],
  exports: [
    A4WrapperComponent,
    DirectivesModule,
    IconsModule,
    AddBtnComponent,
    AddPhotoBtnComponent,
    InfoBlockWrapperComponent,
    DataRangePickerComponent,
  ],
})
export class SharedModule {}
