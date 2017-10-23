"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var market_service_1 = require("../services/market.service");
var core_1 = require("@angular/core");
var MarketComponent = (function () {
    function MarketComponent(service) {
        this.service = service;
        this.text = 'Market Page';
        this.marketList = [];
        this.name = '';
    }
    MarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this.dataService.url)
        this.service.getMarket()
            .subscribe(function (loaded) {
            loaded.forEach(function (data) {
                _this.marketList.push(data);
            });
            //base.marketList = loaded
            //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
            console.log(_this.marketList);
        });
        /*this.palmaresList.forEach((key, value) => {
            console.log(`${key}: ${value}`)
        })*/
    };
    return MarketComponent;
}());
MarketComponent = __decorate([
    core_1.Component({
        selector: 'market',
        templateUrl: 'components/market.component.html',
        providers: [market_service_1.MarketService],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [market_service_1.MarketService])
], MarketComponent);
exports.MarketComponent = MarketComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2REFBMEQ7QUFDMUQsc0NBQTBFO0FBUzFFLElBQWEsZUFBZTtJQUkxQix5QkFBb0IsT0FBc0I7UUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUgxQyxTQUFJLEdBQVcsYUFBYSxDQUFBO1FBQzVCLGVBQVUsR0FBa0IsRUFBRSxDQUFBO1FBQzlCLFNBQUksR0FBVyxFQUFFLENBQUE7SUFDNEIsQ0FBQztJQUU5QyxrQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFkQyxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7YUFDckIsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNmLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzlCLENBQUMsQ0FBQyxDQUFBO1lBRUgsMEJBQTBCO1lBQ3pCLHVFQUF1RTtZQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUNKOztZQUVJO0lBQ04sQ0FBQztJQUdILHNCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDMUIsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FLNkIsOEJBQWE7R0FKL0IsZUFBZSxDQXdCM0I7QUF4QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXJrZXQgfSBmcm9tICcuLi9tb2RlbHMvbWFya2V0J1xuaW1wb3J0IHsgTWFya2V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21hcmtldC5zZXJ2aWNlJ1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXJrZXQnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvbWFya2V0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbTWFya2V0U2VydmljZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1hcmtldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgdGV4dDogc3RyaW5nID0gJ01hcmtldCBQYWdlJ1xuICBtYXJrZXRMaXN0OiBBcnJheTxNYXJrZXQ+ID0gW11cbiAgbmFtZTogc3RyaW5nID0gJydcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXJrZXRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vY29uc29sZS5sb2codGhpcy5kYXRhU2VydmljZS51cmwpXG4gICAgdGhpcy5zZXJ2aWNlLmdldE1hcmtldCgpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZCA9PiB7XG4gICAgICAgICAgbG9hZGVkLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubWFya2V0TGlzdC5wdXNoKGRhdGEpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgLy9iYXNlLm1hcmtldExpc3QgPSBsb2FkZWRcbiAgICAgICAgICAvL3RoaXMucGFsbWFyZXNMaXN0LnB1c2gobmV3IFBhbG1hcmVzKHRtcC5uYW1lLCB0bXAuZGVybmllciwgdG1wLmhhdXQpKVxuICAgICAgICAgY29uc29sZS5sb2codGhpcy5tYXJrZXRMaXN0KVxuICAgICAgfSlcbiAgICAvKnRoaXMucGFsbWFyZXNMaXN0LmZvckVhY2goKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKVxuICAgIH0pKi8gIFxuICB9XG5cblxufVxuIl19