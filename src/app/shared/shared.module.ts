import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A4WrapperComponent } from './a4-wrapper/a4-wrapper.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { InfoBlockWrapperComponent } from './info-block-wrapper/info-block-wrapper.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { LayoutActiveElementsModule } from 'src/app/shared/layout-active-elements/layout-active-elements.module';

@NgModule({
  declarations: [A4WrapperComponent, InfoBlockWrapperComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DirectivesModule,
    IconsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    PipesModule,
    LayoutActiveElementsModule,
  ],
  exports: [
    A4WrapperComponent,
    DirectivesModule,
    IconsModule,
    InfoBlockWrapperComponent,
    PipesModule,
    LayoutActiveElementsModule,
  ],
})
export class SharedModule {}
