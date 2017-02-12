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
var core_1 = require("@angular/core");
var ng2_overlay_manager_1 = require("./ng2-overlay-manager");
var ng2_overlay_1 = require("./ng2-overlay");
var Ng2OverlayDirective = (function () {
    function Ng2OverlayDirective(viewContainerRef, overlayManager) {
        this.viewContainerRef = viewContainerRef;
        this.overlayManager = overlayManager;
        this.el = this.viewContainerRef.element.nativeElement;
    }
    Ng2OverlayDirective.prototype.ngAfterViewInit = function () {
        this.wrapItWithOverlayTag();
        this.registerToOverlayManager();
    };
    Ng2OverlayDirective.prototype.wrapItWithOverlayTag = function () {
        //console.log('wrapped overlay directive element with <ng2-overlay>');
        this.overlayEl = document.createElement('ng2-overlay');
        this.overlayEl.style.display = 'none';
        this.el.parentElement.insertBefore(this.overlayEl, this.el.nextSibling);
        this.overlayEl.appendChild(this.el);
    };
    //create Overlay object,  then register this element to overlayManager
    Ng2OverlayDirective.prototype.registerToOverlayManager = function () {
        var positionStr = this.overlayPosition;
        var overlay = new ng2_overlay_1.Ng2Overlay(this.overlayEl, {
            id: this.el.id,
            windowOverlay: this.overlayOf == "window",
            position: positionStr
        });
        //console.log('registering overlay', overlay);
        this.overlayManager.register(overlay);
    };
    return Ng2OverlayDirective;
}());
__decorate([
    core_1.Input('ng2-overlay-of'),
    __metadata("design:type", String)
], Ng2OverlayDirective.prototype, "overlayOf", void 0);
__decorate([
    core_1.Input('ng2-overlay-position'),
    __metadata("design:type", String)
], Ng2OverlayDirective.prototype, "overlayPosition", void 0);
Ng2OverlayDirective = __decorate([
    core_1.Directive({
        selector: '[ng2-overlay], [ng2-overlay-of], [ng2-overlay-position]',
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef,
        ng2_overlay_manager_1.Ng2OverlayManager])
], Ng2OverlayDirective);
exports.Ng2OverlayDirective = Ng2OverlayDirective;
//# sourceMappingURL=ng2-overlay.directive.js.map