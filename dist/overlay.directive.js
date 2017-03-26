"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var overlay_manager_1 = require("./overlay-manager");
var overlay_1 = require("./overlay");
var NguiOverlayDirective = (function () {
    function NguiOverlayDirective(viewContainerRef, overlayManager) {
        this.viewContainerRef = viewContainerRef;
        this.overlayManager = overlayManager;
        this.el = this.viewContainerRef.element.nativeElement;
    }
    NguiOverlayDirective.prototype.ngAfterViewInit = function () {
        this.wrapItWithOverlayTag();
        this.registerToOverlayManager();
    };
    NguiOverlayDirective.prototype.wrapItWithOverlayTag = function () {
        //console.log('wrapped overlay directive element with <ngui-overlay>');
        this.overlayEl = document.createElement('ngui-overlay');
        this.overlayEl.style.display = 'none';
        this.el.parentElement.insertBefore(this.overlayEl, this.el.nextSibling);
        this.overlayEl.appendChild(this.el);
    };
    //create Overlay object,  then register this element to overlayManager
    NguiOverlayDirective.prototype.registerToOverlayManager = function () {
        var positionStr = this.overlayPosition;
        var overlay = new overlay_1.NguiOverlay(this.overlayEl, {
            id: this.el.id,
            windowOverlay: this.overlayOf == "window",
            position: positionStr
        });
        //console.log('registering overlay', overlay);
        this.overlayManager.register(overlay);
    };
    return NguiOverlayDirective;
}());
__decorate([
    core_1.Input('ngui-overlay-of'),
    __metadata("design:type", String)
], NguiOverlayDirective.prototype, "overlayOf", void 0);
__decorate([
    core_1.Input('ngui-overlay-position'),
    __metadata("design:type", String)
], NguiOverlayDirective.prototype, "overlayPosition", void 0);
NguiOverlayDirective = __decorate([
    core_1.Directive({
        selector: '[ngui-overlay], [ngui-overlay-of], [ngui-overlay-position]',
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef,
        overlay_manager_1.NguiOverlayManager])
], NguiOverlayDirective);
exports.NguiOverlayDirective = NguiOverlayDirective;
//# sourceMappingURL=overlay.directive.js.map