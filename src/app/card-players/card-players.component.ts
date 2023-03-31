import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as json from 'plantillaFCB.json';


@Component({
  selector: 'app-card-players',
  templateUrl: './card-players.component.html',
  styleUrls: ['./card-players.component.scss']
})
export class CardPlayersComponent {

  es = json;
  goalkeepers = this.es.players.goalkeepers;
  defendors = this.es.players.defendors;
  midfielders = this.es.players.midfielders;
  forwarders = this.es.players.forwarders;
  tec_team = this.es.players.tec_team;

  @Input() item: any;

  constructor(private translate:TranslateService){
    this.translate.use(translate.getBrowserLang()!);


  }
  
  getKey(item: any):string{
    return ""+item+""
  }
  
  

}

