import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http:HttpClient) { }

  public onSearch(value:string):Observable<WikipediaService>{
    return this.http.get<any>("https://en.wikipedia.org/w/api.php",{
      params:{
        action: "query",
        list: "search",
        srsearch: value,
        format: "json",
        origin: "*"
      }
    }).pipe(map(item => item?.query?.search));
    
  }
}
