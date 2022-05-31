import { NgModule } from '@angular/core';
import { BackdropDirective } from 'src/app/shared/directives/back-drop.directive';
import { FictiveInputDirective } from 'src/app/shared/directives/placeholder.directive';

@NgModule({
  declarations: [BackdropDirective, FictiveInputDirective],
  imports: [],
  exports: [BackdropDirective, FictiveInputDirective],
})
export class DirectivesModule {}
