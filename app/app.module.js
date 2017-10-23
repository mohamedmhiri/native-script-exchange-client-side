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
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var http_1 = require("nativescript-angular/http");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
// --- The built-in 'nativescript-telerik-ui-pro' modules
var angular_1 = require("nativescript-telerik-ui-pro/sidedrawer/angular");
var angular_2 = require("nativescript-telerik-ui-pro/listview/angular");
var angular_3 = require("nativescript-telerik-ui-pro/calendar/angular");
var angular_4 = require("nativescript-telerik-ui-pro/chart/angular");
var angular_5 = require("nativescript-telerik-ui-pro/dataform/angular");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            http_1.NativeScriptHttpModule,
            nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                'fa': './assets/font-awesome.css',
                'ion': './assets/ionicons.css'
            }),
            angular_2.NativeScriptUIListViewModule,
            angular_1.NativeScriptUISideDrawerModule,
            angular_3.NativeScriptUICalendarModule,
            angular_4.NativeScriptUIChartModule,
            angular_5.NativeScriptUIDataFormModule
        ],
        declarations: [
            app_component_1.AppComponent,
            items_component_1.ItemsComponent,
            item_detail_component_1.ItemDetailComponent,
            market_component_1.MarketComponent,
            home_component_1.HomeComponent,
            bank_component_1.BrokerComponent,
            broker_component_1.BankComponent,
            convertor_component_1.ConvertorComponent,
            palmares_component_1.PalmaresComponent,
            card_component_1.CardComponent,
            news_component_1.NewsComponent
        ],
        providers: [
            item_service_1.ItemService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ],
        exports: [
            app_routing_1.AppRoutingModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4REFBNEQ7QUFDNUQsOERBQTREO0FBQzVELHNFQUFvRTtBQUNwRSx3RUFBc0U7QUFDdEUsa0VBQThEO0FBQzlELDhEQUE4RDtBQUM5RCw4REFBNEQ7QUFDNUQsa0VBQWdFO0FBQ2hFLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUUvQyxvREFBa0Q7QUFDbEQsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSxrREFBbUU7QUFDbkUsdUVBQTZEO0FBQzdELHlEQUF5RDtBQUN6RCwwRUFBZ0c7QUFDaEcsd0VBQTRGO0FBQzVGLHdFQUE0RjtBQUM1RixxRUFBc0Y7QUFDdEYsd0VBQTRGO0FBMEM1RixJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUF6Q3JCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLDZCQUFzQjtZQUN0Qiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQy9CLElBQUksRUFBRSwyQkFBMkI7Z0JBQ2pDLEtBQUssRUFBRSx1QkFBdUI7YUFDOUIsQ0FBQztZQUNJLHNDQUE0QjtZQUM1Qix3Q0FBOEI7WUFDOUIsc0NBQTRCO1lBQzVCLG1DQUF5QjtZQUN6QixzQ0FBNEI7U0FDL0I7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLGdDQUFjO1lBQ2QsMkNBQW1CO1lBQ25CLGtDQUFlO1lBQ2YsOEJBQWE7WUFDYixnQ0FBZTtZQUNmLGdDQUFhO1lBQ2Isd0NBQWtCO1lBQ2xCLHNDQUFpQjtZQUNqQiw4QkFBYTtZQUNiLDhCQUFhO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsMEJBQVc7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtRQUNELE9BQU8sRUFBRTtZQUNMLDhCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5ld3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmV3cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWxtYXJlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWxtYXJlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udmVydG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnZlcnRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icm9rZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJyb2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcmtldENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tYXJrZXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbidcbi8vIC0tLSBUaGUgYnVpbHQtaW4gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpLXBybycgbW9kdWxlc1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpLXByby9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL2xpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL2NhbGVuZGFyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL2NoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL2RhdGFmb3JtL2FuZ3VsYXJcIjtcbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuXHRcdFx0J2ZhJzogJy4vYXNzZXRzL2ZvbnQtYXdlc29tZS5jc3MnLFxuXHRcdFx0J2lvbic6ICcuL2Fzc2V0cy9pb25pY29ucy5jc3MnXG5cdFx0fSksXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgICAgIE1hcmtldENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgQnJva2VyQ29tcG9uZW50LFxuICAgICAgICBCYW5rQ29tcG9uZW50LFxuICAgICAgICBDb252ZXJ0b3JDb21wb25lbnQsXG4gICAgICAgIFBhbG1hcmVzQ29tcG9uZW50LFxuICAgICAgICBDYXJkQ29tcG9uZW50LFxuICAgICAgICBOZXdzQ29tcG9uZW50ICAgICBcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJdGVtU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==