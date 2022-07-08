import { Component, HostBinding, OnInit } from '@angular/core';
import { BLCOK_TYPE } from 'src/app/resume-templates/resume.interface';

@Component({
  selector: 'app-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss'],
})
export class DropDownMenuComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}

  handleShowHide() {
    this.isOpen = !this.isOpen;
  }
}
