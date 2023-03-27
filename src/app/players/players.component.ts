import { Component } from '@angular/core';
import * as json from 'plantillaFCB.json'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {
  title = 'fcbarcelona-app';
  
  plantillaFCB = json;
  goalkeepers = this.plantillaFCB.players.goalkeepers;
  defendors = this.plantillaFCB.players.defendors;
  midfielders = this.plantillaFCB.players.midfielders;
  forwarders = this.plantillaFCB.players.forwarders;
  tec_team = this.plantillaFCB.players.tec_team;

}
