import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
import {
  BLCOK_TYPE,
  Contacts,
  HeadInfo,
  NewResumeInstance,
  ResumeBlcokItem,
  ResumeInfoBlock,
  SmartDespozition,
} from 'src/app/resume-templates/resume.interface';
import { ResumeService } from 'src/app/resume-templates/resume.service';

interface Sgeet {}
@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss'],
})
export class SmartComponent implements OnInit, OnDestroy {
  public resume!: NewResumeInstance;

  public isEditMode = false;
  public currentEdditedBlock: number | null | 'contacts' | 'head' = null;

  public sheets: Sheet[] = [];

  public infoBlocks!: ResumeBlcokItem;
  private currentDespozition!: SmartDespozition;

  BT = BLCOK_TYPE;

  private debounceResumeSave: Subject<NewResumeInstance> =
    new Subject<NewResumeInstance>();
  private subs = new Subscription();

  public handdleAllocateBlocksInSheets(side: ZoneType, sheetIndex: number) {
    const problemBlockKey =
      this.currentDespozition[side][this.currentDespozition[side].length - 1];

    this.sheets[sheetIndex][side].length =
      this.sheets[sheetIndex][side].length - 1;

    let nextSheet = this.sheets[sheetIndex + 1];

    if (nextSheet) {
      this.sheets[sheetIndex + 1][side].push(problemBlockKey);
    } else {
      if (!this.sheets[sheetIndex + 1]) {
        this.sheets = [
          ...this.sheets,
          side == 'main'
            ? { main: [problemBlockKey], right: [], id: Date.now() }
            : { right: [problemBlockKey], main: [], id: Date.now() },
        ];
      }
    }

    this.cdr.detectChanges();
  }

  constructor(
    private resumeSerive: ResumeService,
    private cdr: ChangeDetectorRef
  ) {}

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

  public handleMoveBlockUp(index: number, zone: ZoneType) {
    const currentDispozition =
      zone == 'main'
        ? this.currentDespozition.main
        : this.currentDespozition.right;

    [currentDispozition[index], currentDispozition[index - 1]] = [
      currentDispozition[index - 1],
      currentDispozition[index],
    ];

    this.debounceResumeSave.next(this.resume);
  }

  public handleMoveBlockDown(index: number, zone: ZoneType) {
    const currentDispozition =
      zone == 'main'
        ? this.currentDespozition.main
        : this.currentDespozition.right;

    [currentDispozition[index], currentDispozition[index + 1]] = [
      currentDispozition[index + 1],
      currentDispozition[index],
    ];

    this.debounceResumeSave.next(this.resume);
  }

  public handleDeleteBlock(index: number, zone: ZoneType) {
    const currentDispozition =
      zone == 'main'
        ? this.currentDespozition.main
        : this.currentDespozition.right;

    currentDispozition.splice(index, 1);
    this.debounceResumeSave.next(this.resume);
  }

  public setCurrentEditedBlock(
    key: number | 'head' | 'contacts',
    status: boolean
  ) {
    if (this.currentEdditedBlock == key && !status) {
      this.currentEdditedBlock = null;
      return;
    }

    if (this.currentEdditedBlock != key && !status) {
      return;
    }
    this.currentEdditedBlock = status ? key : null;
  }

  private createSheetsFromDispozition(newDespozition: SmartDespozition) {
    if (!this.sheets.length) {
      this.sheets = [
        {
          main: [...this.resume.disposition.smart.main],
          right: [...this.resume.disposition.smart.right],
          id: Date.now(),
        },
      ];
      this.setCurrentDespozition();
      return;
    }

    if (
      JSON.stringify(this.currentDespozition) == JSON.stringify(newDespozition)
    ) {
      this.setCurrentDespozition();
      return;
    }

    //left(main) zone changed
    if (this.currentDespozition.main.length != newDespozition.main.length) {
      newDespozition.main.length > this.currentDespozition.main.length
        ? this.addNewBlockToSheet(newDespozition, 'main')
        : null;
      this.setCurrentDespozition();
      return;
    }

    //right zone changed
    if (this.currentDespozition.right.length != newDespozition.right.length) {
      newDespozition.right.length > this.currentDespozition.right.length
        ? this.addNewBlockToSheet(newDespozition, 'right')
        : null;
      this.setCurrentDespozition();
      return;
    }
  }

  private initialValues() {
    this.infoBlocks = this.resume.blocks;
    this.createSheetsFromDispozition(this.resume.disposition.smart);
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

  private addNewBlockToSheet(newDespozition: SmartDespozition, side: ZoneType) {
    const newBlockKey = newDespozition[side][newDespozition[side].length - 1];
    const lastSheetWithSpace =
      this.sheets[this.findLastSheetWithSpaceIndex(side)];
    lastSheetWithSpace[side].push(newBlockKey);
  }

  private findLastSheetWithSpaceIndex(side: 'main' | 'right'): number {
    let result!: number;

    if (this.sheets.length == 1) {
      result = 0;
    } else {
      for (let i = this.sheets.length - 1; i >= 0; i--) {
        if (this.sheets[i][side].length && !result) {
          result = i;
        }
      }
    }
    return result;
  }

  private setCurrentDespozition() {
    this.currentDespozition = {
      main: [...this.resume.disposition.smart.main],
      right: [...this.resume.disposition.smart.right],
    };
  }
}

type ZoneType = 'main' | 'right';
type Sheet = SmartDespozition & { id: number };
