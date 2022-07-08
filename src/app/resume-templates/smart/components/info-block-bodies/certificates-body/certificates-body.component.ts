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
import { DebounceSaveDirective } from 'src/app/resume-templates/debounce-save-resume.base';

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

  public certificatesList!: CertificateItem[];
  public selectedIcons = faCheckCircle;

  private defaultItem: CertificateItem = {
    description: '',
    date: '',
  };

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.certificatesList = this.data.data.items.map((item) => ({ ...item }));
  }

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.data.data.items.splice(index, 1);
    this.certificatesList.splice(index, 1);
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleChangeValue(index: number, field: 'description', event: any) {
    this.data.data.items[index][field] = event.target.innerHTML;
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleAddItem() {
    this.certificatesList.push({ ...this.defaultItem });
  }

  public handlePeriodChange(index: number, newDate: string) {
    this.data.data.items[index].date = newDate;
    this.certificatesList[index].date = newDate;
    this.sendUpdateDataWithDebounce(this.data);
  }
}
