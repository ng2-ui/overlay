"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Ng2OverlayManager = Ng2OverlayManager_1 = (function () {
    function Ng2OverlayManager() {
    }
    Ng2OverlayManager.prototype.register = function (overlay) {
        Ng2OverlayManager_1.overlays[overlay.id] = overlay;
        // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
    };
    Ng2OverlayManager.prototype.open = function (arg, event) {
        var overlay = typeof arg === 'string' ? Ng2OverlayManager_1.overlays[arg] : arg;
        if (!overlay.opened) {
            overlay.positionIt(event);
            overlay.opened = true;
        }
    };
    Ng2OverlayManager.prototype.close = function (arg) {
        var overlay = typeof arg === 'string' ? Ng2OverlayManager_1.overlays[arg] : arg;
        overlay.element.style.display = 'none';
        overlay.opened = false;
    };
    return Ng2OverlayManager;
}());
//list of overlay objects
Ng2OverlayManager.overlays = {};
Ng2OverlayManager = Ng2OverlayManager_1 = __decorate([
    core_1.Injectable()
], Ng2OverlayManager);
exports.Ng2OverlayManager = Ng2OverlayManager;
var Ng2OverlayManager_1;
//# sourceMappingURL=ng2-overlay-manager.js.map