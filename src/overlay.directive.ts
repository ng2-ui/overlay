import { Directive, ViewContainerRef, Input } from '@angular/core';

import { NguiOverlayManager } from './overlay-manager';
import { NguiOverlay } from './overlay';

@Directive({
  selector: '[ngui-overlay], [ngui-overlay-of], [ngui-overlay-position]',
})
export class NguiOverlayDirective {

  @Input('ngui-overlay-of') overlayOf: string;
  @Input('ngui-overlay-position') overlayPosition: string;

  el: HTMLElement;        // the element this directive is assigned to
  overlayEl: HTMLElement; // <ngui-overlay> in <ngui-overlay>this.el</ngui-overlay>

  constructor(
    public viewContainerRef: ViewContainerRef,
    public overlayManager: NguiOverlayManager
  ) {
    this.el = this.viewContainerRef.element.nativeElement;
  }

  ngAfterViewInit(): void {
    this.wrapItWithOverlayTag();
    this.registerToOverlayManager();
  }

  wrapItWithOverlayTag() {
    //console.log('wrapped overlay directive element with <ngui-overlay>');
    this.overlayEl = document.createElement('ngui-overlay');
    this.overlayEl.style.display = 'none';

    this.el.parentElement.insertBefore(
      this.overlayEl, this.el.nextSibling
    );
    this.overlayEl.appendChild(this.el);
  }

  //create Overlay object,  then register this element to overlayManager
  registerToOverlayManager() {
    let positionStr: string =  this.overlayPosition;

    let overlay = new NguiOverlay(this.overlayEl, {
      id: this.el.id,
      windowOverlay: this.overlayOf == "window",
      position: positionStr
    });
    //console.log('registering overlay', overlay);
    this.overlayManager.register(overlay);
  }

}