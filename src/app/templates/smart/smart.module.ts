import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropdownIconsComponent } from 'src/app/templates/smart/components/dropdown-icons/dropdown-icons.component';
import { InfoBlockBodyComponent } from 'src/app/templates/smart/components/info-block-body/info-block-body.component';
import { InfoBlockHeadComponent } from 'src/app/templates/smart/components/info-block-head/info-block-head.component';
import { SmartContactsListComponent } from 'src/app/templates/smart/components/smart-contacts-list/smart-contacts-list.component';
import { SmartTemplateHeaderComponent } from 'src/app/templates/smart/components/smart-template-header/smart-template-header.component';
import { SmartComponent } from 'src/app/templates/smart/smart.component';
import { TemplatesComponent } from 'src/app/templates/templates.component';

@NgModule({
  declarations: [
    SmartComponent,
    SmartTemplateHeaderComponent,
    SmartContactsListComponent,
    DropdownIconsComponent,
    InfoBlockHeadComponent,
    InfoBlockBodyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FontAwesomeModule,
    OverlayModule,
  ],
  exports: [SmartComponent],
})
export class SmartTemplateModule {}
