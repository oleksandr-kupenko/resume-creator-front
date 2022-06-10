import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { CertificatesBodyComponent } from 'src/app/templates/smart/components/block-bodies/certificates-body/certificates-body.component';
import { EducationBodyComponent } from 'src/app/templates/smart/components/block-bodies/education-body/education-body.component';
import { ExperienceBodyComponent } from 'src/app/templates/smart/components/block-bodies/experience-body/experience-body.component';
import { SummaryBodyComponent } from 'src/app/templates/smart/components/block-bodies/summary-body/summary-body.component';
import { UniversalSkillsBodyComponent } from 'src/app/templates/smart/components/block-bodies/universal-skills-body/universal-skills-body.component';
import { IconsDropdownComponent } from 'src/app/templates/smart/components/icons-dropdown/icons-dropdown.component';
import { InfoBlockBodyComponent } from 'src/app/templates/smart/components/info-block-body/info-block-body.component';
import { InfoBlockHeadComponent } from 'src/app/templates/smart/components/info-block-head/info-block-head.component';
import { SmartContactsListComponent } from 'src/app/templates/smart/components/smart-contacts-list/smart-contacts-list.component';
import { SmartTemplateHeaderComponent } from 'src/app/templates/smart/components/smart-template-header/smart-template-header.component';
import { SmartComponent } from 'src/app/templates/smart/smart.component';
import { SmartProgressBarComponent } from './components/smart-progress-bar/smart-progress-bar.component';

@NgModule({
  declarations: [
    SmartComponent,
    SmartTemplateHeaderComponent,
    SmartContactsListComponent,
    IconsDropdownComponent,
    InfoBlockHeadComponent,
    InfoBlockBodyComponent,
    EducationBodyComponent,
    ExperienceBodyComponent,
    CertificatesBodyComponent,
    SummaryBodyComponent,
    UniversalSkillsBodyComponent,
    SmartProgressBarComponent,
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
