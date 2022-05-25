import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A4WrapperComponent } from './a4-wrapper/a4-wrapper.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { IconsModule } from 'src/app/shared/icons/icons.module';

@NgModule({
  declarations: [A4WrapperComponent],
  imports: [CommonModule, FontAwesomeModule, DirectivesModule, IconsModule],
  exports: [A4WrapperComponent, DirectivesModule, IconsModule],
})
export class SharedModule {}
