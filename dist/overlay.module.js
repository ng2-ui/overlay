"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var overlay_manager_1 = require("./overlay-manager");
exports.NguiOverlayManager = overlay_manager_1.NguiOverlayManager;
var overlay_directive_1 = require("./overlay.directive");
var NguiOverlayModule = (function () {
    function NguiOverlayModule() {
    }
    return NguiOverlayModule;
}());
NguiOverlayModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule],
        declarations: [overlay_directive_1.NguiOverlayDirective],
        providers: [overlay_manager_1.NguiOverlayManager],
        exports: [overlay_directive_1.NguiOverlayDirective]
    })
], NguiOverlayModule);
exports.NguiOverlayModule = NguiOverlayModule;
;
//# sourceMappingURL=overlay.module.js.map