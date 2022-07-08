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
} from 'src/app/resume-templates/resume.interface';
import { DebounceSaveDirective } from 'src/app/resume-templates/debounce-save-resume.base';

@Component({
  selector: 'app-education-body',
  templateUrl: './education-body.component.html',
  styleUrls: ['./education-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationBodyComponent
  extends DebounceSaveDirective
  implements OnInit
{
  @Input() data!: Education;
  @Input() isEditMode!: boolean;

  public educationsList!: EducationItem[];
  public selectedIcons = faCheckCircle;

  private defaultItem: EducationItem = {
    description: '',
    institution: '',
    period: { start: null, end: null },
  };

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.educationsList = this.data.data.items.map((item) => ({ ...item }));
  }

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.data.data.items.splice(index, 1);
    this.educationsList.splice(index, 1);
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleChangeValue(
    index: number,
    field: 'institution' | 'description',
    event: any
  ) {
    this.data.data.items[index][field] = event.target.innerHTML;
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleAddItem() {
    this.data.data.items.push({ ...this.defaultItem });
    this.educationsList.push({ ...this.defaultItem });
  }

  public handlePeriodChange(index: number, newPeriod: Period) {
    this.data.data.items[index].period = newPeriod;
    this.educationsList[index].period = newPeriod;
    this.sendUpdateDataWithDebounce(this.data);
  }
}
