import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

import { TabsPageRoutingModule } from './tabs.router.module'; //comment to solve error
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      TabsPageRoutingModule //comment to solve error
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}


