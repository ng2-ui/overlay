import {Component, Type} from '@angular/core'
//noinspection TypeScriptCheckImport
import {OverlayManager} from "ng2-overlay";

@Component({
  selector: 'my-app',
  templateUrl: 'app.tpl.html'
})
export class AppComponent {
  constructor(public overlayManager: OverlayManager) {}
}
