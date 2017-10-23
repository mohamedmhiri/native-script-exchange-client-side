"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("MapView", function () { return require("nativescript-google-maps-sdk").MapView; });
var BrokerComponent = (function () {
    function BrokerComponent() {
        //Map events
        this.onMapReady = function (event) {
            console.log("Map Ready");
        };
        this.message = "Message set.";
        this.latitude = 30.0;
        this.longitude = -100.0;
        this.zoom = 10;
        this.bearing = 0;
        this.tilt = 0;
        this.message = "Home constructed.";
    }
    //OnMapReady(args) { }
    BrokerComponent.prototype.onMarkerSelect = function (args) { };
    BrokerComponent.prototype.onCameraChanged = function (args) { };
    return BrokerComponent;
}());
__decorate([
    core_1.ViewChild("MapView"),
    __metadata("design:type", core_1.ElementRef)
], BrokerComponent.prototype, "mapView", void 0);
BrokerComponent = __decorate([
    core_1.Component({
        selector: "bank",
        templateUrl: "components/bank.component.html",
    }),
    __metadata("design:paramtypes", [])
], BrokerComponent);
exports.BrokerComponent = BrokerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErRDtBQUMvRCwwRUFBc0U7QUFFdEUsa0NBQWUsQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLE9BQU8sRUFBL0MsQ0FBK0MsQ0FBQyxDQUFDO0FBTWxGLElBQWEsZUFBZTtJQWN4QjtRQVhBLFlBQVk7UUFDWixlQUFVLEdBQUcsVUFBQyxLQUFLO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUM7UUFDSyxZQUFPLEdBQVUsY0FBYyxDQUFDO1FBQ2hDLGFBQVEsR0FBVSxJQUFJLENBQUM7UUFDdkIsY0FBUyxHQUFVLENBQUMsS0FBSyxDQUFDO1FBQzFCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFVLENBQUMsQ0FBQztRQUNuQixTQUFJLEdBQVUsQ0FBQyxDQUFDO1FBR25CLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLENBQUM7SUFDdkMsQ0FBQztJQUNELHNCQUFzQjtJQUN0Qix3Q0FBYyxHQUFkLFVBQWUsSUFBSSxJQUFJLENBQUM7SUFDeEIseUNBQWUsR0FBZixVQUFnQixJQUFJLElBQUksQ0FBQztJQUM3QixzQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFuQnlCO0lBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDOzhCQUFVLGlCQUFVO2dEQUFDO0FBRGpDLGVBQWU7SUFKM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxnQ0FBZ0M7S0FDaEQsQ0FBQzs7R0FDVyxlQUFlLENBb0IzQjtBQXBCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtyZWdpc3RlckVsZW1lbnR9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5cbnJlZ2lzdGVyRWxlbWVudChcIk1hcFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIikuTWFwVmlldyk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImJhbmtcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJjb21wb25lbnRzL2JhbmsuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQnJva2VyQ29tcG9uZW50IHtcbiAgICBAVmlld0NoaWxkKFwiTWFwVmlld1wiKSBtYXBWaWV3OiBFbGVtZW50UmVmO1xuIFxuICAgIC8vTWFwIGV2ZW50c1xuICAgIG9uTWFwUmVhZHkgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNYXAgUmVhZHlcIik7XG4gICAgfTtcbiAgICBwdWJsaWMgbWVzc2FnZTpzdHJpbmcgPSBcIk1lc3NhZ2Ugc2V0LlwiO1xuICAgIHB1YmxpYyBsYXRpdHVkZTpudW1iZXIgPSAzMC4wO1xuICAgIHB1YmxpYyBsb25naXR1ZGU6bnVtYmVyID0gLTEwMC4wO1xuICAgIHB1YmxpYyB6b29tOm51bWJlciA9IDEwO1xuICAgIHB1YmxpYyBiZWFyaW5nOm51bWJlciA9IDA7XG4gICAgcHVibGljIHRpbHQ6bnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIkhvbWUgY29uc3RydWN0ZWQuXCI7XG4gICAgfVxuICAgIC8vT25NYXBSZWFkeShhcmdzKSB7IH1cbiAgICBvbk1hcmtlclNlbGVjdChhcmdzKSB7IH1cbiAgICBvbkNhbWVyYUNoYW5nZWQoYXJncykgeyB9XG59XG4iXX0=