import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  faAngleDown,
  faAngleUp,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-block-wrapper',
  templateUrl: './info-block-wrapper.component.html',
  styleUrls: ['./info-block-wrapper.component.scss'],
})
export class InfoBlockWrapperComponent implements OnInit {
  @Input() contextForHimself!: TemplateRef<any>;
  @Input() isLast = false;
  @Input() isFirst = false;
  @Input() isEditMode = false;
  @Output() onMoveBlockUp = new EventEmitter<void>();
  @Output() onMoveBlockDown = new EventEmitter<void>();
  @Output() onDeleteBlock = new EventEmitter<void>();
  @Output() onChangeEditMode = new EventEmitter<boolean>();

  public arrowTop = faAngleUp;
  public arrowDown = faAngleDown;
  public cartButton = faTrash;

  constructor() {}

  ngOnInit(): void {}

  public handleChangeIsEditModeStatus(status: boolean) {
    console.log('status', status);
    if (this.isEditMode) {
      this.onChangeEditMode.emit(status);
    }

    this.isEditMode = status;

    if (status || this.isEditMode) {
      this.onChangeEditMode.emit(status);
    }
  }
}
