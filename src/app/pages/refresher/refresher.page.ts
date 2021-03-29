import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  atualizar(event) {

    console.log("usuario solicitou atualização");

    setTimeout(() => {
      console.log("lista atualizada com sucesso");
      event.target.complete();
    }, 2000);
  }

}