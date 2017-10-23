"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
/*const Http = require('http')
*/
var MarketService = (function () {
    function MarketService(http) {
        this.http = http;
        this.url = 'https://calm-thicket-38975.herokuapp.com/api';
    }
    /*pushData(data) {
      var headers = new Headers();
          headers.append('Content-Type', 'application/json');
          if(data.temperature < 36.5 || data.temperature > 37.5 || data.heartbear < 120 )
            data.sick = 1
          else data.sick = 0
          return this.http.post('http://localhost:8000/data/', JSON.stringify(data),
           { headers: headers }) .map(response => response.json());
    }*/
    MarketService.prototype.getMarket = function () {
        return this.http.get(this.url + "/market")
            .map(function (res) { return res.json(); });
    };
    return MarketService;
}());
MarketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MarketService);
exports.MarketService = MarketService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXJrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyQztBQUMzQyxpQ0FBK0I7QUFDL0Isc0NBQXdEO0FBRXhEO0VBQ0U7QUFFRixJQUFhLGFBQWE7SUFFeEIsdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsOENBQThDLENBQUE7SUFDN0QsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBRUgsaUNBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsR0FBRyxZQUFTLENBQUM7YUFDakMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQUdlLFdBQUk7R0FGbkIsYUFBYSxDQW9CekI7QUFwQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXJrZXQgfSBmcm9tICcuLi9tb2RlbHMvbWFya2V0JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuLypjb25zdCBIdHRwID0gcmVxdWlyZSgnaHR0cCcpXG4qL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hcmtldFNlcnZpY2Uge1xuICB1cmw6IHN0cmluZ1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vY2FsbS10aGlja2V0LTM4OTc1Lmhlcm9rdWFwcC5jb20vYXBpJ1xuICB9XG5cbiAgLypwdXNoRGF0YShkYXRhKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgaWYoZGF0YS50ZW1wZXJhdHVyZSA8IDM2LjUgfHwgZGF0YS50ZW1wZXJhdHVyZSA+IDM3LjUgfHwgZGF0YS5oZWFydGJlYXIgPCAxMjAgKVxuICAgICAgICAgIGRhdGEuc2ljayA9IDFcbiAgICAgICAgZWxzZSBkYXRhLnNpY2sgPSAwXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2RhdGEvJywgSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfSkgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9Ki9cblxuICBnZXRNYXJrZXQoKTogT2JzZXJ2YWJsZTxNYXJrZXRbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsfS9tYXJrZXRgKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgfVxufVxuIl19