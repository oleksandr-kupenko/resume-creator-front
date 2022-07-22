import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { take } from 'rxjs';
import {
  NewResumeInstance,
  TEMPLATE_COLOR,
  TEMPLATE_FONT,
} from 'src/app/resume-templates/resume.interface';
import { ResumeService } from 'src/app/resume-templates/resume.service';
import { PalletIconComponent } from 'src/app/shared/icons/pallet/pallet.component';
import { PlusIconComponent } from 'src/app/shared/icons/plus/plus.component';
import { SheetsIconComponent } from 'src/app/shared/icons/sheets/sheets.component';

@Component({
  selector: 'app-public-left-menu',
  templateUrl: './public-left-menu.component.html',
  styleUrls: ['./public-left-menu.component.scss'],
})
export class PublicLeftMenuComponent implements OnInit {
  @Input() resume!: NewResumeInstance;

  public isEditMode = false;

  public currentActiveIndex: null | number = null;
  public currentActiveMenuName!: MENU_ITEMS;
  public currentColorItemName: TEMPLATE_COLOR = TEMPLATE_COLOR.blue;
  public currentFontItemName: TEMPLATE_FONT = TEMPLATE_FONT.gambria;

  public MENU_ITEMS = MENU_ITEMS;
  public TEMPLATE_FONT = TEMPLATE_FONT;

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

  public colorsList = Object.values(TEMPLATE_COLOR);
  public fontsList = Object.values(TEMPLATE_FONT);

  private currentResume!: NewResumeInstance;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.initialiseResumeData();
  }

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

  public handleChangeColor(newColorItemName: TEMPLATE_COLOR) {
    this.currentColorItemName = newColorItemName;
    this.currentResume.custom.color = newColorItemName;
    this.resumeService.setResume(this.currentResume);
  }

  public handleChangeFont(newFontItemName: TEMPLATE_FONT) {
    this.currentFontItemName = newFontItemName;
    this.currentResume.custom.font = newFontItemName;
    this.resumeService.setResume(this.currentResume);
  }

  private initialiseResumeData() {
    this.resumeService
      .getResume()
      .pipe(take(1))
      .subscribe((resume) => {
        this.currentResume = resume;
        this.currentColorItemName = this.currentResume.custom.color;
        this.currentFontItemName = this.currentResume.custom.font;
      });
  }
}

enum MENU_ITEMS {
  template,
  styles,
  addSection,
}

type FontsNameList = {
  [key in TEMPLATE_FONT]: { title: string; font: string };
};
