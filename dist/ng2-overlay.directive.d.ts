import { ViewContainerRef } from '@angular/core';
import { Ng2OverlayManager } from './ng2-overlay-manager';
export declare class Ng2OverlayDirective {
    viewContainerRef: ViewContainerRef;
    overlayManager: Ng2OverlayManager;
    overlayOf: string;
    overlayPosition: string;
    el: HTMLElement;
    overlayEl: HTMLElement;
    constructor(viewContainerRef: ViewContainerRef, overlayManager: Ng2OverlayManager);
    ngAfterViewInit(): void;
    wrapItWithOverlayTag(): void;
    registerToOverlayManager(): void;
}
