"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var palmares_service_1 = require("../services/palmares.service");
var core_1 = require("@angular/core");
var PalmaresComponent = (function () {
    function PalmaresComponent(service) {
        this.service = service;
        this.text = 'Palmares Page';
        this.palmaresList = [];
    }
    PalmaresComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this.dataService.url)
        this.service.getPalmares()
            .subscribe(function (loaded) {
            //this.palmaresList.push(element)
            loaded.forEach(function (data) {
                _this.palmaresList.push(data);
            });
            //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
            console.log(_this.palmaresList[0].name);
        });
        /*this.palmaresList.forEach((key, value) => {
            console.log(`${key}: ${value}`)
        })*/
    };
    return PalmaresComponent;
}());
PalmaresComponent = __decorate([
    core_1.Component({
        selector: 'palmares',
        templateUrl: 'components/palmares.component.html',
        providers: [palmares_service_1.PalmaresService],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [palmares_service_1.PalmaresService])
], PalmaresComponent);
exports.PalmaresComponent = PalmaresComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFsbWFyZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFsbWFyZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUVBQThEO0FBQzlELHNDQUEwRTtBQVMxRSxJQUFhLGlCQUFpQjtJQUc1QiwyQkFBb0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFGNUMsU0FBSSxHQUFXLGVBQWUsQ0FBQTtRQUM5QixpQkFBWSxHQUFvQixFQUFFLENBQUE7SUFDYSxDQUFDO0lBRWhELG9DQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTthQUN2QixTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ1gsaUNBQWlDO1lBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNmLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2hDLENBQUMsQ0FBQyxDQUFBO1lBRUosdUVBQXVFO1lBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMxQyxDQUFDLENBQUMsQ0FBQTtRQUNKOztZQUVJO0lBQ04sQ0FBQztJQUVILHdCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSxpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxvQ0FBb0M7UUFDakQsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztRQUM1QixlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO3FDQUk2QixrQ0FBZTtHQUhqQyxpQkFBaUIsQ0FzQjdCO0FBdEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhbG1hcmVzIH0gZnJvbSAnLi4vbW9kZWxzL3BhbG1hcmVzJ1xuaW1wb3J0IHsgUGFsbWFyZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcGFsbWFyZXMuc2VydmljZSdcbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFsbWFyZXMnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvcGFsbWFyZXMuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtQYWxtYXJlc1NlcnZpY2VdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBQYWxtYXJlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgdGV4dDogc3RyaW5nID0gJ1BhbG1hcmVzIFBhZ2UnXG4gIHBhbG1hcmVzTGlzdDogQXJyYXk8UGFsbWFyZXM+ID0gW11cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBQYWxtYXJlc1NlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmRhdGFTZXJ2aWNlLnVybClcbiAgICB0aGlzLnNlcnZpY2UuZ2V0UGFsbWFyZXMoKVxuICAgICAgLnN1YnNjcmliZShsb2FkZWQgPT4ge1xuICAgICAgICAgICAgLy90aGlzLnBhbG1hcmVzTGlzdC5wdXNoKGVsZW1lbnQpXG4gICAgICAgICAgICBsb2FkZWQuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbG1hcmVzTGlzdC5wdXNoKGRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgLy90aGlzLnBhbG1hcmVzTGlzdC5wdXNoKG5ldyBQYWxtYXJlcyh0bXAubmFtZSwgdG1wLmRlcm5pZXIsIHRtcC5oYXV0KSlcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhbG1hcmVzTGlzdFswXS5uYW1lKVxuICAgICAgfSlcbiAgICAvKnRoaXMucGFsbWFyZXNMaXN0LmZvckVhY2goKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKVxuICAgIH0pKi8gIFxuICB9XG5cbn1cbiJdfQ==