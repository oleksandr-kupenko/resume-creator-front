import { NgModule } from '@angular/core';
import { CloseIconComponent } from 'src/app/shared/icons/close/close.component';
import { NoAvatarIconComponent } from 'src/app/shared/icons/no-avatar/no-avatar.component';

@NgModule({
  declarations: [CloseIconComponent, NoAvatarIconComponent],
  imports: [],
  exports: [CloseIconComponent, NoAvatarIconComponent],
})
export class IconsModule {}
