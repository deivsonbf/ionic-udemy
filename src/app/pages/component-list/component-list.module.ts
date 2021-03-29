import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentListPageRoutingModule } from './component-list-routing.module';

import { ComponentListPage } from './component-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentListPageRoutingModule
  ],
  declarations: [ComponentListPage]
})
export class ComponentListPageModule {}
