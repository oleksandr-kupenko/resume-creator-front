import { Directive, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import {
  Contacts,
  HeadInfo,
  ResumeInfoBlock,
} from 'src/app/resume-templates/resume.interface';

@Directive()
export class DebounceSaveDirective {
  @Output() changeBlcok = new EventEmitter<ResumeInfoBlock>();
  @Output() changeHeadInfo = new EventEmitter<HeadInfo>();
  @Output() changeContacts = new EventEmitter<Contacts>();

  private debounceTime = 2000;

  private timeoutID?: number;

  sendUpdateDataWithDebounce(newData: HeadInfo | Contacts | ResumeInfoBlock) {
    if (typeof this.timeoutID === 'number') {
      this.cancel();
    }

    this.timeoutID = window.setTimeout(
      () => this.sendUpdateData(newData),
      this.debounceTime
    );
  }

  sendUpdateData(data: HeadInfo | Contacts | ResumeInfoBlock): void {
    switch (data.type) {
      case 'headInfo':
        return this.changeHeadInfo.emit(data);
      case 'contacts':
        return this.changeContacts.emit(data);
      default:
        return this.changeBlcok.emit(data);
    }
  }

  private cancel() {
    window.clearTimeout(this.timeoutID);
  }
}
