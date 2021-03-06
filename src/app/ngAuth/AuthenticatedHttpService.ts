// #docregion
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AzureADAuthService } from './authenticators/AzureADAuthService';
import { Observable, Subscriber } from 'rxjs';

@Injectable()
export class AuthenticatedHttpService {
  //private _authenticator: AzureADAuthService;
  //private _http: Http;
  constructor( private _http: Http, private _authenticator: AzureADAuthService) {
    
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + this._authenticator.getAccessToken());
  }

  get(url: string) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http.get(url, { headers: headers });
  }

  post(url: string, data: any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http.post(url, data, {
      headers: headers,
    });
  }
}