import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { About, Summary } from 'src/app/resume-templates/resume.interface';
import { DebounceSaveDirective } from 'src/app/resume-templates/debounce-save-resume.base';

@Component({
  selector: 'app-about-body',
  templateUrl: './about-body.component.html',
  styleUrls: ['./about-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutBodyComponent
  extends DebounceSaveDirective
  implements OnInit
{
  @Input() data!: About;
  @Input() isEditMode!: boolean;

  public defaultAbout!: string;

  public selectedIcons = faCheckCircle;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.defaultAbout = this.data.data.about;
  }

  public handleChangeValue(event: any) {
    this.data.data.about = event.target.innerHTML;
    this.sendUpdateDataWithDebounce(this.data);
  }

  test() {
    console.log('about');
  }
}
