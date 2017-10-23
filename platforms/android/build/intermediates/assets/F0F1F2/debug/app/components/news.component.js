"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var news_service_1 = require("./../services/news.service");
var core_1 = require("@angular/core");
var NewsComponent = (function () {
    function NewsComponent(service) {
        this.service = service;
        this.text = 'News Page';
        this.news = [];
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this.dataService.url)
        this.service.getNews()
            .subscribe(function (loaded) {
            //this.palmaresList.push(element)
            loaded.forEach(function (data) {
                _this.news.push(data);
            });
            //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
            console.log(_this.news[0].date);
        });
        /*this.palmaresList.forEach((key, value) => {
            console.log(`${key}: ${value}`)
        })*/
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    core_1.Component({
        selector: 'news',
        templateUrl: 'components/news.component.html',
        providers: [news_service_1.NewsService],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsComponent);
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUF5RDtBQUd6RCxzQ0FBMEU7QUFTMUUsSUFBYSxhQUFhO0lBR3hCLHVCQUFvQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRnhDLFNBQUksR0FBVyxXQUFXLENBQUE7UUFDMUIsU0FBSSxHQUFnQixFQUFFLENBQUE7SUFDcUIsQ0FBQztJQUU1QyxnQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFkQyxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7YUFDbkIsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNYLGlDQUFpQztZQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDZixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN4QixDQUFDLENBQUMsQ0FBQTtZQUVKLHVFQUF1RTtZQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFDSjs7WUFFSTtJQUNOLENBQUM7SUFFSCxvQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBSTZCLDBCQUFXO0dBSDdCLGFBQWEsQ0FzQnpCO0FBdEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV3c1NlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL25ld3Muc2VydmljZSc7XG5pbXBvcnQgeyBOZXdzIH0gZnJvbSAnLi8uLi9tb2RlbHMvbmV3cyc7XG5pbXBvcnQgeyBQYWxtYXJlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wYWxtYXJlcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZXdzJyxcbiAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL25ld3MuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtOZXdzU2VydmljZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5ld3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHRleHQ6IHN0cmluZyA9ICdOZXdzIFBhZ2UnXG4gIG5ld3M6IEFycmF5PE5ld3M+ID0gW11cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBOZXdzU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGF0YVNlcnZpY2UudXJsKVxuICAgIHRoaXMuc2VydmljZS5nZXROZXdzKClcbiAgICAgIC5zdWJzY3JpYmUobG9hZGVkID0+IHtcbiAgICAgICAgICAgIC8vdGhpcy5wYWxtYXJlc0xpc3QucHVzaChlbGVtZW50KVxuICAgICAgICAgICAgbG9hZGVkLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdzLnB1c2goZGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAvL3RoaXMucGFsbWFyZXNMaXN0LnB1c2gobmV3IFBhbG1hcmVzKHRtcC5uYW1lLCB0bXAuZGVybmllciwgdG1wLmhhdXQpKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmV3c1swXS5kYXRlKVxuICAgICAgfSlcbiAgICAvKnRoaXMucGFsbWFyZXNMaXN0LmZvckVhY2goKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKVxuICAgIH0pKi8gIFxuICB9XG5cbn1cbiJdfQ==