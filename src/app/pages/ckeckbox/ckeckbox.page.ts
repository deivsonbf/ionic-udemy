import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckeckbox',
  templateUrl: './ckeckbox.page.html',
  styleUrls: ['./ckeckbox.page.scss'],
})
export class CkeckboxPage implements OnInit {

  meses: any[] = [
    {
      nomeDoMes: "Janeiro",
      valor: 1,
      marcado: true
    },
    {
      nomeDoMes: "Fevereiro",
      valor: 2,
      marcado: true
    },
    {
      nomeDoMes: "Março",
      valor: 2,
      marcado: false
    },
  ];


  constructor() { }

  ngOnInit() {
    console.log(this.meses);
  }

  exibirMeses() {

    console.log(this.meses);

  }



}
