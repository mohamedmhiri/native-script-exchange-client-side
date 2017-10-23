"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var news_component_1 = require("./components/news.component");
var card_component_1 = require("./components/card.component");
var palmares_component_1 = require("./components/palmares.component");
var convertor_component_1 = require("./components/convertor.component");
var broker_component_1 = require("./components/broker.component");
var bank_component_1 = require("./components/bank.component");
var home_component_1 = require("./components/home.component");
var market_component_1 = require("./components/market.component");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var routes = [
    { path: "", redirectTo: "/market", pathMatch: "full" },
    { path: "items", component: items_component_1.ItemsComponent },
    { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
    { path: 'market', component: market_component_1.MarketComponent },
    { path: 'palmares', component: palmares_component_1.PalmaresComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'broker', component: bank_component_1.BrokerComponent },
    { path: 'bank', component: broker_component_1.BankComponent },
    { path: 'convertor', component: convertor_component_1.ConvertorComponent },
    { path: 'card', component: card_component_1.CardComponent },
    { path: 'news', component: news_component_1.NewsComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsc0VBQW9FO0FBQ3BFLHdFQUFzRTtBQUN0RSxrRUFBOEQ7QUFDOUQsOERBQThEO0FBQzlELDhEQUE0RDtBQUM1RCxrRUFBZ0U7QUFDaEUsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSwwREFBd0Q7QUFDeEQsc0VBQW1FO0FBRW5FLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDdEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0NBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGdDQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0NBQzdDLENBQUM7QUFNRixJQUFhLGdCQUFnQjtJQUE3QjtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGdCQUFnQjtJQUo1QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDdEMsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5ld3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmV3cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWxtYXJlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWxtYXJlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udmVydG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnZlcnRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icm9rZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJyb2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcmtldENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tYXJrZXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvbWFya2V0XCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJpdGVtLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdtYXJrZXQnLCBjb21wb25lbnQ6IE1hcmtldENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ3BhbG1hcmVzJywgY29tcG9uZW50OiBQYWxtYXJlc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdicm9rZXInLCBjb21wb25lbnQ6IEJyb2tlckNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ2JhbmsnLCBjb21wb25lbnQ6IEJhbmtDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdjb252ZXJ0b3InLCBjb21wb25lbnQ6IENvbnZlcnRvckNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ2NhcmQnLCBjb21wb25lbnQ6IENhcmRDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICduZXdzJywgY29tcG9uZW50OiBOZXdzQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19