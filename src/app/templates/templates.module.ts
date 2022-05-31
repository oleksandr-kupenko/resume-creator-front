import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesComponent } from 'src/app/templates/templates.component';
import { SmartTemplateModule } from 'src/app/templates/smart/smart.module';

@NgModule({
  declarations: [TemplatesComponent],
  imports: [CommonModule, SmartTemplateModule],
  exports: [TemplatesComponent],
})
export class TemplatesModule {}
