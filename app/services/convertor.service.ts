import { Convertor } from './../models/convertor';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ConvertorService {
    private url: string
    private headers = new Headers({'Content-Type': 'application/json'})

    constructor( private http: Http) {
        this.url = 'https://calm-thicket-38975.herokuapp.com/api'
    }

    convertDevise(data): Observable<any> {
        return this.http.post(`${this.url}/convert`, 
            JSON.stringify(data),
            { headers: this.headers })
            .map(res => {
                res.json()
                //console.log(res)
            })
            
    }
    getItems(): Array<string> {
        let items : Array<string> = ['AUD', 'BGN', 'BRL' ,'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'GBP','HKD','HRK','HUF','IDR','ILS','INR','JPY','KRW','MXN','MYR','NOK','NZD','PHP','PLN','RON','RUB','SEK','SGD','THB','TRY','USD','ZAR']
        return items
    }

    
}
