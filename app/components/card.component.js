"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_service_1 = require("../services/card.service");
var core_1 = require("@angular/core");
var gestures_1 = require("ui/gestures");
var grid_layout_1 = require("ui/layouts/grid-layout");
var label_1 = require("ui/label");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var CardComponent = (function () {
    function CardComponent(service, fonticon) {
        this.service = service;
        this.fonticon = fonticon;
        this.i = 0;
    }
    CardComponent.prototype.ngOnInit = function () {
        this.emoji = this.service.getEmoji();
        this.code = this.emoji[this.i].code;
        //get ready for the swiping!
        for (var key in this.emoji) {
            this.handleSwipe(key);
        }
    };
    CardComponent.prototype.handleSwipe = function (key) {
        this.i--;
        var grid = new grid_layout_1.GridLayout();
        var emoji = new label_1.Label();
        var yes = this.yes.nativeElement;
        var no = this.no.nativeElement;
        var absolutelayout = this.al.nativeElement;
        var swipeleft = this.swipeleft.nativeElement;
        var swiperight = this.swiperight.nativeElement;
        //set the emoji on the card
        emoji.text = this.emoji[key].code;
        //android specific
        emoji.verticalAlignment = "middle";
        //build the grid which is the card
        grid.cssClasses[0] = 'card ' + this.emoji[key].color;
        grid.id = 'card' + Number(key);
        grid.marginTop = this.i;
        //add the emoji to the grid, and the grid to the absolutelayout
        grid.addChild(emoji);
        absolutelayout.addChild(grid);
        //handle tapping
        /*swiperight.addEventListener("tap", function(){
            //animate yes
        });
        swipeleft.addEventListener("tap", function(){
            //animate no
        })*/
        //make card swipable
        grid.on(gestures_1.GestureTypes.swipe, function (args) {
            if (args.direction == 1) {
                //right
                yes.animate({ opacity: 0, duration: 100 })
                    .then(function () { return yes.animate({ opacity: 1, duration: 100 }); })
                    .then(function () { return yes.animate({ opacity: 0, duration: 100 }); })
                    .then(function () {
                    return grid.animate({ translate: { x: 1000, y: 100 } })
                        .then(function () { return grid.animate({ translate: { x: 0, y: -2000 } }); })
                        .catch(function (e) {
                        console.log(e.message);
                    });
                })
                    .catch(function (e) {
                    console.log(e.message);
                });
            }
            else {
                //left
                no.animate({ opacity: 0, duration: 100 })
                    .then(function () { return no.animate({ opacity: 1, duration: 100 }); })
                    .then(function () { return no.animate({ opacity: 0, duration: 100 }); })
                    .then(function () {
                    return grid.animate({ translate: { x: -1000, y: 100 } })
                        .then(function () { return grid.animate({ translate: { x: 0, y: -2000 } }); })
                        .catch(function (e) {
                        console.log(e.message);
                    });
                })
                    .catch(function (e) {
                    console.log(e.message);
                });
            }
        });
    };
    return CardComponent;
}());
__decorate([
    core_1.ViewChild("absolutelayout"),
    __metadata("design:type", core_1.ElementRef)
], CardComponent.prototype, "al", void 0);
__decorate([
    core_1.ViewChild("yes"),
    __metadata("design:type", core_1.ElementRef)
], CardComponent.prototype, "yes", void 0);
__decorate([
    core_1.ViewChild("no"),
    __metadata("design:type", core_1.ElementRef)
], CardComponent.prototype, "no", void 0);
__decorate([
    core_1.ViewChild("swipeleft"),
    __metadata("design:type", core_1.ElementRef)
], CardComponent.prototype, "swipeleft", void 0);
__decorate([
    core_1.ViewChild("swiperight"),
    __metadata("design:type", core_1.ElementRef)
], CardComponent.prototype, "swiperight", void 0);
CardComponent = __decorate([
    core_1.Component({
        selector: "card",
        templateUrl: "components/card.component.html",
        styleUrls: ['components/card.component.css'],
        providers: [card_service_1.CardService, nativescript_ngx_fonticon_1.TNSFontIconService]
    }),
    __metadata("design:paramtypes", [card_service_1.CardService, nativescript_ngx_fonticon_1.TNSFontIconService])
], CardComponent);
exports.CardComponent = CardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlEQUF1RDtBQUV2RCxzQ0FBeUU7QUFDekUsd0NBQW9GO0FBQ3BGLHNEQUFvRDtBQUVwRCxrQ0FBaUM7QUFFakMsdUVBQStEO0FBTy9ELElBQWEsYUFBYTtJQVV0Qix1QkFBb0IsT0FBb0IsRUFBVSxRQUE0QjtRQUExRCxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFOOUUsTUFBQyxHQUFXLENBQUMsQ0FBQztJQU1vRSxDQUFDO0lBRW5GLGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDcEMsNEJBQTRCO1FBQzVCLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQztJQUNMLENBQUM7SUFDRCxtQ0FBVyxHQUFYLFVBQVksR0FBUTtRQUVoQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFVCxJQUFJLElBQUksR0FBRyxJQUFJLHdCQUFVLEVBQUUsQ0FBQztRQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBRXhCLElBQUksR0FBRyxHQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksRUFBRSxHQUFVLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3RDLElBQUksY0FBYyxHQUFtQixJQUFJLENBQUMsRUFB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Q1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztRQUM1QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDhDQUFrQixDQUFDO0tBQy9DLENBQUM7cUNBVytCLDBCQUFXLEVBQW9CLDhDQUFrQjtHQVZyRSxhQUFhLENBMkZ6QjtBQTNGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2FyZC5zZXJ2aWNlJztcbmltcG9ydCB7IEVtb2ppIH0gZnJvbSAnLi4vbW9kZWxzL2Vtb2ppJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlc09ic2VydmVyLCBHZXN0dXJlVHlwZXMgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgQWJzb2x1dGVMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImNhcmRcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJjb21wb25lbnRzL2NhcmQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnY29tcG9uZW50cy9jYXJkLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtDYXJkU2VydmljZSwgVE5TRm9udEljb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IHtcbiAgICBpdGVtczogRW1vamlbXTtcbiAgICBlbW9qaTogRW1vamlbXTtcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgaTogbnVtYmVyID0gMDtcbiAgICBAVmlld0NoaWxkKFwiYWJzb2x1dGVsYXlvdXRcIikgYWw6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcInllc1wiKSB5ZXM6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcIm5vXCIpIG5vOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJzd2lwZWxlZnRcIikgc3dpcGVsZWZ0OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJzd2lwZXJpZ2h0XCIpIHN3aXBlcmlnaHQ6IEVsZW1lbnRSZWY7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBDYXJkU2VydmljZSwgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVtb2ppID0gdGhpcy5zZXJ2aWNlLmdldEVtb2ppKCk7XG4gICAgICAgIHRoaXMuY29kZSA9IHRoaXMuZW1vamlbdGhpcy5pXS5jb2RlO1xuICAgICAgICAvL2dldCByZWFkeSBmb3IgdGhlIHN3aXBpbmchXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmVtb2ppKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVN3aXBlKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlU3dpcGUoa2V5OiBhbnkpIHtcblxuICAgICAgICB0aGlzLmktLTtcblxuICAgICAgICBsZXQgZ3JpZCA9IG5ldyBHcmlkTGF5b3V0KCk7XG4gICAgICAgIGxldCBlbW9qaSA9IG5ldyBMYWJlbCgpO1xuXG4gICAgICAgIGxldCB5ZXMgPSA8TGFiZWw+dGhpcy55ZXMubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IG5vID0gPExhYmVsPnRoaXMubm8ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IGFic29sdXRlbGF5b3V0ID0gPEFic29sdXRlTGF5b3V0PnRoaXMuYWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IHN3aXBlbGVmdCA9IDxCdXR0b24+dGhpcy5zd2lwZWxlZnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IHN3aXBlcmlnaHQgPSA8QnV0dG9uPnRoaXMuc3dpcGVyaWdodC5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIC8vc2V0IHRoZSBlbW9qaSBvbiB0aGUgY2FyZFxuICAgICAgICBlbW9qaS50ZXh0ID0gdGhpcy5lbW9qaVtrZXldLmNvZGU7XG4gICAgICAgIC8vYW5kcm9pZCBzcGVjaWZpY1xuICAgICAgICBlbW9qaS52ZXJ0aWNhbEFsaWdubWVudCA9IFwibWlkZGxlXCI7XG5cbiAgICAgICAgLy9idWlsZCB0aGUgZ3JpZCB3aGljaCBpcyB0aGUgY2FyZFxuICAgICAgICBncmlkLmNzc0NsYXNzZXNbMF0gPSAnY2FyZCAnICsgdGhpcy5lbW9qaVtrZXldLmNvbG9yO1xuICAgICAgICBncmlkLmlkID0gJ2NhcmQnICsgTnVtYmVyKGtleSk7XG4gICAgICAgIGdyaWQubWFyZ2luVG9wID0gdGhpcy5pO1xuICAgICAgICBcbiAgICAgICAgLy9hZGQgdGhlIGVtb2ppIHRvIHRoZSBncmlkLCBhbmQgdGhlIGdyaWQgdG8gdGhlIGFic29sdXRlbGF5b3V0XG4gICAgICAgIGdyaWQuYWRkQ2hpbGQoZW1vamkpO1xuICAgICAgICBhYnNvbHV0ZWxheW91dC5hZGRDaGlsZChncmlkKVxuXG4gICAgICAgIC8vaGFuZGxlIHRhcHBpbmdcbiAgICAgICAgLypzd2lwZXJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vYW5pbWF0ZSB5ZXNcbiAgICAgICAgfSk7XG4gICAgICAgIHN3aXBlbGVmdC5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvL2FuaW1hdGUgbm9cbiAgICAgICAgfSkqL1xuXG4gICAgICAgIC8vbWFrZSBjYXJkIHN3aXBhYmxlXG4gICAgICAgIGdyaWQub24oR2VzdHVyZVR5cGVzLnN3aXBlLCBmdW5jdGlvbiAoYXJnczogU3dpcGVHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgICAgICBpZiAoYXJncy5kaXJlY3Rpb24gPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vcmlnaHRcbiAgICAgICAgICAgICAgICB5ZXMuYW5pbWF0ZSh7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxMDAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4geWVzLmFuaW1hdGUoeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMTAwIH0pKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB5ZXMuYW5pbWF0ZSh7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxMDAgfSkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMTAwMCwgeTogMTAwIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBncmlkLmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMCwgeTogLTIwMDAgfSB9KTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2xlZnRcbiAgICAgICAgICAgICAgICBuby5hbmltYXRlKHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDEwMCB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBuby5hbmltYXRlKHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDEwMCB9KSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gbm8uYW5pbWF0ZSh7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAxMDAgfSkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogLTEwMDAsIHk6IDEwMCB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gZ3JpZC5hbmltYXRlKHsgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IC0yMDAwIH0gfSk7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59Il19