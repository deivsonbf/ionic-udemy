import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  cep : string = "60410315"
  resultado : any = {
    cep: '',
    logradouro: ''
  };

  constructor(private cepService : CepService) { }

  ngOnInit() {
  }

  consultaCep(){
    this.cepService.obterEndereco(this.cep)
    .then((json) => {
      this.resultado = json;
    })
    .catch((erro)=>{
      console.log(erro);
    });
  }

}
