# ng2-overlay
General Solution For Angular2 Overlay Elements

<a href="https://rawgit.com/ng2-ui/ng2-overlay/master/app/index.html">
  <img src="http://i.imgur.com/0qcxg8X.png" width="50% border="1" />
</a>

## Install

1. install ng2-overlay

        $ npm install ng2-overlay

2. add `map` and `packages` to your `systemjs.config.js`


        map['ng2-overlay'] = 'node_modules/ng2-overlay/dist';
        packages['ng2-overlay'] = { main: 'ng2-overlay.umd.js', defaultExtension: 'js' }

3. import Ng2OverlayModule to your AppModule
        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { CommonModule  } from '@angular/common';
        import { AppComponent } from './app.component';
        import { Ng2OverlayModule } from 'ng2-overlay';
        
        @NgModule({
          imports: [CommonModule, FormsModule, Ng2OverlayModule],
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

        <div id="window-loading" ng2-overlay-of="window">
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
  [ng2-overlay], [ng2-overlay-of], [ng2-overlay-position]

  * ng2-overlay, Display inside overylay center-center positioned
  * ng2-overlay-of="window", Display window overlay
  * ng2-overlay-position="VERTICAL HORIZONTAL outside"
     e.g.,   
     `ng2-overlay-position="center center"` for loading sign  
     `ng2-overlay-position="top center outside"` for tooltip  

     * VERTICAL positions: top,  middle, or bottom
     * HORIZONTAL positions: left,  center, or right
     * `outside` to display overlay outside of the container

