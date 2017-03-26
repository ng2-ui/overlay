import {Component, Type} from '@angular/core'
//noinspection TypeScriptCheckImport
import {NguiOverlayManager} from "@ngui/overlay";

@Component({
  selector: 'my-app',
  templateUrl: 'app.tpl.html'
})
export class AppComponent {
  constructor(public overlayManager: NguiOverlayManager) {}
}
