import { NgModule } from '@angular/core';
import { CloseIconComponent } from 'src/app/shared/icons/close/close.component';
import { NoAvatarIconComponent } from 'src/app/shared/icons/no-avatar/no-avatar.component';
import { PalletIconComponent } from 'src/app/shared/icons/pallet/pallet.component';
import { SheetsIconComponent } from 'src/app/shared/icons/sheets/sheets.component';

@NgModule({
  declarations: [
    CloseIconComponent,
    NoAvatarIconComponent,
    SheetsIconComponent,
    PalletIconComponent,
  ],
  imports: [],
  exports: [
    CloseIconComponent,
    NoAvatarIconComponent,
    SheetsIconComponent,
    PalletIconComponent,
  ],
})
export class IconsModule {}
