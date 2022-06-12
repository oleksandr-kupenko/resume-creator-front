import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {
  Education,
  EducationItem,
  Period,
  Summary,
} from 'src/app/resume-templates/resume.interface';
import { BlockBodyBase } from 'src/app/resume-templates/smart/components/block-bodies/block-body.base';

@Component({
  selector: 'app-summary-body',
  templateUrl: './summary-body.component.html',
  styleUrls: ['./summary-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryBodyComponent extends BlockBodyBase implements OnInit {
  @Input() data!: Summary;
  @Input() isEditMode!: boolean;

  public checkIcon = faCheckCircle;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscribeForDebounceChangeBlocks();
  }

  public handleChangeValue(event: any) {
    this.data.data.summary = event.target.innerText;
    this.sendUpdateBlock(this.data);
  }
}
