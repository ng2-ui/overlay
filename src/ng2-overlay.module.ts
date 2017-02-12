import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { Ng2OverlayManager } from './ng2-overlay-manager';
import { Ng2OverlayDirective } from './ng2-overlay.directive';

export {
  Ng2OverlayManager
};

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [Ng2OverlayDirective],
  providers: [ Ng2OverlayManager ],
  exports: [ Ng2OverlayDirective  ]
})
export class Ng2OverlayModule {};
