"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CardService = (function () {
    function CardService() {
        this.emoji = new Array({ code: '🍮', color: 'b1' }, { code: '🍡', color: 'b2' }, { code: '🍨', color: 'b3' }, { code: '🍩', color: 'b4' }, { code: '🍪', color: 'b5' }, { code: '🍰', color: 'b5' }, { code: '🍬', color: 'b1' }, { code: '🍭', color: 'b2' }, { code: '🎂', color: 'b3' }, { code: '🍧', color: 'b4' }, { code: '🍫', color: 'b5' }, { code: '🍦', color: 'b6' });
    }
    CardService.prototype.getEmoji = function () {
        return this.emoji;
    };
    return CardService;
}());
CardService = __decorate([
    core_1.Injectable()
], CardService);
exports.CardService = CardService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLElBQWEsV0FBVztJQUR4QjtRQUVZLFVBQUssR0FBRyxJQUFJLEtBQUssQ0FDckIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDM0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDM0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDM0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDM0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDM0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDM0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDM0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDM0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDM0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDM0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDM0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FDOUIsQ0FBQztJQUlOLENBQUM7SUFIRyw4QkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7R0FDQSxXQUFXLENBa0J2QjtBQWxCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRW1vamkgfSBmcm9tIFwiLi4vbW9kZWxzL2Vtb2ppXCI7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FyZFNlcnZpY2Uge1xuICAgIHByaXZhdGUgZW1vamkgPSBuZXcgQXJyYXk8RW1vamk+KFxuICAgICAgICB7IGNvZGU6ICftoLztva4nLCBjb2xvcjogJ2IxJyB9LFxuICAgICAgICB7IGNvZGU6ICftoLztvaEnLCBjb2xvcjogJ2IyJyB9LFxuICAgICAgICB7IGNvZGU6ICftoLztvagnLCBjb2xvcjogJ2IzJyB9LFxuICAgICAgICB7IGNvZGU6ICftoLztvaknLCBjb2xvcjogJ2I0JyB9LFxuICAgICAgICB7IGNvZGU6ICftoLztvaonLCBjb2xvcjogJ2I1JyB9LFxuICAgICAgICB7IGNvZGU6ICftoLztvbAnLCBjb2xvcjogJ2I1JyB9LFxuICAgICAgICB7IGNvZGU6ICftoLztvawnLCBjb2xvcjogJ2IxJyB9LFxuICAgICAgICB7IGNvZGU6ICftoLztva0nLCBjb2xvcjogJ2IyJyB9LFxuICAgICAgICB7IGNvZGU6ICftoLztvoInLCBjb2xvcjogJ2IzJyB9LFxuICAgICAgICB7IGNvZGU6ICftoLztvacnLCBjb2xvcjogJ2I0JyB9LFxuICAgICAgICB7IGNvZGU6ICftoLztvasnLCBjb2xvcjogJ2I1JyB9LFxuICAgICAgICB7IGNvZGU6ICftoLztvaYnLCBjb2xvcjogJ2I2JyB9XG4gICAgKTtcbiAgICBnZXRFbW9qaSgpOiBFbW9qaVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1vamk7XG4gICAgfVxufSJdfQ==