import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLink,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  CONTACT_ICON,
  CONTACT_TYPE,
} from 'src/app/resume-templates/resume.interface';

@Component({
  selector: 'app-dropdown-icons',
  templateUrl: './icons-dropdown.component.html',
  styleUrls: ['./icons-dropdown.component.scss'],
})
export class IconsDropdownComponent implements OnInit {
  @Input() isEditMode = false;
  @Input() currentType: CONTACT_TYPE = CONTACT_TYPE.phone;
  @Output() changeIcon = new EventEmitter<CONTACT_TYPE>();

  public isOpenDropdown = false;

  public iconsList = Object.values(CONTACT_TYPE);

  public iconsDefinitions: { [key in CONTACT_TYPE]: IconDefinition } = {
    [CONTACT_TYPE.phone]: faPhone,
    [CONTACT_TYPE.location]: faMapMarkerAlt,
    [CONTACT_TYPE.facebook]: faFacebook,
    [CONTACT_TYPE.linkedin]: faLinkedin,
    [CONTACT_TYPE.github]: faGithub,
    [CONTACT_TYPE.instagram]: faInstagram,
    [CONTACT_TYPE.telegram]: faTelegram,
    [CONTACT_TYPE.email]: faEnvelope,
    [CONTACT_TYPE.link]: faLink,
  };

  constructor() {}

  ngOnInit(): void {}

  public handleOpenDropdown(event: Event) {
    this.isOpenDropdown = !this.isOpenDropdown;
  }

  public hanldeSelectIcon(icon: CONTACT_TYPE, event: Event) {
    event.stopPropagation();
    this.changeIcon.emit(icon);
    this.isOpenDropdown = false;
  }
}
