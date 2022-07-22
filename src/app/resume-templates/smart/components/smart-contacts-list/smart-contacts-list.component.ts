import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import {
  Contacts,
  ContactsItem,
  CONTACT_TYPE,
} from 'src/app/resume-templates/resume.interface';
import { DebounceSaveDirective } from 'src/app/resume-templates/debounce-save-resume.base';

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
  @Output() onChangeEditMode = new EventEmitter<boolean>();

  contactsList!: ContactsItem[];

  public isEditMode = false;

  private defaultContactItem: ContactsItem = {
    type: CONTACT_TYPE.phone,
    value: '',
  };

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.contactsList = this.data.items.map((item) => ({ ...item }));
  }

  public handleDelete(index: number, event: Event) {
    event.stopPropagation();
    this.data.items.splice(index, 1);
    this.contactsList.splice(index, 1);
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleChageIcon(index: number, contactTpe: CONTACT_TYPE) {
    this.data.items[index].type = contactTpe;
    this.contactsList[index].type = contactTpe;
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleChangeName(index: number, event: any) {
    this.data.items[index].value = event.target.innerHTML;
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleAddContact(event: Event) {
    console.log('add');
    event.stopPropagation();
    this.data.items.push({ ...this.defaultContactItem });
    this.contactsList.push({ ...this.defaultContactItem });
    this.sendUpdateDataWithDebounce(this.data);
  }

  public handleChangeIsEditModeStatus(status: boolean) {
    if (this.isEditMode) {
      this.onChangeEditMode.emit(status);
    }

    this.isEditMode = status;
    if (status || this.isEditMode) {
      this.onChangeEditMode.emit(status);
    }
  }
}
