import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WikipediaService]
})
export class AppComponent {
  title = 'WikipediaSearch';
  posts:[] = [];
  constructor(private wikipediaService:WikipediaService){}

  onSearchChange(search:string){
    this.wikipediaService.onSearch(search).subscribe((response:any) =>{     
      this.posts = response.query.search;
    })
  }
}
