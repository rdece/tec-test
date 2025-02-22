import { Injectable } from '@angular/core';
import { HttpClientService } from './commons/http-client.service';
import { Observable } from 'rxjs';
import { ResponseCode } from '../interfaces/responses/ResponseCode';
import { HttpHeaders } from '@angular/common/http';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseCallsService {

  constructor(private httpClientService: HttpClientService) { }

  getShopsList(): Observable<ResponseCode>{
    const url = "https://rawg-video-games-database.p.rapidapi.com/stores?key=c13d9de91ed24b13abd23ec72a84ddbe";
    const httpHeaders = new HttpHeaders({
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      'x-rapidapi-key': '45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0'
    });
    return this.httpClientService.get(url, { headers: httpHeaders }).pipe(timeout(15000));
  }

  getShopDetail(id: string): Observable<ResponseCode>{
    const url = `https://rawg-video-games-database.p.rapidapi.com/stores/${id}?key=c13d9de91ed24b13abd23ec72a84ddbe`;
    const httpHeaders = new HttpHeaders({
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      'x-rapidapi-key': '45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0'
    });
    return this.httpClientService.get(url, { headers: httpHeaders }).pipe(timeout(15000));
  }

  getGameDetail(id: string): Observable<ResponseCode>{
    const url = `https://rawg-video-games-database.p.rapidapi.com/games/${id}?key=c13d9de91ed24b13abd23ec72a84ddbe`;
    const httpHeaders = new HttpHeaders({
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      'x-rapidapi-key': '45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0'
    });
    return this.httpClientService.get(url, { headers: httpHeaders }).pipe(timeout(15000));
  }
}
