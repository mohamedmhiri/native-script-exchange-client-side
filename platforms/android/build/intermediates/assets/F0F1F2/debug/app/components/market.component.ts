import { Market } from '../models/market'
import { MarketService } from '../services/market.service'
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import {BehaviorSubject} from "rxjs/BehaviorSubject"

@Component({
  selector: 'market',
  templateUrl: 'components/market.component.html',
  providers: [MarketService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketComponent implements OnInit{
  text: string = 'Market Page'
  marketList: Array<Market> = []
  name: string = ''
  constructor(private service: MarketService) {}

  ngOnInit() {
    //console.log(this.dataService.url)
    this.service.getMarket()
      .subscribe(loaded => {
          loaded.forEach(data => {
              this.marketList.push(data)
          })

         //base.marketList = loaded
          //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
         console.log(this.marketList)
      })
    /*this.palmaresList.forEach((key, value) => {
        console.log(`${key}: ${value}`)
    })*/  
  }


}
