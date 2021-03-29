import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navegacao02PageRoutingModule } from './navegacao02-routing.module';

import { Navegacao02Page } from './navegacao02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navegacao02PageRoutingModule
  ],
  declarations: [Navegacao02Page]
})
export class Navegacao02PageModule {}
