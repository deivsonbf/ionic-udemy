import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navegação', url: 'navegacao', icon: 'star' },
    { title: 'Botões', url: 'botao', icon: 'construct' },
    { title: 'Alertas', url: 'alertas', icon: 'alert-circle' },
    { title: 'Action-sheet', url: 'action-sheet', icon: 'grid' },
    { title: 'Badges', url: 'badge', icon: 'medal' },
    { title: 'Cards', url: 'card', icon: 'card' },
    { title: 'Checkbox', url: 'ckeckbox', icon: 'checkbox' },
    { title: 'Chip', url: 'chip', icon: 'pricetag' },
    { title: 'Content', url: 'content', icon: 'cube' },
    { title: 'Date', url: 'date', icon: 'calendar' },
    { title: 'Fab', url: 'fab', icon: 'add-circle' },
    { title: 'Grid', url: 'grid', icon: 'apps' },
    { title: 'InfiniteScroll', url: 'infinitescroll', icon: 'code-download' },
    { title: 'Inputs', url: 'input', icon: 'albums' },
    { title: 'Lista', url: 'component-list', icon: 'list' },
    { title: 'Barra de Progresso', url: 'progressbar', icon: 'construct' },
    { title: 'refresher', url: 'refresher', icon: 'reload-circle' },
    { title: 'Reorder', url: 'rorder', icon: 'reorder-four' },
    { title: 'Select', url: 'select', icon: 'construct' }


  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
