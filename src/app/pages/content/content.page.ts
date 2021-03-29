import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logScrollStart(){
    console.log('iniciou a interação no scroll');
  }
  logScrollEnd(){
    console.log('iscroll parou');
  }
  logScrolling(e){
   // console.log("interagindo");
    
  }
}
