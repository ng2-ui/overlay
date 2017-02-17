"use strict";
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var common_1 = require('@angular/common');
var ng2_overlay_manager_1 = require('./ng2-overlay-manager');
exports.Ng2OverlayManager = ng2_overlay_manager_1.Ng2OverlayManager;
var ng2_overlay_directive_1 = require('./ng2-overlay.directive');
var Ng2OverlayModule = (function () {
    function Ng2OverlayModule() {
    }
    Ng2OverlayModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [ng2_overlay_directive_1.Ng2OverlayDirective],
                    providers: [ng2_overlay_manager_1.Ng2OverlayManager],
                    exports: [ng2_overlay_directive_1.Ng2OverlayDirective]
                },] },
    ];
    /** @nocollapse */
    Ng2OverlayModule.ctorParameters = function () { return []; };
    return Ng2OverlayModule;
}());
exports.Ng2OverlayModule = Ng2OverlayModule;
;
//# sourceMappingURL=ng2-overlay.module.js.map