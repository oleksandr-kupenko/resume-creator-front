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
  @Output() moveBlockUp = new EventEmitter<void>();
  @Output() moveBlockDown = new EventEmitter<void>();
  @Output() deleteBlock = new EventEmitter<void>();

  public isEditMode = false;

  public arrowTop = faAngleUp;
  public arrowDown = faAngleDown;
  public cartButton = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
