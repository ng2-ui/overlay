"use strict";
var core_1 = require("@angular/core");
var Ng2OverlayManager = (function () {
    function Ng2OverlayManager() {
    }
    Ng2OverlayManager.prototype.register = function (overlay) {
        Ng2OverlayManager.overlays[overlay.id] = overlay;
        // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
    };
    Ng2OverlayManager.prototype.open = function (arg, event) {
        var overlay = typeof arg === 'string' ? Ng2OverlayManager.overlays[arg] : arg;
        if (!overlay.opened) {
            overlay.positionIt(event);
            overlay.opened = true;
        }
    };
    Ng2OverlayManager.prototype.close = function (arg) {
        var overlay = typeof arg === 'string' ? Ng2OverlayManager.overlays[arg] : arg;
        overlay.element.style.display = 'none';
        overlay.opened = false;
    };
    //list of overlay objects
    Ng2OverlayManager.overlays = {};
    Ng2OverlayManager.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Ng2OverlayManager.ctorParameters = function () { return []; };
    return Ng2OverlayManager;
}());
exports.Ng2OverlayManager = Ng2OverlayManager;
//# sourceMappingURL=ng2-overlay-manager.js.map