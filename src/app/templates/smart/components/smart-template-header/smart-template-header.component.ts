import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-smart-template-header',
  templateUrl: './smart-template-header.component.html',
  styleUrls: ['./smart-template-header.component.scss'],
})
export class SmartTemplateHeaderComponent implements OnInit {
  public isEditMode = false;

  public isAvatar = true;
  public isRole = true;

  public name: string | null = null;
  public role: string | null = null;
  public avatarLink: string | null = null;

  public avatarFile?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  public handleChangeField(field: 'name' | 'role', event: any) {
    field == 'name'
      ? (this.name = event.target.innerText)
      : (this.role = event.target.innerText);
  }

  public handleSelectFile(event: any) {
    if (event.target.files.length > 0) {
      this.avatarFile = this.sanitizer.bypassSecurityTrustResourceUrl(
        URL.createObjectURL(event.target.files[0])
      );
      console.log(event.target.files[0]);
      console.log(this.avatarFile);
    }
  }
}
