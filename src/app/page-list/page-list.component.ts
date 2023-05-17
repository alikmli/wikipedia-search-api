import { Component, Input } from '@angular/core';
import { WikipediaSearch } from '../WikiPedia';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  @Input() posts:WikipediaSearch[] = [];
  
}
