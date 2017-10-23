import { NewsService } from './../services/news.service';
import { News } from './../models/news';
import { PalmaresService } from '../services/palmares.service'
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import {BehaviorSubject} from "rxjs/BehaviorSubject"

@Component({
  selector: 'news',
  templateUrl: 'components/news.component.html',
  providers: [NewsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit{
  text: string = 'News Page'
  news: Array<News> = []
  constructor(private service: NewsService) {}

  ngOnInit() {
    //console.log(this.dataService.url)
    this.service.getNews()
      .subscribe(loaded => {
            //this.palmaresList.push(element)
            loaded.forEach(data => {
                this.news.push(data)
            })
            
          //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
          console.log(this.news[0].date)
      })
    /*this.palmaresList.forEach((key, value) => {
        console.log(`${key}: ${value}`)
    })*/  
  }

}
