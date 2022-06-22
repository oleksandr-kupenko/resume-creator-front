import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { SkillItem, Skills } from 'src/app/resume-templates/resume.interface';
import { DebounceSaveDirective } from 'src/app/shared/directives/debounce-save-resume.direciver';

@Component({
  selector: 'app-universal-skills',
  templateUrl: './universal-skills-body.component.html',
  styleUrls: ['./universal-skills-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniversalSkillsBodyComponent
  extends DebounceSaveDirective
  implements OnInit
{
  @Input() data!: Skills;
  @Input() isEditMode!: boolean;
  @Input() rowPlaceholder = 'text';

  public skillsList!: SkillItem[];
  public selectedIcons = faCheckCircle;

  private defaultItem: SkillItem = {
    name: '',
    rate: 1,
  };

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.skillsList = this.data.data.items.map((item) => ({ ...item }));
  }

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.data.data.items.splice(index, 1);
    this.skillsList.splice(index, 1);
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleChangeValue(index: number, event: any) {
    this.data.data.items[index].name = event.target.innerText;
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleChangeRate(index: number, newRate: number) {
    this.data.data.items[index].rate = newRate;
    this.skillsList[index].rate = newRate;
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleAddItem() {
    this.skillsList.push({ ...this.defaultItem });
  }
}
