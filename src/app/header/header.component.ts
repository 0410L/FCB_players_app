import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as json from 'plantillaFCB.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor (private translateservice : TranslateService){
    translateservice.setDefaultLang('es');
  }

  switchEnglish(language: string){
    this.translateservice.use(language)
  }

  switchSpain(language: string){
    this.translateservice.use(language)
  }

  switchCatala(language: string){
    this.translateservice.use(language)
  }

  es = json;
  goalkeepers = this.es.players.goalkeepers;
  defendors = this.es.players.defendors;
  midfielders = this.es.players.midfielders;
  forwarders = this.es.players.forwarders;
  tec_team = this.es.players.tec_team;


}
