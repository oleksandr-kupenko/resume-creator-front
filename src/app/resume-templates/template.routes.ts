import { Routes } from '@angular/router';

export const templateRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./smart/smart.module').then((m) => m.SmartTemplateModule),
  },
];
