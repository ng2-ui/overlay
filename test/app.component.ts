import {Component, Type} from '@angular/core'
import { OverlayDirective, OverlayManager } from 'ng2-overlay';

@Component({
  selector: 'my-app',
  templateUrl: 'app.tpl.html',
  providers: [OverlayManager],
  directives: [<Type>OverlayDirective]
})
export class AppComponent {
  constructor(public overlayManager: OverlayManager) {}
}
