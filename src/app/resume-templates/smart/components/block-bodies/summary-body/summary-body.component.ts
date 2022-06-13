import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Summary } from 'src/app/resume-templates/resume.interface';
import { DebounceSaveDirective } from 'src/app/shared/directives/debounce-save-resume.direciver';

@Component({
  selector: 'app-summary-body',
  templateUrl: './summary-body.component.html',
  styleUrls: ['./summary-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryBodyComponent
  extends DebounceSaveDirective
  implements OnInit
{
  @Input() data!: Summary;
  @Input() isEditMode!: boolean;

  public checkIcon = faCheckCircle;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  public handleChangeValue(event: any) {
    this.data.data.summary = event.target.innerText;
    this.sendUpdateDataWithDebounce(this.data);
  }
}
