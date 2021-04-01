import { PopoverInternoComponent } from './../../componentes/popover-interno/popover-interno.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverCtrl : PopoverController) { }

  ngOnInit() {
  }

  async apresentarPopover(ev: any){

    const popover = await this.popoverCtrl.create({
      component: PopoverInternoComponent,
      event: ev,
      translucent: true
    });

    return await popover.present();
  }
}
