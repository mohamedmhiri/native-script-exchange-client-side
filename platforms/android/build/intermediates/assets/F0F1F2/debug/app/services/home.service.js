"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeService = (function () {
    function HomeService() {
        this.items = new Array({ id: 1, name: "Market", path: 'market' }, { id: 3, name: "Palmares", path: 'palmares' }, { id: 4, name: "Money Convertor", path: 'convertor' }, { id: 5, name: "Nearest Broker", path: 'broker' }, { id: 6, name: "Nearest Bank", path: 'bank' }, { id: 7, name: "News", path: 'news' });
    }
    HomeService.prototype.getItems = function () {
        return this.items;
    };
    HomeService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    return HomeService;
}());
HomeService = __decorate([
    core_1.Injectable()
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLElBQWEsV0FBVztJQUR4QjtRQUVZLFVBQUssR0FBRyxJQUFJLEtBQUssQ0FDckIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUN6QyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQzdDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUNyRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFDakQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUM3QyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBSXhDLENBQUM7SUFTTixDQUFDO0lBUEcsOEJBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksV0FBVztJQUR2QixpQkFBVSxFQUFFO0dBQ0EsV0FBVyxDQW9CdkI7QUFwQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuLi9tb2RlbHMvaG9tZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSG9tZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8SG9tZT4oXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6IFwiTWFya2V0XCIsIHBhdGg6ICdtYXJrZXQnIH0sXG4gICAgICAgIHsgaWQ6IDMsIG5hbWU6IFwiUGFsbWFyZXNcIiwgcGF0aDogJ3BhbG1hcmVzJyB9LFxuICAgICAgICB7IGlkOiA0LCBuYW1lOiBcIk1vbmV5IENvbnZlcnRvclwiLCBwYXRoOiAnY29udmVydG9yJyB9LFxuICAgICAgICB7IGlkOiA1LCBuYW1lOiBcIk5lYXJlc3QgQnJva2VyXCIsIHBhdGg6ICdicm9rZXInIH0sXG4gICAgICAgIHsgaWQ6IDYsIG5hbWU6IFwiTmVhcmVzdCBCYW5rXCIsIHBhdGg6ICdiYW5rJyB9LFxuICAgICAgICB7IGlkOiA3LCBuYW1lOiBcIk5ld3NcIiwgcGF0aDogJ25ld3MnIH0sLypcbiAgICAgICAgeyBpZDogOCwgbmFtZTogXCJcIiB9LFxuICAgICAgICB7IGlkOiA5LCBuYW1lOiBcIlwiIH0sKi9cbiAgICAgICAgXG4gICAgKTtcblxuICAgIGdldEl0ZW1zKCk6IEhvbWVbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IEhvbWUge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgfVxufVxuIl19