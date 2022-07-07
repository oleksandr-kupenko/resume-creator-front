import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HeadInfo } from 'src/app/resume-templates/resume.interface';
import { DebounceSaveDirective } from 'src/app/shared/directives/debounce-save-resume.direciver';

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

  public defaultFullName!: string;
  public defaultPosition!: string;

  /* public avatarFile?: SafeResourceUrl; */
  public imageBase64?: string;

  constructor(private sanitizer: DomSanitizer) {
    super();
  }

  ngOnInit(): void {
    this.defaultFullName = this.data.fullname;
    this.defaultPosition = this.data.position;

    if (this.data.photo.image) {
      this.imageBase64 = this.data.photo.image;
    }
  }

  public handleChangeField(field: 'name' | 'role', event: any) {
    field == 'name'
      ? (this.data.fullname = event.target.innerText)
      : (this.data.position = event.target.innerText);

    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleSelectFile(event: any) {
    if (event.target.files.length > 0) {
      /*       this.avatarFile = this.sanitizer.bypassSecurityTrustResourceUrl(
        URL.createObjectURL(event.target.files[0])
      ); */
      const file = event.target.files[0];
      console.log(event.target.files[0]);
      if (!file.type.includes('image')) {
        alert('type error');
        return;
      }

      if (file.size > 200000) {
        alert('size error');
        return;
      }
      this.imageToBase64(event.target.files[0]);
      this.sendUpdateDataWithDebounce(this.data);
    }
  }

  private imageToBase64(file: File) {
    var reader = new FileReader();
    reader.onloadend = () => {
      this.imageBase64 = reader.result as string;
      this.data.photo.image = this.imageBase64;
    };
    reader.readAsDataURL(file);
  }
}
