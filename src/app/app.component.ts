import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService:WeatherService ){}

  
  weatherData?:WeatherData;
  cle = 0;
  cle_min=0;
  cle_max=0;
  cityName: string = "Cairo"

  ngOnInit(): void {
    this.gerweatherData(this.cityName);
  }

  onSubmit(){
    this.gerweatherData(this.cityName);
    this.cityName= "";
    
  }

  private gerweatherData(cityName: string){
    this.weatherService.getweatherData(cityName)
    .subscribe({
      next:(response)=> {
        this.weatherData=response;
        console.log(response)
       
        this.cle = (this.weatherData.main.temp-32)/1.8
        this.cle_min = (this.weatherData.main.temp_min-32)/1.8
        this.cle_max = (this.weatherData.main.temp_max-32)/1.8
      },
    });
  }
}
