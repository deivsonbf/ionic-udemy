import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Componentes Visuais', url: 'componentes-visuais', icon: 'apps' },
    { title: 'Componentes Nativos', url: 'componentes-nativos', icon: 'apps' },
  ];
  
  public labels = ['Familia', 'Amigos', 'Notas', 'Trabalho', 'Viagem', 'Lembretes'];
  constructor() { }
}
