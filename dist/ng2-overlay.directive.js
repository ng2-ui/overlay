"use strict";
var core_1 = require('@angular/core');
var ng2_overlay_manager_1 = require('./ng2-overlay-manager');
var ng2_overlay_1 = require('./ng2-overlay');
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
    Ng2OverlayDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ng2-overlay], [ng2-overlay-of], [ng2-overlay-position]',
                },] },
    ];
    /** @nocollapse */
    Ng2OverlayDirective.ctorParameters = function () { return [
        { type: core_1.ViewContainerRef, },
        { type: ng2_overlay_manager_1.Ng2OverlayManager, },
    ]; };
    Ng2OverlayDirective.propDecorators = {
        'overlayOf': [{ type: core_1.Input, args: ['ng2-overlay-of',] },],
        'overlayPosition': [{ type: core_1.Input, args: ['ng2-overlay-position',] },],
    };
    return Ng2OverlayDirective;
}());
exports.Ng2OverlayDirective = Ng2OverlayDirective;
//# sourceMappingURL=ng2-overlay.directive.js.map