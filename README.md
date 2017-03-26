# Angular(2+) Overlay
General Solution For Angular2 Overlay Elements

<a href="https://rawgit.com/ng2-ui/overlay/master/app/index.html">
  <img src="http://i.imgur.com/0qcxg8X.png" width="50% border="1" />
</a>

## Install

1. install overlay

        $ npm install overlay

2. add `map` and `packages` to your `systemjs.config.js`

        map['@ngui/overlay'] = 'node_modules/@ngui/overlay/dist/overlay.umd.js';

3. import NguiOverlayModule to your AppModule
        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { CommonModule  } from '@angular/common';
        import { AppComponent } from './app.component';
        import { NguiOverlayModule } from '@ngui/overlay';
        
        @NgModule({
          imports: [CommonModule, FormsModule, NguiOverlayModule],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.
  
## Usage it in your code
 You are ready. use it in your template

        <div id="window-loading" ngui-overlay-of="window">
          Loading...
        </div>
        <button (click)="overlayManager.open('window-loading')">Show Loading For Window</button>

## **ng2-ui** welcomes new members and contributors

This module is only improved and maintained by contributors like you.

As a contributor, it's NOT required to be skilled in Javascript nor Angular2. 
You are only to be open-minded and interested in helping others.
As a contributor, you do following;

  * Updating README.md
  * Improving code comments
  * Answering issues and building FAQ
  * Documentation
  * Translation

In result of your active contribution, you will be listed as a core contributor
on https://ng2-ui.github.io, and a member of ng2-ui too.

If you are interested in becoming a contributor and/or a member of ng-ui,
please send me email to `allenhwkim AT gmail.com` with your github id. 



## attributes
  [ngui-overlay], [ngui-overlay-of], [ngui-overlay-position]

  * ngui-overlay, Display inside overylay center-center positioned
  * ngui-overlay-of="window", Display window overlay
  * ngui-overlay-position="VERTICAL HORIZONTAL outside"
     e.g.,   
     `ngui-overlay-position="center center"` for loading sign  
     `ngui-overlay-position="top center outside"` for tooltip  

     * VERTICAL positions: top,  middle, or bottom
     * HORIZONTAL positions: left,  center, or right
     * `outside` to display overlay outside of the container

