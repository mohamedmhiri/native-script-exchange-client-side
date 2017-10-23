"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
/*const Http = require('http')
*/
var NewsService = (function () {
    function NewsService(http) {
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
    NewsService.prototype.getNews = function () {
        return this.http.get(this.url + "/news")
            .map(function (res) { return res.json(); });
    };
    return NewsService;
}());
NewsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQTJDO0FBQzNDLGlDQUErQjtBQUMvQixzQ0FBd0Q7QUFFeEQ7RUFDRTtBQUVGLElBQWEsV0FBVztJQUV0QixxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyw4Q0FBOEMsQ0FBQTtJQUM3RCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFFSCw2QkFBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxHQUFHLFVBQU8sQ0FBQzthQUMvQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBR2UsV0FBSTtHQUZuQixXQUFXLENBb0J2QjtBQXBCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5ld3MgfSBmcm9tICcuLi9tb2RlbHMvbmV3cyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbi8qY29uc3QgSHR0cCA9IHJlcXVpcmUoJ2h0dHAnKVxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZXdzU2VydmljZSB7XG4gIHVybDogc3RyaW5nXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgICAgdGhpcy51cmwgPSAnaHR0cHM6Ly9jYWxtLXRoaWNrZXQtMzg5NzUuaGVyb2t1YXBwLmNvbS9hcGknXG4gIH1cblxuICAvKnB1c2hEYXRhKGRhdGEpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICBpZihkYXRhLnRlbXBlcmF0dXJlIDwgMzYuNSB8fCBkYXRhLnRlbXBlcmF0dXJlID4gMzcuNSB8fCBkYXRhLmhlYXJ0YmVhciA8IDEyMCApXG4gICAgICAgICAgZGF0YS5zaWNrID0gMVxuICAgICAgICBlbHNlIGRhdGEuc2ljayA9IDBcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZGF0YS8nLCBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KSAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH0qL1xuXG4gIGdldE5ld3MoKTogT2JzZXJ2YWJsZTxOZXdzW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybH0vbmV3c2ApXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICB9XG59XG4iXX0=