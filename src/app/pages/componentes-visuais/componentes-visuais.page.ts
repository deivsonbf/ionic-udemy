import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes-visuais',
  templateUrl: './componentes-visuais.page.html',
  styleUrls: ['./componentes-visuais.page.scss'],
})
export class ComponentesVisuaisPage implements OnInit {

  menuCollection : any[] = []


  constructor(private navCtrl : NavController) { 

    this.menuCollection = [
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
      { title: 'Select', url: 'select', icon: 'construct' },
      { title: 'Toggle', url: 'toggle', icon: 'toggle' },
      { title: 'Search-bar', url: 'searchbar', icon: 'search' },
      { title: 'Segment', url: 'segment', icon: 'copy' },
      { title: 'Slide', url: 'slide', icon: 'albums' },
      { title: 'Toast', url: 'toast', icon: 'construct' },
      { title: 'Modal', url: 'modal', icon: 'construct' },
      { title: 'Popover', url: 'popover', icon: 'construct' },
      { title: 'Radio', url: 'radio', icon: 'construct' },
      { title: 'Animacao', url: 'animacao', icon: 'construct' },
      { title: 'Minha Página', url: 'mypage', icon: 'avatar' },
      { title: 'API', url: 'api', icon: 'construct' }
    ]

  }

  ngOnInit() {
  }

  showPage(url : string){
    this.navCtrl.navigateForward(url);
  }


}
