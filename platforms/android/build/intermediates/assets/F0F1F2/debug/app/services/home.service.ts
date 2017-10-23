import { Injectable } from "@angular/core";

import { Home } from "../models/home";

@Injectable()
export class HomeService {
    private items = new Array<Home>(
        { id: 1, name: "Market", path: 'market' },
        { id: 3, name: "Palmares", path: 'palmares' },
        { id: 4, name: "Money Convertor", path: 'convertor' },
        { id: 5, name: "Nearest Broker", path: 'broker' },
        { id: 6, name: "Nearest Bank", path: 'bank' },
        { id: 7, name: "News", path: 'news' },/*
        { id: 8, name: "" },
        { id: 9, name: "" },*/
        
    );

    getItems(): Home[] {
        return this.items;
    }

    getItem(id: number): Home {
        return this.items.filter(item => item.id === id)[0];
    }
}
