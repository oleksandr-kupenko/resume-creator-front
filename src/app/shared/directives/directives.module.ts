import { NgModule } from '@angular/core';
import { BackdropDirective } from 'src/app/shared/directives/back-drop.directive';
import { CheckNoHeighDirective } from 'src/app/shared/directives/checkNoHight.directive';
import { FictiveInputDirective } from 'src/app/shared/directives/placeholder.directive';

@NgModule({
  declarations: [
    BackdropDirective,
    FictiveInputDirective,
    CheckNoHeighDirective,
  ],
  imports: [],
  exports: [BackdropDirective, FictiveInputDirective, CheckNoHeighDirective],
})
export class DirectivesModule {}
