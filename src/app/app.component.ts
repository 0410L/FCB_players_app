import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as json from 'plantillaFCB.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fcbarcelona-app';
  loading = true;

  es = json;
  goalkeepers = this.es.players.goalkeepers;
  defendors = this.es.players.defendors;
  midfielders = this.es.players.midfielders;
  forwarders = this.es.players.forwarders;
  tec_team = this.es.players.tec_team;

  constructor (private translate: TranslateService){
    this.setAppLang();

    this.loading = true;
    setTimeout(() => {
      // carga de datos aquí
      this.loading = false;
    }, 2000);
  }


  setAppLang():void{
    this.translate.setDefaultLang('es');
    this.translate.use(this.translate.getBrowserLang()!);
  }


}
