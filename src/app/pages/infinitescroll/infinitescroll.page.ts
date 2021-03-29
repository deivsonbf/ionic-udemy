import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinitescroll',
  templateUrl: './infinitescroll.page.html',
  styleUrls: ['./infinitescroll.page.scss'],
})
export class InfinitescrollPage implements OnInit {

numeros = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16,
            17 , 18 , 19, 20 , 21 , 22 , 23 , 24 ,25];

limit = 5;

constructor() { }

  ngOnInit() {
  }

  popularInfinite(inifiniteScrollEvent : any){
    console.log('carregando mais 5 itens');
    this.limit += 15;
    inifiniteScrollEvent.target.complete();
  }

}
 