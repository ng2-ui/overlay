"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var common_1 = require('@angular/common');
var ng2_overlay_manager_1 = require('./ng2-overlay-manager');
var ng2_overlay_directive_1 = require('./ng2-overlay.directive');
var Ng2OverlayModule = (function () {
    function Ng2OverlayModule() {
    }
    Ng2OverlayModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [ng2_overlay_directive_1.Ng2OverlayDirective, Ng2O],
            providers: [ng2_overlay_manager_1.Ng2OverlayManager],
            exports: [ng2_overlay_directive_1.Ng2OverlayDirective, ng2_overlay_manager_1.Ng2OverlayManager]
        })
    ], Ng2OverlayModule);
    return Ng2OverlayModule;
}());
exports.Ng2OverlayModule = Ng2OverlayModule;
;
