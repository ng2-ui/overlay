import { Directive, ViewContainerRef, Input } from '@angular/core';

import { Ng2OverlayManager } from './ng2-overlay-manager';
import { Ng2Overlay } from './ng2-overlay';

@Directive({
  selector: '[ng2-overlay], [ng2-overlay-of], [ng2-overlay-position]',
})
export class Ng2OverlayDirective {

  @Input('ng2-overlay-of') overlayOf: string;
  @Input('ng2-overlay-position') overlayPosition: string;

  el: HTMLElement;        // the element this directive is assigned to
  overlayEl: HTMLElement; // <ng2-overlay> in <ng2-overlay>this.el</ng2-overlay>

  constructor(
    public viewContainerRef: ViewContainerRef,
    public overlayManager: Ng2OverlayManager
  ) {
    this.el = this.viewContainerRef.element.nativeElement;
  }

  ngAfterViewInit(): void {
    this.wrapItWithOverlayTag();
    this.registerToOverlayManager();
  }

  wrapItWithOverlayTag() {
    //console.log('wrapped overlay directive element with <ng2-overlay>');
    this.overlayEl = document.createElement('ng2-overlay');
    this.overlayEl.style.display = 'none';

    this.el.parentElement.insertBefore(
      this.overlayEl, this.el.nextSibling
    );
    this.overlayEl.appendChild(this.el);
  }

  //create Overlay object,  then register this element to overlayManager
  registerToOverlayManager() {
    let positionStr: string =  this.overlayPosition;

    let overlay = new Ng2Overlay(this.overlayEl, {
      id: this.el.id,
      windowOverlay: this.overlayOf == "window",
      position: positionStr
    });
    //console.log('registering overlay', overlay);
    this.overlayManager.register(overlay);
  }

}