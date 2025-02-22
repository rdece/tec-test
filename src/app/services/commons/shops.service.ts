import { Injectable } from '@angular/core';
import { BaseCallsService } from '../base-calls.service';
import { Observable } from 'rxjs';
import { map, catchError, take } from "rxjs/operators";
import { ResponseCode } from 'src/app/interfaces/responses/ResponseCode';
import { ResponseShopsList } from 'src/app/interfaces/responses/ResponseShopsList';
import { ShopDetail } from 'src/app/interfaces/commons/ShopDetail';
import { GameDetail } from 'src/app/interfaces/commons/GameDetail';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  constructor(private baseCalls: BaseCallsService) { }

  getShopsList():Observable<ResponseShopsList>{
    return this.baseCalls.getShopsList().pipe(
      take(1),
      map((response: ResponseCode) => {
        let respShopsList: ResponseShopsList;
        if (response != null && response.code == 200){
          respShopsList = response.contenido;
          respShopsList.results.sort((a, b) => { return parseInt(a.id) - parseInt(b.id); });
        } else {
          respShopsList = null;
        }
        return respShopsList;
      })
    )
  }

  getShopDetail(id: string):Observable<ShopDetail>{
    return this.baseCalls.getShopDetail(id).pipe(
      take(1),
      map((response: ResponseCode) => {
        let respShopDetail: ShopDetail;
        if (response != null && response.code == 200){
          respShopDetail = response.contenido;
        } else {
          respShopDetail = null;
        }
        return respShopDetail;
      })
    )
  }

  getGameDetail(id: string):Observable<GameDetail>{
    return this.baseCalls.getGameDetail(id).pipe(
      take(1),
      map((response: ResponseCode) => {
        let respGameDetail: GameDetail;
        if (response != null && response.code == 200){
          respGameDetail = response.contenido;
        } else {
          respGameDetail = null;
        }
        return respGameDetail;
      })
    )
  }

}
