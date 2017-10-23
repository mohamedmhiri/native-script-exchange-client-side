import { NewsComponent } from './components/news.component';
import { CardComponent } from './components/card.component';
import { PalmaresComponent } from './components/palmares.component';
import { ConvertorComponent } from './components/convertor.component';
import { BankComponent } from './components/broker.component';
import { BrokerComponent } from './components/bank.component';
import { HomeComponent } from './components/home.component';
import { MarketComponent } from './components/market.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon'
// --- The built-in 'nativescript-telerik-ui-pro' modules
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui-pro/listview/angular";
import { NativeScriptUICalendarModule } from "nativescript-telerik-ui-pro/calendar/angular";
import { NativeScriptUIChartModule } from "nativescript-telerik-ui-pro/chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-telerik-ui-pro/dataform/angular";
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        TNSFontIconModule.forRoot({
			'fa': './assets/font-awesome.css',
			'ion': './assets/ionicons.css'
		}),
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        MarketComponent,
        HomeComponent,
        BrokerComponent,
        BankComponent,
        ConvertorComponent,
        PalmaresComponent,
        CardComponent,
        NewsComponent     
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        AppRoutingModule
    ]
})
export class AppModule { }
