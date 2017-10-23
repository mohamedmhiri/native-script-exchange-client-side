import { Palmares } from '../models/palmares'
import { PalmaresService } from '../services/palmares.service'
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import {BehaviorSubject} from "rxjs/BehaviorSubject"

@Component({
  selector: 'palmares',
  templateUrl: 'components/palmares.component.html',
  providers: [PalmaresService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PalmaresComponent implements OnInit{
  text: string = 'Palmares Page'
  palmaresList: Array<Palmares> = []
  constructor(private service: PalmaresService) {}

  ngOnInit() {
    //console.log(this.dataService.url)
    this.service.getPalmares()
      .subscribe(loaded => {
            //this.palmaresList.push(element)
            loaded.forEach(data => {
                this.palmaresList.push(data)
            })
            
          //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
          console.log(this.palmaresList[0].name)
      })
    /*this.palmaresList.forEach((key, value) => {
        console.log(`${key}: ${value}`)
    })*/  
  }

}
