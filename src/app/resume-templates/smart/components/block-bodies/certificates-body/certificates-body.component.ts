import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {
  CertificateItem,
  Certificates,
} from 'src/app/resume-templates/resume.interface';
import { DebounceSaveDirective } from 'src/app/shared/directives/debounce-save-resume.direciver';

@Component({
  selector: 'app-certificates-body',
  templateUrl: './certificates-body.component.html',
  styleUrls: ['./certificates-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesBodyComponent
  extends DebounceSaveDirective
  implements OnInit
{
  @Input() data!: Certificates;
  @Input() isEditMode!: boolean;

  public checkIcon = faCheckCircle;

  private defaultItem: CertificateItem = {
    description: '',
    date: '',
  };

  constructor() {
    super();
  }

  ngOnInit(): void {}

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.data.data.items.splice(index, 1);
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleChangeValue(index: number, field: 'description', event: any) {
    this.data.data.items[index][field] = event.target.innerText;
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleAddItem() {
    this.data.data.items.push({ ...this.defaultItem });
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handlePeriodChange(index: number, newDate: string) {
    this.data.data.items[index].date = newDate;
    this.sendUpdateDataWithDebounce(this.data);
  }
}
