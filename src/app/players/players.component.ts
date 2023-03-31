import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as json from 'plantillaFCB.json';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  title = 'fcbarcelona-app';
  loading = true;
  
  es = json;
  goalkeepers = this.es.players.goalkeepers;
  defendors = this.es.players.defendors;
  midfielders = this.es.players.midfielders;
  forwarders = this.es.players.forwarders;
  tec_team = this.es.players.tec_team;

  constructor(private translate:TranslateService){
    translate.use(translate.getBrowserLang()!);
    this.loading = false;
  }


  ngOnInit(): void {

  }
  
  

}
