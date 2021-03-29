import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.page.html',
  styleUrls: ['./component-list.page.scss'],
})
export class ComponentListPage implements OnInit {

  times = ["Fortaleza" , "Palmeiras" , "Curintias" , "Bambis" , "Sardinhas", "Mulambada",
           "Bostafogo" , "vice-da-gama" , "Florminense", "Gaymio","Coloradas","Jahia"];

  constructor() { }

  ngOnInit() {
  }

}
