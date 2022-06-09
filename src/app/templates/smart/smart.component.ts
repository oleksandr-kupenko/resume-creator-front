import { Component, Input, OnInit } from '@angular/core';
import {
  BLCOK_TYPE,
  NewResumeInstance,
  ResumeBlcokItem,
  ResumeTypicalBlockItem,
} from 'src/app/templates/resume.interface';
import { ResumeService } from 'src/app/templates/resume.service';

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

  public handleSetBlockChanges(newBlock: ResumeTypicalBlockItem, key: string) {
    const newResume = {
      ...this.resume,
      blocks: { ...this.resume.blocks, newBlock },
    };
    this.resumeSerive.setResume(newResume);
  }
}
