import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CkeckboxPageRoutingModule } from './ckeckbox-routing.module';

import { CkeckboxPage } from './ckeckbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CkeckboxPageRoutingModule
  ],
  declarations: [CkeckboxPage]
})
export class CkeckboxPageModule {}
