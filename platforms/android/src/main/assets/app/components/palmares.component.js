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
            loaded.forEach(function (data, key) {
                if (key < 5) {
                    data.alpha = data.name[0];
                    _this.palmaresList.push(data);
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFsbWFyZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFsbWFyZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUVBQThEO0FBQzlELHNDQUEwRTtBQVMxRSxJQUFhLGlCQUFpQjtJQUc1QiwyQkFBb0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFGNUMsU0FBSSxHQUFXLGVBQWUsQ0FBQTtRQUM5QixpQkFBWSxHQUFvQixFQUFFLENBQUE7SUFDYSxDQUFDO0lBRWhELG9DQUFRLEdBQVI7UUFBQSxpQkFtQkM7UUFsQkMsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2FBQ3ZCLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDWCxpQ0FBaUM7WUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxHQUFHO2dCQUNyQixFQUFFLENBQUEsQ0FBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUM5QixDQUFDO1lBRUwsQ0FBQyxDQUFDLENBQUE7WUFFSix1RUFBdUU7WUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFDLENBQUMsQ0FBQyxDQUFBO1FBQ0o7O1lBRUk7SUFDTixDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzVCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBSTZCLGtDQUFlO0dBSGpDLGlCQUFpQixDQTBCN0I7QUExQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFsbWFyZXMgfSBmcm9tICcuLi9tb2RlbHMvcGFsbWFyZXMnXG5pbXBvcnQgeyBQYWxtYXJlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wYWxtYXJlcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWxtYXJlcycsXG4gIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9wYWxtYXJlcy5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1BhbG1hcmVzU2VydmljZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBhbG1hcmVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICB0ZXh0OiBzdHJpbmcgPSAnUGFsbWFyZXMgUGFnZSdcbiAgcGFsbWFyZXNMaXN0OiBBcnJheTxQYWxtYXJlcz4gPSBbXVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFBhbG1hcmVzU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGF0YVNlcnZpY2UudXJsKVxuICAgIHRoaXMuc2VydmljZS5nZXRQYWxtYXJlcygpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZCA9PiB7XG4gICAgICAgICAgICAvL3RoaXMucGFsbWFyZXNMaXN0LnB1c2goZWxlbWVudClcbiAgICAgICAgICAgIGxvYWRlZC5mb3JFYWNoKChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZigga2V5IDwgNSl7XG4gICAgICAgICAgICAgICAgICBkYXRhLmFscGhhID0gZGF0YS5uYW1lWzBdXG4gICAgICAgICAgICAgICAgICB0aGlzLnBhbG1hcmVzTGlzdC5wdXNoKGRhdGEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgLy90aGlzLnBhbG1hcmVzTGlzdC5wdXNoKG5ldyBQYWxtYXJlcyh0bXAubmFtZSwgdG1wLmRlcm5pZXIsIHRtcC5oYXV0KSlcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhbG1hcmVzTGlzdFswXS5uYW1lKVxuICAgICAgfSlcbiAgICAvKnRoaXMucGFsbWFyZXNMaXN0LmZvckVhY2goKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKVxuICAgIH0pKi8gIFxuICB9XG5cbn1cbiJdfQ==