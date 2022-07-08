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
} from 'src/app/resume-templates/resume.interface';
import { DebounceSaveDirective } from 'src/app/resume-templates/debounce-save-resume.base';

@Component({
  selector: 'app-experience-body',
  templateUrl: './experience-body.component.html',
  styleUrls: ['./experience-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceBodyComponent
  extends DebounceSaveDirective
  implements OnInit
{
  @Input() data!: Experience;
  @Input() isEditMode!: boolean;

  public experienceList!: ExperienceItem[];
  public selectedIcons = faCheckCircle;

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
    this.experienceList = this.data.data.items.map((item) => ({ ...item }));
  }

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.experienceList.splice(index, 1);
    this.data.data.items.splice(index, 1);
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleChangeValue(
    index: number,
    field: 'company' | 'position' | 'description',
    event: any
  ) {
    this.data.data.items[index][field] = event.target.innerHTML;
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleAddItem() {
    this.experienceList.push({ ...this.defaultItem });
    this.data.data.items.push({ ...this.defaultItem });
  }

  public handlePeriodChange(index: number, newPeriod: Period) {
    this.experienceList[index].period = newPeriod;
    this.data.data.items[index].period = newPeriod;
    this.sendUpdateDataWithDebounce(this.data);
  }
}
