import { ViewContainerRef } from '@angular/core';
import { NguiOverlayManager } from './overlay-manager';
export declare class NguiOverlayDirective {
    viewContainerRef: ViewContainerRef;
    overlayManager: NguiOverlayManager;
    overlayOf: string;
    overlayPosition: string;
    el: HTMLElement;
    overlayEl: HTMLElement;
    constructor(viewContainerRef: ViewContainerRef, overlayManager: NguiOverlayManager);
    ngAfterViewInit(): void;
    wrapItWithOverlayTag(): void;
    registerToOverlayManager(): void;
}
