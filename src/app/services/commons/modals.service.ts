import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, Subscription } from 'rxjs';
import { GameCardComponent } from 'src/app/components/game-card/game-card.component';
import { GameDetail } from 'src/app/interfaces/commons/GameDetail';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {
  bsModalRef: BsModalRef

  constructor(private bsModalService: BsModalService) { }

  alert(gameDetail: GameDetail): Observable<string>{
    const initialState = {
      gameDetail
    };
    this.bsModalRef = this.bsModalService.show(GameCardComponent, {initialState});

    return new Observable<string>(this.getAlertSubscriber());
  }

  private getAlertSubscriber(){
    return(observer) => {
      const subscription = this.bsModalService.onHidden.subscribe((reason: string) => {
        observer.complete();
      });

      return {
        unsubscribe(){
          subscription.unsubscribe();
        }
      };
    };
  }
}
