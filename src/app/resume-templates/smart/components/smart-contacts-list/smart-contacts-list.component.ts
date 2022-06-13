import { Component, HostListener, Input, OnInit } from '@angular/core';

import {
  Contacts,
  ContactsItem,
  CONTACT_TYPE,
} from 'src/app/resume-templates/resume.interface';
import { DebounceSaveDirective } from 'src/app/shared/directives/debounce-save-resume.direciver';

@Component({
  selector: 'app-smart-contacts-list',
  templateUrl: './smart-contacts-list.component.html',
  styleUrls: ['./smart-contacts-list.component.scss'],
})
export class SmartContactsListComponent
  extends DebounceSaveDirective
  implements OnInit
{
  @Input() data!: Contacts;

  public isEditMode = false;

  private defaultContactItem: ContactsItem = {
    type: CONTACT_TYPE.phone,
    value: '',
  };

  constructor() {
    super();
  }

  ngOnInit(): void {}

  public icons = {};

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.data.items.splice(index, 1);
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleChageIcon(index: number, contactTpe: CONTACT_TYPE) {
    this.data.items[index].type = contactTpe;
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleChangeName(index: number, event: any) {
    this.data.items[index].value = event.target.innerText;
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleAddContact(event: Event) {
    event.stopPropagation();
    this.data.items.push(this.defaultContactItem);
    this.sendUpdateDataWithDebounce(this.data);
  }

  handleOpenEditMode() {
    this.isEditMode = true;
  }
}
