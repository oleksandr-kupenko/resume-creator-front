import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PublicHeaderComponent } from 'src/app/layouts/public-header/public-header.component';
import { PublicLeftMenuComponent } from 'src/app/layouts/public-left-menu/public-left-menu.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
  declarations: [PublicLeftMenuComponent, PublicHeaderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    IconsModule,
    MatTooltipModule,
    DirectivesModule,
  ],
  exports: [PublicLeftMenuComponent, PublicHeaderComponent],
})
export class LayoutsModule {}
