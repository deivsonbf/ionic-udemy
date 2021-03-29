import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rorder',
  templateUrl: './rorder.page.html',
  styleUrls: ['./rorder.page.scss'],
})
export class RorderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doReorder(ev: any) {
    console.log('arrastado para', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }
}
