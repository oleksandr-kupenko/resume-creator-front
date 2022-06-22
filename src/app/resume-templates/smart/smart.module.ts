import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconsDropdownComponent } from 'src/app/resume-templates/smart/components/icons-dropdown/icons-dropdown.component';
import { InfoBlockHeadComponent } from 'src/app/resume-templates/smart/components/info-block-head/info-block-head.component';
import { SmartContactsListComponent } from 'src/app/resume-templates/smart/components/smart-contacts-list/smart-contacts-list.component';
import { SmartTemplateHeaderComponent } from 'src/app/resume-templates/smart/components/smart-template-header/smart-template-header.component';
import { SmartComponent } from 'src/app/resume-templates/smart/smart.component';
import { SmartProgressBarComponent } from './components/smart-progress-bar/smart-progress-bar.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { EducationBodyComponent } from 'src/app/resume-templates/smart/components/info-block-bodies/education-body/education-body.component';
import { ExperienceBodyComponent } from 'src/app/resume-templates/smart/components/info-block-bodies/experience-body/experience-body.component';
import { CertificatesBodyComponent } from 'src/app/resume-templates/smart/components/info-block-bodies/certificates-body/certificates-body.component';
import { SummaryBodyComponent } from 'src/app/resume-templates/smart/components/info-block-bodies/summary-body/summary-body.component';
import { UniversalSkillsBodyComponent } from 'src/app/resume-templates/smart/components/info-block-bodies/universal-skills-body/universal-skills-body.component';
import { AboutBodyComponent } from 'src/app/resume-templates/smart/components/info-block-bodies/about-body/about-body.component';
import { CompetenceBodyComponent } from 'src/app/resume-templates/smart/components/info-block-bodies/competence-body/competence-body.component';

@NgModule({
  declarations: [
    SmartComponent,
    SmartTemplateHeaderComponent,
    SmartContactsListComponent,
    IconsDropdownComponent,
    InfoBlockHeadComponent,
    EducationBodyComponent,
    ExperienceBodyComponent,
    CertificatesBodyComponent,
    SummaryBodyComponent,
    UniversalSkillsBodyComponent,
    SmartProgressBarComponent,
    InfoBlockComponent,
    AboutBodyComponent,
    CompetenceBodyComponent,
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
