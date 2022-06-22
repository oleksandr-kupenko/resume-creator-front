import { NgModule } from '@angular/core';
import { HtmlTagsPipe } from 'src/app/shared/pipes/htmlTags.pipe';

@NgModule({
  declarations: [HtmlTagsPipe],
  imports: [],
  exports: [HtmlTagsPipe],
})
export class PipesModule {}
