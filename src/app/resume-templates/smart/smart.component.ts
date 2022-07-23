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
  public currentEdditedBlockKey: number | null | 'contacts' | 'head' = null;

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

  public handleMoveBlockUp(index: number, sheetIndex: number, side: ZoneType) {
    const blockKey = this.currentDespozition[side][index];

    const changedArrList = [
      this.currentDespozition[side],
      this.resume.disposition.smart[side],
    ];
    changedArrList.forEach((zone) => {
      [zone[index], zone[index - 1]] = [zone[index - 1], zone[index]];
    });

    this.swapBlocksInSheetsUp(blockKey, sheetIndex, side);

    this.debounceResumeSave.next(this.resume);
  }

  private swapBlocksInSheetsUp(
    blockKey: number,
    sheetIndex: number,
    side: ZoneType
  ) {
    let currentSheetZone = this.sheets[sheetIndex][side];
    const sheetBlockIndex = currentSheetZone.findIndex((b) => b == blockKey);

    if (sheetBlockIndex > 0) {
      [
        currentSheetZone[sheetBlockIndex],
        currentSheetZone[sheetBlockIndex - 1],
      ] = [
        currentSheetZone[sheetBlockIndex - 1],
        currentSheetZone[sheetBlockIndex],
      ];
    }
  }

  private swapBlocksInSheetsDown(
    blockKey: number,
    sheetIndex: number,
    side: ZoneType
  ) {
    let currentSheetZone = this.sheets[sheetIndex][side];
    const sheetBlockIndex = currentSheetZone.findIndex((b) => b == blockKey);

    if (sheetBlockIndex < currentSheetZone.length - 1) {
      [
        currentSheetZone[sheetBlockIndex],
        currentSheetZone[sheetBlockIndex + 1],
      ] = [
        currentSheetZone[sheetBlockIndex + 1],
        currentSheetZone[sheetBlockIndex],
      ];
      return;
    }

    if (
      sheetBlockIndex == currentSheetZone.length - 1 &&
      this.sheets[sheetIndex + 1]
    ) {
      let nextSheetZone = this.sheets[sheetIndex + 1][side];
      const nextBlockKey = nextSheetZone[0];
      currentSheetZone[currentSheetZone.length - 1] = nextBlockKey;
      nextSheetZone[0] = blockKey;
      this.currentEdditedBlockKey = blockKey;
      return;
    }
  }

  public handleMoveBlockDown(
    index: number,
    sheetIndex: number,
    side: ZoneType
  ) {
    const blockKey = this.currentDespozition[side][index];
    const changedArrList = [
      this.currentDespozition[side],
      this.resume.disposition.smart[side],
    ];
    changedArrList.forEach((zone) => {
      [zone[index], zone[index + 1]] = [zone[index + 1], zone[index]];
    });

    this.swapBlocksInSheetsDown(blockKey, sheetIndex, side);

    this.debounceResumeSave.next(this.resume);
  }

  public handleDeleteBlock(index: number, sheetIndex: number, zone: ZoneType) {
    const keyDeletedBlock = this.currentDespozition[zone][index];

    this.sheets[sheetIndex][zone] = this.sheets[sheetIndex][zone].filter(
      (blockKey) => blockKey != keyDeletedBlock
    );
    this.currentDespozition[zone].splice(index, 1);
    this.resume.disposition.smart[zone].splice(index, 1);
    this.debounceResumeSave.next(this.resume);
    this.currentEdditedBlockKey = null;
  }

  public setCurrentEditedBlock(
    key: number | 'head' | 'contacts',
    status: boolean
  ) {
    console.log('click');
    if (this.currentEdditedBlockKey == key && !status) {
      this.currentEdditedBlockKey = null;
      return;
    }

    if (this.currentEdditedBlockKey != key && !status) {
      return;
    }
    this.currentEdditedBlockKey = status ? key : null;
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

    //left(main) zone add or delete
    if (this.currentDespozition.main.length != newDespozition.main.length) {
      console.log(
        'current',
        this.currentDespozition.main.length,
        this.currentDespozition.main
      );
      console.log('new', newDespozition.main.length, newDespozition.main);
      console.log(
        newDespozition.main.length > this.currentDespozition.main.length
      );
      newDespozition.main.length > this.currentDespozition.main.length
        ? this.addNewBlockToSheet(newDespozition, 'main')
        : this.deleteBlockFromSheet(newDespozition, 'main');
      this.setCurrentDespozition();
      return;
    }

    //right zone add or delete
    if (this.currentDespozition.right.length != newDespozition.right.length) {
      newDespozition.right.length > this.currentDespozition.right.length
        ? this.addNewBlockToSheet(newDespozition, 'right')
        : this.deleteBlockFromSheet(newDespozition, 'right');
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
    console.log('bad');
    const newBlockKey = newDespozition[side][newDespozition[side].length - 1];
    const lastSheetWithSpace =
      this.sheets[this.findLastSheetWithSpaceIndex(side)];
    lastSheetWithSpace[side].push(newBlockKey);
  }

  private deleteBlockFromSheet(
    newDespozition: SmartDespozition,
    side: ZoneType
  ) {
    console.log('ok');
    let deletedBlockKey!: number;
    this.currentDespozition[side].forEach((block, index) => {
      if (!newDespozition[side].includes(block)) {
        deletedBlockKey = block;
      }
    });
    this.sheets.forEach((sheet, index) => {
      if (sheet[side].includes(deletedBlockKey)) {
        delete sheet[side][deletedBlockKey];
      }
    });
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
