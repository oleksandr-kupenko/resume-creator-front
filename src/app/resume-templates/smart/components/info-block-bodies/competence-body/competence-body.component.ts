import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {
  Competence,
  CompetenceItem,
} from 'src/app/resume-templates/resume.interface';
import { DebounceSaveDirective } from 'src/app/resume-templates/debounce-save-resume.base';

@Component({
  selector: 'app-competence-body',
  templateUrl: './competence-body.component.html',
  styleUrls: ['./competence-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetenceBodyComponent
  extends DebounceSaveDirective
  implements OnInit
{
  @Input() data!: Competence;
  @Input() isEditMode!: boolean;

  public competenceList!: CompetenceItem[];

  public selectedIcons = faCheckCircle;

  private defaultItem: CompetenceItem = {
    name: '',
  };

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.competenceList = this.data.data.items.map((item) => ({ ...item }));
  }

  public handleChangeValue(index: number, event: any) {
    this.data.data.items[index] = event.target.innerHTML;
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleDelete(event: Event) {
    event.stopPropagation();
    this.data.data.items.pop();
    this.competenceList.pop();
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleAddItem() {
    this.competenceList.push({ ...this.defaultItem });
  }
}
