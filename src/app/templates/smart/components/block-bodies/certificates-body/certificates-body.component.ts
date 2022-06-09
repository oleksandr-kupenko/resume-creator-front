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
} from 'src/app/templates/resume.interface';
import { BlockBodyBase } from 'src/app/templates/smart/components/block-bodies/block-body.base';

@Component({
  selector: 'app-certificates-body',
  templateUrl: './certificates-body.component.html',
  styleUrls: ['./certificates-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificatesBodyComponent extends BlockBodyBase implements OnInit {
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

  ngOnInit(): void {
    super.ngOnInit();
  }

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.data.data.items.splice(index, 1);
    this.sendUpdateBlock(this.data);
  }

  public handleChangeValue(index: number, field: 'description', event: any) {
    this.data.data.items[index][field] = event.target.innerText;
    this.sendUpdateBlock(this.data);
  }

  public handleAddItem() {
    this.data.data.items.push({ ...this.defaultItem });
    this.sendUpdateBlock(this.data);
  }

  public handlePeriodChange(index: number, newDate: string) {
    this.data.data.items[index].date = newDate;
    this.sendUpdateBlock(this.data);
  }
}
