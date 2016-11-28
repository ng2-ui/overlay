import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { Overlay } from './overlay';
import { OverlayManager } from './overlay-manager';
import { OverlayDirective } from './overlay.directive';

export {
  Overlay,
  OverlayManager,
  OverlayDirective
};

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [OverlayDirective],
  providers: [ OverlayManager ],
  exports: [ OverlayDirective ]
})
export class Ng2OverlayModule {};
