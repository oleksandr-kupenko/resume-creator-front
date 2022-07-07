import { Component, OnInit, TemplateRef } from '@angular/core';
import { PalletIconComponent } from 'src/app/shared/icons/pallet/pallet.component';
import { PlusIconComponent } from 'src/app/shared/icons/plus/plus.component';
import { SheetsIconComponent } from 'src/app/shared/icons/sheets/sheets.component';

@Component({
  selector: 'app-public-left-menu',
  templateUrl: './public-left-menu.component.html',
  styleUrls: ['./public-left-menu.component.scss'],
})
export class PublicLeftMenuComponent implements OnInit {
  public isEditMode = false;

  public currentActiveIndex: null | number = null;
  public currentActiveMenuName!: MENU_ITEMS;
  public currentColorItemName = 'blue';

  public MENU_ITEMS = MENU_ITEMS;

  public menuItems = [
    {
      name: MENU_ITEMS.template,
      iconComponent: SheetsIconComponent,
      tooltip: 'Chose template',
    },
    {
      name: MENU_ITEMS.styles,
      iconComponent: PalletIconComponent,
      tooltip: 'Colors & Fonts',
    },
    {
      name: MENU_ITEMS.addSection,
      iconComponent: PlusIconComponent,
      tooltip: 'Add section',
    },
  ];

  public colorsList = [
    'violet2',
    'navy2',
    'navy',
    'blue',
    'blue2',
    'violet',
    'green',
    'ochre',
  ];

  constructor() {}

  ngOnInit(): void {}

  public handleOpenSubMenu(event: Event, index: number) {
    event.stopPropagation();
    this.isEditMode = true;
    this.currentActiveIndex = index;
    this.currentActiveMenuName = this.menuItems[index].name;
  }

  public handleCloseEditMode() {
    this.isEditMode = false;
    this.currentActiveIndex = null;
  }

  public handleChangeColor(newColorItemName: string, ref: HTMLElement) {
    this.currentColorItemName = newColorItemName;
    const newColor = window.getComputedStyle(ref).backgroundColor;
    document.documentElement.style.setProperty('--main-color', newColor);
  }
}

enum MENU_ITEMS {
  template,
  styles,
  addSection,
}
