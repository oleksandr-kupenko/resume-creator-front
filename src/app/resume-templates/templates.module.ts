import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { BasicTemplateModule } from 'src/app/resume-templates/basic/basic.module';
import { SmartTemplateModule } from 'src/app/resume-templates/smart/smart.module';
import { templateRoutes } from 'src/app/resume-templates/template.routes';
import { TemplatesComponent } from 'src/app/resume-templates/templates.component';

@NgModule({
  declarations: [TemplatesComponent],
  imports: [
    CommonModule,
    RouterModule,
    SmartTemplateModule,
    LayoutsModule,
    BasicTemplateModule,
    RouterModule.forChild(templateRoutes),
  ],
  exports: [TemplatesComponent],
})
export class TemplatesModule {}
