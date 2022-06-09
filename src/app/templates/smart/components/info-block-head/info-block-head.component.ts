import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCertificate,
  faCog,
  faComments,
  faCrosshairs,
  faGraduationCap,
  faInfo,
  faPencilSquare,
  faSuitcase,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { debounceTime, Subject } from 'rxjs';
import {
  BLCOK_TYPE,
  ResumeTypicalBlockItem,
} from 'src/app/templates/resume.interface';

@Component({
  selector: 'app-info-block-head',
  templateUrl: './info-block-head.component.html',
  styleUrls: ['./info-block-head.component.scss'],
})
export class InfoBlockHeadComponent implements OnInit {
  @Input() placeholder!: string;
  @Input() blockData!: ResumeTypicalBlockItem;

  @Output() changeTitle = new EventEmitter<ResumeTypicalBlockItem>();

  debounceOutput: Subject<ResumeTypicalBlockItem> =
    new Subject<ResumeTypicalBlockItem>();

  //TODO change to correct icons
  public iconsDefinitions: { [key in BLCOK_TYPE]: IconDefinition } = {
    [BLCOK_TYPE.education]: faGraduationCap,
    [BLCOK_TYPE.experience]: faSuitcase,
    [BLCOK_TYPE.certificates]: faCertificate,
    [BLCOK_TYPE.summary]: faPencilSquare,
    [BLCOK_TYPE.langskills]: faCog,
    [BLCOK_TYPE.techskills]: faCrosshairs,
    [BLCOK_TYPE.profskills]: faCrosshairs,
    [BLCOK_TYPE.headinfo]: faInfo,
    [BLCOK_TYPE.about]: faInfo,
    [BLCOK_TYPE.competence]: faInfo,
  };

  constructor() {}

  ngOnInit(): void {
    this.debounceOutput.pipe(debounceTime(2000)).subscribe((value) => {
      this.changeTitle.emit(value);
    });
  }

  public handleChangeTitle($event: any) {
    this.blockData.data.title = $event.target.innerText;

    this.debounceOutput.next(this.blockData);
  }
}
