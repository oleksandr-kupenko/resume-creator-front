import {
  Component,
  HostBinding,
  Input,
  OnInit,
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
  @Input() refToHimself!: TemplateRef<any>;

  public isEditMode = false;

  public arrowTop = faAngleUp;
  public arrowDown = faAngleDown;
  public cartButton = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
