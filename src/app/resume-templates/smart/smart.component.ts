import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
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
export class SmartComponent implements OnInit, OnDestroy {
  @Input() resume!: NewResumeInstance;

  public infoBlocks!: ResumeBlcokItem;
  public mainDispozition!: Array<keyof ResumeBlcokItem>;
  public rightDispozition!: Array<keyof ResumeBlcokItem>;

  BT = BLCOK_TYPE;

  private debounceResumeSave: Subject<NewResumeInstance> =
    new Subject<NewResumeInstance>();
  private subs = new Subscription();

  constructor(private resumeSerive: ResumeService) {}

  ngOnInit(): void {
    this.getResume();
    this.subscribeForDebounceSaveResume();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public handleSetBlockChanges(newBlock: ResumeInfoBlock, key: number) {
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

  public moveBlockUp(index: number, zone: zoneType) {
    const currentDispozition =
      zone == 'mainZone' ? this.mainDispozition : this.rightDispozition;

    [currentDispozition[index], currentDispozition[index - 1]] = [
      currentDispozition[index - 1],
      currentDispozition[index],
    ];

    this.debounceResumeSave.next(this.resume);
  }

  public moveBlockDown(index: number, zone: zoneType) {
    const currentDispozition =
      zone == 'mainZone' ? this.mainDispozition : this.rightDispozition;

    [currentDispozition[index], currentDispozition[index + 1]] = [
      currentDispozition[index + 1],
      currentDispozition[index],
    ];

    this.debounceResumeSave.next(this.resume);
  }

  public deleteBlock(index: number, zone: zoneType) {
    const currentDispozition =
      zone == 'mainZone' ? this.mainDispozition : this.rightDispozition;

    currentDispozition.splice(index, 1);
    this.debounceResumeSave.next(this.resume);
  }

  private initialValues() {
    this.infoBlocks = this.resume.blocks;
    this.mainDispozition = this.resume.disposition.smart.main;
    this.rightDispozition = this.resume.disposition.smart.right;
  }

  private subscribeForDebounceSaveResume() {
    this.subs.add(
      this.debounceResumeSave.pipe(debounceTime(2000)).subscribe((value) => {
        this.resumeSerive.setResume(this.resume);
      })
    );
  }

  private getResume() {
    this.resumeSerive.getResume().subscribe({
      next: (resume) => {
        this.resume = resume;
        this.initialValues();
      },
    });
  }
}

type zoneType = 'mainZone' | 'rightZone';
