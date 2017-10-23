"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var convertor_service_1 = require("./../services/convertor.service");
var core_1 = require("@angular/core");
var ConvertorComponent = (function () {
    function ConvertorComponent(service) {
        this.service = service;
    }
    ConvertorComponent.prototype.ngOnInit = function () {
        // this.result = new Convertor()
        this.items = this.service.getItems();
    };
    ConvertorComponent.prototype.ngOnChanges = function () {
        //this.service.convertDevise()        
    };
    ConvertorComponent.prototype.getBase = function (base) {
    };
    ConvertorComponent.prototype.selectedIndexChanged = function (picker) {
        var _this = this;
        var devise = this.service.getItems()[picker.selectedIndex];
        this.base = devise;
        var data = { 'base': devise };
        this.service
            .convertDevise(data)
            .subscribe(function (res) {
            _this.result = res;
            console.log("response" + res);
        });
        //this.getBase(data)
    };
    return ConvertorComponent;
}());
ConvertorComponent = __decorate([
    core_1.Component({
        selector: "convertor",
        templateUrl: "components/convertor.component.html",
        providers: [convertor_service_1.ConvertorService]
    }),
    __metadata("design:paramtypes", [convertor_service_1.ConvertorService])
], ConvertorComponent);
exports.ConvertorComponent = ConvertorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnZlcnRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFBbUU7QUFFbkUsc0NBQTZEO0FBTzdELElBQWEsa0JBQWtCO0lBSTNCLDRCQUFvQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtJQUM3QyxDQUFDO0lBQ0QscUNBQVEsR0FBUjtRQUNJLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDeEMsQ0FBQztJQUNELHdDQUFXLEdBQVg7UUFDSSxzQ0FBc0M7SUFDMUMsQ0FBQztJQUVELG9DQUFPLEdBQVAsVUFBUSxJQUFJO0lBRVosQ0FBQztJQUNELGlEQUFvQixHQUFwQixVQUFxQixNQUFNO1FBQTNCLGlCQVdDO1FBVkcsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUE7UUFDbEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUE7UUFDN0IsSUFBSSxDQUFDLE9BQU87YUFDWCxhQUFhLENBQUMsSUFBSSxDQUFDO2FBQ25CLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixLQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUNGLG9CQUFvQjtJQUN4QixDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLGtCQUFrQjtJQUw5QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLHFDQUFxQztRQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztLQUNoQyxDQUFDO3FDQUsrQixvQ0FBZ0I7R0FKcEMsa0JBQWtCLENBNkI5QjtBQTdCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb252ZXJ0b3JTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9jb252ZXJ0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBDb252ZXJ0b3IgfSBmcm9tICcuLy4uL21vZGVscy9jb252ZXJ0b3InO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWREYXRhRm9ybUNvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpLXByby9kYXRhZm9ybS9hbmd1bGFyJ1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiY29udmVydG9yXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiY29tcG9uZW50cy9jb252ZXJ0b3IuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtDb252ZXJ0b3JTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb252ZXJ0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7IFxuICAgIHJlc3VsdDogQ29udmVydG9yXG4gICAgYmFzZTogc3RyaW5nXG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxzdHJpbmc+XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBDb252ZXJ0b3JTZXJ2aWNlKSB7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyB0aGlzLnJlc3VsdCA9IG5ldyBDb252ZXJ0b3IoKVxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5zZXJ2aWNlLmdldEl0ZW1zKClcbiAgICB9XG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIC8vdGhpcy5zZXJ2aWNlLmNvbnZlcnREZXZpc2UoKSAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0QmFzZShiYXNlKSB7XG4gICAgICAgIFxuICAgIH1cbiAgICBzZWxlY3RlZEluZGV4Q2hhbmdlZChwaWNrZXIpIHtcbiAgICAgICAgbGV0IGRldmlzZSA9IHRoaXMuc2VydmljZS5nZXRJdGVtcygpW3BpY2tlci5zZWxlY3RlZEluZGV4XVxuICAgICAgICB0aGlzLmJhc2UgPSBkZXZpc2VcbiAgICAgICAgbGV0IGRhdGEgPSB7ICdiYXNlJzogZGV2aXNlIH1cbiAgICAgICAgdGhpcy5zZXJ2aWNlXG4gICAgICAgIC5jb252ZXJ0RGV2aXNlKGRhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gcmVzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIrcmVzKVxuICAgICAgICB9KSBcbiAgICAgICAgLy90aGlzLmdldEJhc2UoZGF0YSlcbiAgICB9XG59XG4iXX0=