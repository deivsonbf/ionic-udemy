import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navegacao02Page } from './navegacao02.page';

const routes: Routes = [
  {
    path: '',
    component: Navegacao02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navegacao02PageRoutingModule {}
