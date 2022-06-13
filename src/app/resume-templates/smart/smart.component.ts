import { Component, Input, OnInit } from '@angular/core';
import {
  BLCOK_TYPE,
  Contacts,
  HeadInfo,
  NewResumeInstance,
  ResumeBlcokItem,
  ResumeInfoBlock,
} from 'src/app/resume-templates/resume.interface';
import { ResumeService } from 'src/app/resume-templates/resume.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss'],
})
export class SmartComponent implements OnInit {
  @Input() resume!: NewResumeInstance;
  objectKeys = Object.keys;

  infoBlocks!: ResumeBlcokItem;

  BT = BLCOK_TYPE;

  constructor(private resumeSerive: ResumeService) {}

  ngOnInit(): void {
    this.infoBlocks = this.resume.blocks;
  }

  public handleSetBlockChanges(newBlock: ResumeInfoBlock, key: string) {
    const newResume: NewResumeInstance = {
      ...this.resume,
      blocks: { ...this.resume.blocks, [key]: newBlock },
    };
    this.resumeSerive.setResume(newResume);
  }

  public handleChangeHeadInfo(newHeadInfo: HeadInfo) {
    const newResume: NewResumeInstance = {
      ...this.resume,
      head: newHeadInfo,
    };
    this.resumeSerive.setResume(newResume);
  }

  public handleChangeContacts(newContacts: Contacts) {
    const newResume: NewResumeInstance = {
      ...this.resume,
      contacts: newContacts,
    };
    this.resumeSerive.setResume(newResume);
  }
}
