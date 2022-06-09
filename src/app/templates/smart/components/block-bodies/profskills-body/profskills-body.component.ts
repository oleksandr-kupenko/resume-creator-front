import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { SkillItem, Skills } from 'src/app/templates/resume.interface';
import { BlockBodyBase } from 'src/app/templates/smart/components/block-bodies/block-body.base';

@Component({
  selector: 'app-profskills-body',
  templateUrl: './profskills-body.component.html',
  styleUrls: ['./profskills-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfskillsBodyComponent extends BlockBodyBase implements OnInit {
  @Input() data!: Skills;
  @Input() isEditMode!: boolean;

  public checkIcon = faCheckCircle;

  private defaultItem: SkillItem = {
    name: '',
    rate: 1,
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
    //this.data.data.items[index][field] = event.target.innerText;
    this.sendUpdateBlock(this.data);
  }

  public handleAddItem() {
    this.data.data.items.push({ ...this.defaultItem });
    this.sendUpdateBlock(this.data);
  }
}
