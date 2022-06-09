import { Directive, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { ResumeTypicalBlockItem } from 'src/app/templates/resume.interface';

@Directive()
export class BlockBodyBase implements OnInit {
  @Output() changeBlcok = new EventEmitter<ResumeTypicalBlockItem>();

  debounceOutput: Subject<ResumeTypicalBlockItem> =
    new Subject<ResumeTypicalBlockItem>();

  ngOnInit(): void {
    this.subscribeToChangeFields();
  }

  public sendUpdateBlock(newBlock: ResumeTypicalBlockItem) {
    this.debounceOutput.next(newBlock);
  }

  private subscribeToChangeFields() {
    this.debounceOutput.pipe(debounceTime(2000)).subscribe((value) => {
      this.changeBlcok.emit(value);
    });
  }
}
