import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  About,
  BLCOK_TYPE,
  Certificates,
  Competence,
  Education,
  Experience,
  NewResumeInstance,
  Skills,
  Summary,
} from 'src/app/resume-templates/resume.interface';
import { ResumeService } from 'src/app/resume-templates/resume.service';

@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss'],
})
export class DropDownMenuComponent implements OnInit {
  @Input() resume!: NewResumeInstance;

  public isOpen = false;

  public sectionsList = [
    { title: 'Summary', type: BLCOK_TYPE.summary },
    { title: 'Work experiance', type: BLCOK_TYPE.experience },
    { title: 'Education', type: BLCOK_TYPE.education },
    { title: 'Certificates', type: BLCOK_TYPE.certificates },
    { title: 'Professional Skills', type: BLCOK_TYPE.profskills },
    { title: 'Technical skills', type: BLCOK_TYPE.techskills },
    { title: 'Language proficiency', type: BLCOK_TYPE.langskills },
    { title: 'Technical skills', type: BLCOK_TYPE.techskills },
    { title: 'Spheres of competence', type: BLCOK_TYPE.competence },
    { title: 'About', type: BLCOK_TYPE.about },
  ];

  private skillSectionDefaultData = {
    title: '',
    items: [
      {
        name: '',
        rate: 5,
      },
      {
        name: '',
        rate: 4,
      },
      {
        name: '',
        rate: 3,
      },
    ],
  };

  private defaultsBlocks: DedaultBlocks = {
    [BLCOK_TYPE.about]: {
      type: BLCOK_TYPE.about,
      data: {
        title: '',
        about: '',
      },
    },
    [BLCOK_TYPE.certificates]: {
      type: BLCOK_TYPE.certificates,
      data: {
        title: '',
        items: [
          {
            description: '',
            date: null,
          },
        ],
      },
    },
    [BLCOK_TYPE.competence]: {
      type: BLCOK_TYPE.competence,
      data: {
        title: '',
        items: [{ name: '' }, { name: '' }, { name: '' }, { name: '' }],
      },
    },
    [BLCOK_TYPE.education]: {
      type: BLCOK_TYPE.education,
      data: {
        title: '',
        items: [
          {
            institution: '',
            description: '',
            period: {
              end: null,
              start: null,
            },
          },
        ],
      },
    },
    [BLCOK_TYPE.experience]: {
      type: BLCOK_TYPE.experience,
      data: {
        title: '',
        items: [
          {
            company: '',
            position: '',
            description: '',
            period: {
              start: null,
              end: null,
            },
          },
        ],
      },
    },
    [BLCOK_TYPE.summary]: {
      type: BLCOK_TYPE.summary,
      data: {
        title: '',
        summary: '',
      },
    },
    [BLCOK_TYPE.langskills]: {
      type: BLCOK_TYPE.langskills,
      data: this.skillSectionDefaultData,
    },
    [BLCOK_TYPE.profskills]: {
      type: BLCOK_TYPE.profskills,
      data: this.skillSectionDefaultData,
    },
    [BLCOK_TYPE.techskills]: {
      type: BLCOK_TYPE.techskills,
      data: this.skillSectionDefaultData,
    },
  };

  private mainSmartDispozitionTypes = [
    BLCOK_TYPE.education,
    BLCOK_TYPE.experience,
    BLCOK_TYPE.certificates,
  ];
  private rightSmartDispozitionTypes = [
    BLCOK_TYPE.profskills,
    BLCOK_TYPE.techskills,
    BLCOK_TYPE.langskills,
    BLCOK_TYPE.about,
    BLCOK_TYPE.competence,
  ];

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {}

  public handleShowHide() {
    this.isOpen = !this.isOpen;
  }

  public handleAddNewSection(sectionType: BLCOK_TYPE) {
    const newKey = this.resume.blocks.next;
    this.resume.blocks[newKey] = this.defaultsBlocks[sectionType];
    this.resume.blocks.next++;
    this.addKeyToSmartDispozition(newKey, sectionType);
    this.resumeService.setResume(this.resume);
  }

  private addKeyToSmartDispozition(newKey: number, sectionType: BLCOK_TYPE) {
    if (this.mainSmartDispozitionTypes.includes(sectionType)) {
      this.resume.disposition.smart.main.push(newKey);
      return;
    }

    if (this.rightSmartDispozitionTypes.includes(sectionType)) {
      this.resume.disposition.smart.right.push(newKey);
    }
  }
}

type DedaultBlocks = {
  [BLCOK_TYPE.about]: About;
  [BLCOK_TYPE.certificates]: Certificates;
  [BLCOK_TYPE.competence]: Competence;
  [BLCOK_TYPE.education]: Education;
  [BLCOK_TYPE.experience]: Experience;
  [BLCOK_TYPE.langskills]: Skills;
  [BLCOK_TYPE.profskills]: Skills;
  [BLCOK_TYPE.summary]: Summary;
  [BLCOK_TYPE.techskills]: Skills;
};
