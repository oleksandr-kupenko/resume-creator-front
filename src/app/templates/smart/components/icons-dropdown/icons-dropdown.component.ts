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
import { CONTACT_ICON } from 'src/app/templates/resume.interface';

@Component({
  selector: 'app-dropdown-icons',
  templateUrl: './icons-dropdown.component.html',
  styleUrls: ['./icons-dropdown.component.scss'],
})
export class IconsDropdownComponent implements OnInit {
  @Input() isEditMode = false;
  @Input() currentIcon: CONTACT_ICON = CONTACT_ICON.faPhone;
  @Output() changeIcon = new EventEmitter<CONTACT_ICON>();

  public isOpenDropdown = false;

  public iconsList = Object.values(CONTACT_ICON);

  public iconsDefinitions: { [key in CONTACT_ICON]: IconDefinition } = {
    [CONTACT_ICON.faPhone]: faPhone,
    [CONTACT_ICON.faMapMarkerAlt]: faMapMarkerAlt,
    [CONTACT_ICON.faFacebook]: faFacebook,
    [CONTACT_ICON.faLinkedin]: faLinkedin,
    [CONTACT_ICON.faGithub]: faGithub,
    [CONTACT_ICON.faInstagram]: faInstagram,
    [CONTACT_ICON.faTelegram]: faTelegram,
    [CONTACT_ICON.faEnvelope]: faEnvelope,
    [CONTACT_ICON.faLink]: faLink,
  };

  constructor() {}

  ngOnInit(): void {}

  public handleOpenDropdown(event: Event) {
    this.isOpenDropdown = !this.isOpenDropdown;
  }

  public hanldeSelectIcon(icon: CONTACT_ICON, event: Event) {
    event.stopPropagation();
    this.changeIcon.emit(icon);
    this.isOpenDropdown = false;
  }
}
