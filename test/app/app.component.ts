import {Component} from '@angular/core'

import { OverlayDirective, OverlayManager } from 'ng2-overlay';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.tpl.html',
  providers: [OverlayManager],
  directives: [OverlayDirective]
})
export class AppComponent {
  constructor(public overlayManager: OverlayManager) {}
}
