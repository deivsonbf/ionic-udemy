import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  nome: string = '';
  pessoas: any;
  pessoasFiltradas: any;


  constructor() {
    this.pessoas = [
      { id: 1, idade: 33, nome: "Deivson" },
      { id: 2, idade: 31, nome: "Jessica" },
      { id: 3, idade: 10, nome: "Beatriz" },
      { id: 4, idade: 8, nome: "Leticia" },
      { id: 5, idade: 31, nome: "Handerson" },
      { id: 6, idade: 61, nome: "Edeizw" },
      { id: 7, idade: 73, nome: "Juvencio" },
      { id: 8, idade: 89, nome: "Francisca" },
      { id: 9, idade: 60, nome: "Socorro" }
    ]

    this.pessoasFiltradas = this.pessoas;

  }

  ngOnInit() {
  }

  filtrarItens(event){

    this.nome = event.target.value.toLowerCase();

    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
    
  }

  filtrarPessoas(nome){
    this.pessoasFiltradas = this.pessoas;
    return this.pessoasFiltradas.filter((item) => {
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }

  
 
}
