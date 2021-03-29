import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async alert() {

    this.alertCtrl.create({});

    const alert = await this.alertCtrl.create(
      {
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        buttons: ['OK']
      }
    );
    alert.present();
  }

  async multiple() {
    const alert = await this.alertCtrl.create(
      {
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        buttons: ['OK', 'Cancelar', 'Open Modal']
      }
    );
    alert.present();
  }

  async confirme() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah' + (1 + 1));
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }

  async Prompt(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Acesso Restrito',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Digite seu e-mail'
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'informe sua senha'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (form) => {
            console.log(form);
          }
        }
      ]
    });

    await alert.present();
  }



}
