import { Component, OnInit } from '@angular/core';

import {
  CONTACT_ICON,
  ResumeContacts,
} from 'src/app/templates/resume.interface';

@Component({
  selector: 'app-smart-contacts-list',
  templateUrl: './smart-contacts-list.component.html',
  styleUrls: ['./smart-contacts-list.component.scss'],
})
export class SmartContactsListComponent implements OnInit {
  public isEditMode = false;

  public contactsList: Array<ContactWithOptiosn> = [
    {
      icon: CONTACT_ICON.faPhone,
      text: 'fdf',
      isInputEdit: false,
      isOpenDropdown: true,
    },
    {
      icon: CONTACT_ICON.faEnvelope,
      text: '',
      isInputEdit: false,
      isOpenDropdown: false,
    },
    {
      icon: CONTACT_ICON.faEnvelope,
      text: '',
      isInputEdit: false,
      isOpenDropdown: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public icons = {};

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.contactsList.splice(index, 1);
  }

  public handleChageIcon(index: number, newIcon: CONTACT_ICON) {
    this.contactsList[index].icon = newIcon;
  }

  public handleChangeName(index: number, event: any) {
    this.contactsList[index].text = event.target.innerText;
  }

  public handleEnableTextEditMode(changedIndex: number, input: HTMLElement) {
    this.contactsList = this.contactsList.map((contact, index) => {
      return changedIndex == index
        ? { ...contact, isInputEdit: true }
        : { ...contact, isInputEdit: false };
    });
  }

  public handleAddContact(event: Event) {
    event.stopPropagation();
    this.contactsList.push({
      icon: CONTACT_ICON.faPhone,
      text: '',
      isInputEdit: false,
      isOpenDropdown: false,
    });
  }

  handleOpenEditMode(event: Event) {
    this.isEditMode = true;
  }
}

type ContactWithOptiosn = ResumeContacts & {
  isInputEdit: boolean;
  isOpenDropdown: boolean;
};
