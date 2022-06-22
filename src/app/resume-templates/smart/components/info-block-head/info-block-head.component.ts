import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import {
  faCertificate,
  faCheckCircle,
  faCog,
  faComments,
  faCrosshairs,
  faGraduationCap,
  faInfo,
  faPencilSquare,
  faSuitcase,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { debounceTime, Subject, Subscription } from 'rxjs';
import {
  BLCOK_TYPE,
  ResumeInfoBlock,
} from 'src/app/resume-templates/resume.interface';

@Component({
  selector: 'app-info-block-head',
  templateUrl: './info-block-head.component.html',
  styleUrls: ['./info-block-head.component.scss'],
})
export class InfoBlockHeadComponent implements OnInit, OnDestroy {
  @Input() placeholder!: string;
  @Input() blockData!: ResumeInfoBlock;

  public defaultTitle!: string;

  @Output() changeTitle = new EventEmitter<ResumeInfoBlock>();

  private debounceOutput: Subject<ResumeInfoBlock> =
    new Subject<ResumeInfoBlock>();
  private subs = new Subscription();

  //TODO change to correct icons
  public iconsDefinitions: { [key in BLCOK_TYPE]: IconDefinition } = {
    [BLCOK_TYPE.education]: faGraduationCap,
    [BLCOK_TYPE.experience]: faSuitcase,
    [BLCOK_TYPE.certificates]: faCertificate,
    [BLCOK_TYPE.summary]: faPencilSquare,
    [BLCOK_TYPE.langskills]: faComments,
    [BLCOK_TYPE.techskills]: faCog,
    [BLCOK_TYPE.profskills]: faCrosshairs,
    [BLCOK_TYPE.about]: faInfo,
    [BLCOK_TYPE.competence]: faCheckCircle,
  };

  constructor() {}

  ngOnInit(): void {
    this.defaultTitle = this.blockData.data.title;

    this.subs.add(
      this.debounceOutput.pipe(debounceTime(2000)).subscribe((value) => {
        this.changeTitle.emit(value);
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public handleChangeTitle($event: any) {
    this.blockData.data.title = $event.target.innerHTML;

    this.debounceOutput.next(this.blockData);
  }
}
