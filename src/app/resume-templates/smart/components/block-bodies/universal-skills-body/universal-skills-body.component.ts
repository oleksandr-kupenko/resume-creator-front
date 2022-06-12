import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { SkillItem, Skills } from 'src/app/resume-templates/resume.interface';
import { BlockBodyBase } from 'src/app/resume-templates/smart/components/block-bodies/block-body.base';

@Component({
  selector: 'app-universal-skills',
  templateUrl: './universal-skills-body.component.html',
  styleUrls: ['./universal-skills-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniversalSkillsBodyComponent
  extends BlockBodyBase
  implements OnInit
{
  @Input() data!: Skills;
  @Input() isEditMode!: boolean;
  @Input() rowPlaceholder = 'text';

  public checkIcon = faCheckCircle;

  private defaultItem: SkillItem = {
    name: '',
    rate: 1,
  };

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscribeForDebounceChangeBlocks();
  }

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.data.data.items.splice(index, 1);
    this.sendUpdateBlock(this.data);
  }

  public handleChangeValue(index: number, event: any) {
    this.data.data.items[index].name = event.target.innerText;
    this.sendUpdateBlock(this.data);
  }

  public handleChangeRate(index: number, newRate: number) {
    this.data.data.items[index].rate = newRate;
    this.sendUpdateBlock(this.data);
  }

  public handleAddItem() {
    this.data.data.items.push({ ...this.defaultItem });
    this.sendUpdateBlock(this.data);
  }
}
