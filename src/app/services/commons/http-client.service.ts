import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { ResponseCode } from "src/app/interfaces/responses/ResponseCode";

@Injectable({
  providedIn: "root",
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  post(url: string, body: any, options = {}): Observable<ResponseCode> {
    return this.http.post(url, body, options).pipe(
      map((response: any) => {
        return { code: 200, contenido: response };
      }),
      catchError((error: HttpErrorResponse) => {
        return of({
          code: error.status,
          contenido: "An error ocurred within the request",
        });
      })
    );
  }

  get(url: string, options = {}): Observable<ResponseCode> {
    return this.http.get(url, options).pipe(
      map((response: any) => {
        return { code: 200, contenido: response };
      }),
      catchError((error: HttpErrorResponse) => {
        return of({
          code: error.status,
          contenido: "An error ocurred within the request",
        });
      })
    );
  }


}
