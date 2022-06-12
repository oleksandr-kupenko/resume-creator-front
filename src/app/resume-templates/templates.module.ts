import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmartTemplateModule } from 'src/app/resume-templates/smart/smart.module';
import { TemplatesComponent } from 'src/app/resume-templates/templates.component';

@NgModule({
  declarations: [TemplatesComponent],
  imports: [CommonModule, SmartTemplateModule],
  exports: [TemplatesComponent],
})
export class TemplatesModule {}
