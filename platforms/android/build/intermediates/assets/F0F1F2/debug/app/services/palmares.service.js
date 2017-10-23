"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
/*const Http = require('http')
*/
var PalmaresService = (function () {
    function PalmaresService(http) {
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
    PalmaresService.prototype.getPalmares = function () {
        return this.http.get(this.url + "/palmares")
            .map(function (res) { return res.json(); });
    };
    return PalmaresService;
}());
PalmaresService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PalmaresService);
exports.PalmaresService = PalmaresService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFsbWFyZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhbG1hcmVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMkM7QUFDM0MsaUNBQStCO0FBQy9CLHNDQUF3RDtBQUV4RDtFQUNFO0FBRUYsSUFBYSxlQUFlO0lBRTFCLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLDhDQUE4QyxDQUFBO0lBQzdELENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILHFDQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLEdBQUcsY0FBVyxDQUFDO2FBQ25DLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUgsc0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FHZSxXQUFJO0dBRm5CLGVBQWUsQ0FvQjNCO0FBcEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFsbWFyZXMgfSBmcm9tICcuLi9tb2RlbHMvcGFsbWFyZXMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG4vKmNvbnN0IEh0dHAgPSByZXF1aXJlKCdodHRwJylcbiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFsbWFyZXNTZXJ2aWNlIHtcbiAgdXJsOiBzdHJpbmdcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICB0aGlzLnVybCA9ICdodHRwczovL2NhbG0tdGhpY2tldC0zODk3NS5oZXJva3VhcHAuY29tL2FwaSdcbiAgfVxuXG4gIC8qcHVzaERhdGEoZGF0YSkge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIGlmKGRhdGEudGVtcGVyYXR1cmUgPCAzNi41IHx8IGRhdGEudGVtcGVyYXR1cmUgPiAzNy41IHx8IGRhdGEuaGVhcnRiZWFyIDwgMTIwIClcbiAgICAgICAgICBkYXRhLnNpY2sgPSAxXG4gICAgICAgIGVsc2UgZGF0YS5zaWNrID0gMFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9kYXRhLycsIEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH0pIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfSovXG4gIGdldFBhbG1hcmVzKCk6IE9ic2VydmFibGU8UGFsbWFyZXNbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsfS9wYWxtYXJlc2ApXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICB9XG5cbn1cbiJdfQ==