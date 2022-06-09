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
} from 'src/app/templates/resume.interface';
import { BlockBodyBase } from 'src/app/templates/smart/components/block-bodies/block-body.base';

@Component({
  selector: 'app-education-body',
  templateUrl: './education-body.component.html',
  styleUrls: ['./education-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationBodyComponent extends BlockBodyBase implements OnInit {
  @Input() data!: Education;
  @Input() isEditMode!: boolean;

  public checkIcon = faCheckCircle;

  private defaultItem: EducationItem = {
    description: '',
    institution: '',
    period: { start: null, end: null },
  };

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.data.data.items.splice(index, 1);
    this.sendUpdateBlock(this.data);
  }

  public handleChangeValue(
    index: number,
    field: 'institution' | 'description',
    event: any
  ) {
    this.data.data.items[index][field] = event.target.innerText;
    this.sendUpdateBlock(this.data);
  }

  public handleAddItem() {
    this.data.data.items.push({ ...this.defaultItem });
    this.sendUpdateBlock(this.data);
  }

  public handlePeriodChange(index: number, newPeriod: Period) {
    console.log(newPeriod);
    this.data.data.items[index].period = newPeriod;
    this.sendUpdateBlock(this.data);
  }
}
