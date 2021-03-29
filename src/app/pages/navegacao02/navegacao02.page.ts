import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao02',
  templateUrl: './navegacao02.page.html',
  styleUrls: ['./navegacao02.page.scss'],
})
export class Navegacao02Page implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  showpage01(){

    this.navCtrl.navigateForward('navegacao');

  }

}
