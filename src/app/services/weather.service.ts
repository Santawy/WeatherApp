import { WeatherData } from './../models/weather.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  getweatherData(cityName: string):Observable<WeatherData>{
   return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params:new HttpParams()
      .set('q',cityName)
      .set('units','imperial')
      .set('mode','json')
    })
  }
}
