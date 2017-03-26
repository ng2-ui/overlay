import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { NguiOverlayManager } from './overlay-manager';
import { NguiOverlayDirective } from './overlay.directive';

export {
  NguiOverlayManager
};

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [NguiOverlayDirective],
  providers: [ NguiOverlayManager ],
  exports: [ NguiOverlayDirective  ]
})
export class NguiOverlayModule {};
