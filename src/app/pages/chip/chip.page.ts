import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.page.html',
  styleUrls: ['./chip.page.scss'],
})
export class ChipPage implements OnInit {

  categorias:any[] = ["Foto 1" , "Foto 2" , "Foto 3","Foto 4","Foto 5"];

  cont : number = 0;

  constructor() { }
  
  contador(){
    console.log(this.cont++);
  }

  ngOnInit() {
  }



}
