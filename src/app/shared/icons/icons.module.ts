import { NgModule } from '@angular/core';
import { CloseIconComponent } from 'src/app/shared/icons/close/close.component';
import { NoAvatarIconComponent } from 'src/app/shared/icons/no-avatar/no-avatar.component';
import { PalletIconComponent } from 'src/app/shared/icons/pallet/pallet.component';
import { PlusIconComponent } from 'src/app/shared/icons/plus/plus.component';

import { SheetsIconComponent } from 'src/app/shared/icons/sheets/sheets.component';

@NgModule({
  declarations: [
    CloseIconComponent,
    NoAvatarIconComponent,
    SheetsIconComponent,
    PalletIconComponent,
    PlusIconComponent,
  ],
  imports: [],
  exports: [
    CloseIconComponent,
    NoAvatarIconComponent,
    SheetsIconComponent,
    PalletIconComponent,
    PlusIconComponent,
  ],
})
export class IconsModule {}
