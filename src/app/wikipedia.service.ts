import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http:HttpClient) { }

  public onSearch(value:string){
    return this.http.get("https://en.wikipedia.org/w/api.php",{
      params:{
        action: "query",
        list: "search",
        srsearch: value,
        format: "json",
        origin: "*"
      }
    });
    
  }
}
