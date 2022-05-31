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

@Component({
  selector: 'app-dropdown-icons',
  templateUrl: './dropdown-icons.component.html',
  styleUrls: ['./dropdown-icons.component.scss'],
})
export class DropdownIconsComponent implements OnInit {
  @Input() isEditMode = false;
  @Input() currentIcon = faEnvelope;

  public isOpenDropdown = false;

  @Output() changeIcon = new EventEmitter<IconDefinition>();

  public iconsList = [
    faPhone,
    faMapMarkerAlt,
    faFacebook,
    faLinkedin,
    faGithub,
    faInstagram,
    faTelegram,
    faEnvelope,
    faLink,
  ];

  constructor() {}

  ngOnInit(): void {}

  public handleOpenDropdown(event: Event) {
    this.isOpenDropdown = !this.isOpenDropdown;
  }

  public hanldeSelectIcon(icon: IconDefinition, event: Event) {
    event.stopPropagation();
    this.changeIcon.emit(icon);
    this.isOpenDropdown = false;
  }
}
