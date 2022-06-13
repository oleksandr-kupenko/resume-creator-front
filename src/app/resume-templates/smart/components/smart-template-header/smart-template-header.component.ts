import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HeadInfo } from 'src/app/resume-templates/resume.interface';
import { ResumeService } from 'src/app/resume-templates/resume.service';
import { DebounceSaveDirective } from 'src/app/shared/directives/debounce-save-resume.direciver';
import { debounce } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-smart-template-header',
  templateUrl: './smart-template-header.component.html',
  styleUrls: ['./smart-template-header.component.scss'],
})
export class SmartTemplateHeaderComponent
  extends DebounceSaveDirective
  implements OnInit
{
  @Input() data!: HeadInfo;

  public isEditMode = false;

  public isAvatar = true;
  public isRole = true;

  public avatarFile?: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private resumeService: ResumeService
  ) {
    super();
  }

  ngOnInit(): void {}

  private saveHeaderWithDebounce = this.resumeService.setDebounceSaveHead(
    this.data
  );

  public handleChangeField(field: 'name' | 'role', event: any) {
    field == 'name'
      ? (this.data.fullname = event.target.innerText)
      : (this.data.position = event.target.innerText);

    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleSelectFile(event: any) {
    if (event.target.files.length > 0) {
      this.avatarFile = this.sanitizer.bypassSecurityTrustResourceUrl(
        URL.createObjectURL(event.target.files[0])
      );
    }
  }
}
