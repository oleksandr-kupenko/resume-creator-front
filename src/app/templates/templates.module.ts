import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TemplatesComponent } from 'src/app/templates/templates.component';
import { SmartComponent } from './smart/smart.component';
import { SmartTemplateHeaderComponent } from './smart/components/smart-template-header/smart-template-header.component';
import { SmartContactsListComponent } from './smart/components/smart-contacts-list/smart-contacts-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SmartContactComponent } from 'src/app/templates/smart/components/smart-contact/smart-contact.component';

@NgModule({
  declarations: [
    TemplatesComponent,
    SmartComponent,
    SmartTemplateHeaderComponent,
    SmartContactsListComponent,
    SmartContactComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule, FontAwesomeModule],
  exports: [TemplatesComponent],
})
export class TemplatesModule {}
