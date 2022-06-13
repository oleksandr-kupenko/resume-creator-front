/* import { Directive, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import {
  Contacts,
  HeadInfo,
  ResumeInfoBlock,
} from 'src/app/resume-templates/resume.interface';

@Directive()
export class BlockBodyBase {
  @Output() changeBlcok = new EventEmitter<ResumeInfoBlock>();
  @Output() changeHeadInfo = new EventEmitter<HeadInfo>();
  @Output() changeContacts = new EventEmitter<Contacts>();

  private debounceTime = 2000;

  private debounceBlockOutput: Subject<ResumeInfoBlock> =
    new Subject<ResumeInfoBlock>();

  private debounceHeadInfoOutput: Subject<HeadInfo> = new Subject<HeadInfo>();
  private debounceContactsOutput: Subject<Contacts> = new Subject<Contacts>();

  public sendUpdateBlock(newBlock: ResumeInfoBlock) {
    this.debounceBlockOutput.next(newBlock);
  }

  public sendUpdateHeadInfo(newHead: HeadInfo) {
    this.debounceHeadInfoOutput.next(newHead);
  }

  public sendUpdateContacts(newContacts: Contacts) {
    this.debounceContactsOutput.next(newContacts);
  }

  public subscribeForDebounceChangeBlocks() {
    this.debounceBlockOutput
      .pipe(debounceTime(this.debounceTime))
      .subscribe((value) => {
        this.changeBlcok.emit(value);
      });
  }

  public subscribeForDebounceChangeHead() {
    this.debounceHeadInfoOutput
      .pipe(debounceTime(this.debounceTime))
      .subscribe((value) => {
        this.changeHeadInfo.emit(value);
      });
  }

  public subscribeForDebounceChangeContacts() {
    this.debounceBlockOutput
      .pipe(debounceTime(this.debounceTime))
      .subscribe((value) => {
        this.changeBlcok.emit(value);
      });
  }
}
 */
