import { NewsComponent } from './components/news.component';
import { CardComponent } from './components/card.component';
import { PalmaresComponent } from './components/palmares.component';
import { ConvertorComponent } from './components/convertor.component';
import { BankComponent } from './components/broker.component';
import { BrokerComponent } from './components/bank.component';
import { HomeComponent } from './components/home.component';
import { MarketComponent } from './components/market.component';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/market", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: 'market', component: MarketComponent },
    { path: 'palmares', component: PalmaresComponent },
    { path: 'home', component: HomeComponent },
    { path: 'broker', component: BrokerComponent },
    { path: 'bank', component: BankComponent },
    { path: 'convertor', component: ConvertorComponent },
    { path: 'card', component: CardComponent },
    { path: 'news', component: NewsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }