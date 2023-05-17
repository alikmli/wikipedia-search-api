import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { WikipediaSearch } from './WikiPedia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WikipediaService]
})
export class AppComponent {
  title = 'WikipediaSearch';
  posts:WikipediaSearch[]= [];
  constructor(private wikipediaService:WikipediaService){}

  onSearchChange(search:string){
    this.wikipediaService.onSearch(search).subscribe((response:any) =>{    
      this.posts = response;
    })
  }
}
