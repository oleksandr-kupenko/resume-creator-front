import { Directive, EventEmitter, OnInit, Output } from '@angular/core';
import {
  Contacts,
  HeadInfo,
  ResumeInfoBlock,
} from 'src/app/resume-templates/resume.interface';

@Directive()
export class DebounceSaveDirective {
  @Output() onChangeBlcok = new EventEmitter<ResumeInfoBlock>();
  @Output() onChangeHeadInfo = new EventEmitter<HeadInfo>();
  @Output() onChangeContacts = new EventEmitter<Contacts>();

  private debounceTime = 2000;

  private timeoutID?: number;

  public sendUpdateDataWithDebounce(
    newData: HeadInfo | Contacts | ResumeInfoBlock
  ) {
    if (typeof this.timeoutID === 'number') {
      this.cancel();
    }

    this.timeoutID = window.setTimeout(
      () => this.sendUpdateData(newData),
      this.debounceTime
    );
  }

  private sendUpdateData(data: HeadInfo | Contacts | ResumeInfoBlock): void {
    switch (data.type) {
      case 'headInfo':
        return this.onChangeHeadInfo.emit(data);
      case 'contacts':
        return this.onChangeContacts.emit(data);
      default:
        return this.onChangeBlcok.emit(data);
    }
  }

  private cancel() {
    window.clearTimeout(this.timeoutID);
  }
}
