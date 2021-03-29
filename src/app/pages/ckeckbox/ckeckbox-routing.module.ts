import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CkeckboxPage } from './ckeckbox.page';

const routes: Routes = [
  {
    path: '',
    component: CkeckboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CkeckboxPageRoutingModule {}
