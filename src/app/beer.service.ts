import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBeer } from './ibeer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http:HttpClient) { }
  private _url: string = "https://api.punkapi.com/v2/beers";

  getAll():Observable<IBeer []>{
    return this.http.get<IBeer []>(this._url);
  }
}
