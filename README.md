# ng2-overlay
General Solution For Angular2 Overlay Elements

## Install

1. install ng2-overlay

        $ npm install ng2-overlay

2. add `map` and `packages` to your `systemjs.config.js`

        map['datetime-picker'] = 'node_modules/ng2-overlay';
        packages['datetime-picker'] = { main: 'dist/index.js', defaultExtension: 'js' 

## Usage it in your code

1. import and add directive in your component

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


2. You are ready. use it in your template

        <div id="window-loading" jui-overlay-of="window">
          Loading...
        </div>
        <button (click)="overlayManager.open('window-loading')">Show Loading For Window</button>


## attributes
  [jui-overlay], [jui-overlay-of], [jui-overlay-position]

  * jui-overlay, Display inside overylay center-center positioned
  * jui-overlay-of="window", Display window overlay
  * jui-overlay-position="VERTICAL HORIZONTAL outside"
     e.g.,   
     `jui-overlay-position="center center"` for loading sign  
     `jui-overlay-position="top center outside"` for tooltip  

     * VERTICAL positions: top,  middle, or bottom
     * HORIZONTAL positions: left,  center, or right
     * `outside` to display overlay outside of the container

