import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {
  EducationItem,
  Experience,
  ExperienceItem,
  Period,
} from 'src/app/templates/resume.interface';
import { BlockBodyBase } from 'src/app/templates/smart/components/block-bodies/block-body.base';

@Component({
  selector: 'app-experience-body',
  templateUrl: './experience-body.component.html',
  styleUrls: ['./experience-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceBodyComponent extends BlockBodyBase implements OnInit {
  @Input() data!: Experience;
  @Input() isEditMode!: boolean;

  public checkIcon = faCheckCircle;

  private defaultItem: ExperienceItem = {
    company: '',
    position: '',
    description: '',
    period: { start: null, end: null },
  };

  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this.data);
    super.ngOnInit();
  }

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.data.data.items.splice(index, 1);
    this.sendUpdateBlock(this.data);
  }

  public handleChangeValue(
    index: number,
    field: 'company' | 'position' | 'description',
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
    this.data.data.items[index].period = newPeriod;
    this.sendUpdateBlock(this.data);
  }
}
