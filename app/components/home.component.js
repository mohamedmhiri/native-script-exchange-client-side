"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_service_1 = require("./../services/home.service");
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui-pro/sidedrawer/angular");
var HomeComponent = (function () {
    function HomeComponent(service, _changeDetectionRef) {
        this.service = service;
        this._changeDetectionRef = _changeDetectionRef;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.items = this.service.getItems();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    HomeComponent.prototype.openDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], HomeComponent.prototype, "drawerComponent", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "components/home.component.html",
        styleUrls: ['components/home.component.css'],
        providers: [home_service_1.HomeService]
    }),
    __metadata("design:paramtypes", [home_service_1.HomeService, core_1.ChangeDetectorRef])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJEQUF5RDtBQUN6RCxzQ0FBK0Y7QUFJL0YsMEVBQXdHO0FBU3hHLElBQWEsYUFBYTtJQU90Qix1QkFBb0IsT0FBb0IsRUFBVSxtQkFBc0M7UUFBcEUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7SUFBSSxDQUFDO0lBRTdGLGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUNELHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sa0NBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQWZHO0lBREMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFDVixnQ0FBc0I7c0RBQUM7QUFMdEMsYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztRQUM1QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQzNCLENBQUM7cUNBUStCLDBCQUFXLEVBQStCLHdCQUFpQjtHQVAvRSxhQUFhLENBb0J6QjtBQXBCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWUgfSBmcm9tICcuLy4uL21vZGVscy9ob21lJztcbmltcG9ydCB7IEhvbWVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9ob21lLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiOyAgXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpLXByby9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS1wcm8vc2lkZWRyYXdlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImhvbWVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJjb21wb25lbnRzL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnY29tcG9uZW50cy9ob21lLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtIb21lU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gICAgaXRlbXM6IEhvbWVbXTtcbiAgICBwcml2YXRlIGRyYXdlcjogU2lkZURyYXdlclR5cGU7XG4gICAgXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBcbiAgICBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBIb21lU2VydmljZSwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuc2VydmljZS5nZXRJdGVtcygpO1xuICAgIH1cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICB9XG59XG4iXX0=