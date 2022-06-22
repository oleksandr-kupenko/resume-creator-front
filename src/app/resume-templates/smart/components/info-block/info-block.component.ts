import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  BLCOK_TYPE,
  ResumeInfoBlock,
} from 'src/app/resume-templates/resume.interface';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss'],
})
export class InfoBlockComponent implements OnInit {
  @Input() infoBlock!: ResumeInfoBlock;
  @Input() isEditMode = false;
  @Output() blockChange = new EventEmitter<ResumeInfoBlock>();

  BLCOK_TYPE = BLCOK_TYPE;

  constructor() {}

  ngOnInit(): void {}
}
