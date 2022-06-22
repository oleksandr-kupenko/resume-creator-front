import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { SmartTemplateModule } from 'src/app/resume-templates/smart/smart.module';
import { TemplatesComponent } from 'src/app/resume-templates/templates.component';

@NgModule({
  declarations: [TemplatesComponent],
  imports: [CommonModule, SmartTemplateModule, LayoutsModule],
  exports: [TemplatesComponent],
})
export class TemplatesModule {}
