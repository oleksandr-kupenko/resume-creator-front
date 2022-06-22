import { Component, OnInit } from '@angular/core';
import { PalletIconComponent } from 'src/app/shared/icons/pallet/pallet.component';
import { SheetsIconComponent } from 'src/app/shared/icons/sheets/sheets.component';

@Component({
  selector: 'app-public-left-menu',
  templateUrl: './public-left-menu.component.html',
  styleUrls: ['./public-left-menu.component.scss'],
})
export class PublicLeftMenuComponent implements OnInit {
  public isEditMode = false;

  public currentActiveIndex: null | number = null;

  public menuItems = [
    {
      iconComponent: SheetsIconComponent,
      tooltip: 'Chose template',
    },
    {
      iconComponent: PalletIconComponent,
      tooltip: 'Colors & Fonts',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public handleOpenSubMenu(event: Event, index: number) {
    event.stopPropagation();
    this.isEditMode = true;
    this.currentActiveIndex = index;
    console.log(this.menuItems);
  }

  public handleCloseEditMode() {
    this.isEditMode = false;
    this.currentActiveIndex = null;
  }
}
