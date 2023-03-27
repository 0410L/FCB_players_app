import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-card-players',
  templateUrl: './card-players.component.html',
  styleUrls: ['./card-players.component.scss']
})
export class CardPlayersComponent {

  @Input() item: any;
  
}
