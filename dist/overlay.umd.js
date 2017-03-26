(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["overlay"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else
		root["overlay"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var overlay_1 = __webpack_require__(1);
	exports.NguiOverlay = overlay_1.NguiOverlay;
	var overlay_manager_1 = __webpack_require__(2);
	exports.NguiOverlayManager = overlay_manager_1.NguiOverlayManager;
	var overlay_directive_1 = __webpack_require__(4);
	exports.NguiOverlayDirective = overlay_directive_1.NguiOverlayDirective;
	var overlay_module_1 = __webpack_require__(5);
	exports.NguiOverlayModule = overlay_module_1.NguiOverlayModule;


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function getDocumentPosition(oElement) {
	    var posX = 0, posY = 0;
	    if (oElement.offsetParent) {
	        for (; oElement; oElement = oElement.offsetParent) {
	            posX += oElement.offsetLeft;
	            posY += oElement.offsetTop;
	        }
	        return { x: posX, y: posY };
	    }
	    else {
	        return { x: oElement['x'], y: oElement['y'] };
	    }
	}
	function getMousePositionInElement(evt, element) {
	    evt = evt || window.event;
	    var posX = 0, posY = 0;
	    var elPos = getDocumentPosition(element);
	    if (evt.pageX || evt.pageY) {
	        posX = evt.pageX;
	        posY = evt.pageY;
	    }
	    else if (evt.clientX || evt.clientY) {
	        posX = evt.clientX +
	            document.body.scrollLeft +
	            document.documentElement.scrollLeft;
	        posY = evt.clientY +
	            document.body.scrollTop +
	            document.documentElement.scrollTop;
	    }
	    return {
	        x: posX - elPos.x,
	        y: posY - elPos.y
	    };
	}
	var NguiOverlay = (function () {
	    function NguiOverlay(el, options) {
	        options = options || {};
	        this.id = options.id;
	        this.type = options.type;
	        if (!this.id) {
	            throw "Invalid overlay id";
	        }
	        this.element = el; // overlay wrapper element with table dsplay
	        this.windowOverlay = options.windowOverlay;
	        this.position = this.getPositionProperty(options.position || 'center center');
	    }
	    NguiOverlay.prototype.positionIt = function (event) {
	        if (this.position.inside) {
	            this.positionItInside(this.position);
	        }
	        else {
	            this.positionItOutside(this.position, event);
	        }
	    };
	    NguiOverlay.prototype.getPositionProperty = function (positionStr) {
	        var position = {}, inside;
	        var _a = positionStr.split(' '), vertical = _a[0], horizontal = _a[1], insideStr = _a[2];
	        horizontal = horizontal || 'center';
	        vertical = vertical || 'center';
	        inside = (insideStr !== 'outside' || this.windowOverlay);
	        position.horizontal = NguiOverlay[horizontal.toUpperCase()];
	        position.vertical = NguiOverlay[vertical.toUpperCase()];
	        position.inside = inside;
	        return position;
	    };
	    NguiOverlay.prototype.positionItInside = function (position) {
	        this.element.style.display = 'flex';
	        //top / left positioning
	        if (this.windowOverlay) {
	            this.element.style.position = 'fixed';
	            //works as blocker
	            Object.assign(this.element.style, {
	                backgroundColor: 'rgba(0,0,0,0.2)',
	                top: '0', left: '0', bottom: '0', right: '0',
	                width: '100%', height: '100%'
	            });
	        }
	        else {
	            //adjust top/left to match to parentElement
	            var parentEl = this.element.parentElement;
	            //works as a blocker
	            Object.assign(this.element.style, {
	                position: 'absolute',
	                // backgroundColor: 'transparent',
	                backgroundColor: 'rgba(0,0,0,0.2)',
	                top: parentEl.offsetTop + 'px',
	                left: parentEl.offsetLeft + 'px',
	                width: parentEl.offsetWidth + 'px',
	                height: parentEl.offsetHeight + 'px'
	            });
	        }
	        ;
	        //horizontal position
	        switch (position.horizontal) {
	            case NguiOverlay.LEFT:
	                this.element.style.justifyContent = 'flex-start';
	                break;
	            case NguiOverlay.CENTER:
	                this.element.style.justifyContent = 'center';
	                break;
	            case NguiOverlay.RIGHT:
	                this.element.style.justifyContent = 'flex-end';
	                break;
	        }
	        //vertical position
	        switch (position.vertical) {
	            case NguiOverlay.LEFT:
	                this.element.style.alignItems = 'flex-start';
	                break;
	            case NguiOverlay.CENTER:
	            case NguiOverlay.MIDDLE:
	                this.element.style.alignItems = 'center';
	                break;
	            case NguiOverlay.RIGHT:
	                this.element.style.alignItems = 'flex-end';
	                break;
	        }
	    };
	    NguiOverlay.prototype.positionItOutside = function (position, event) {
	        //adjust top/left to match to parentElement
	        var parentEl = this.element.parentElement;
	        //works as guide line?
	        Object.assign(this.element.style, {
	            position: 'absolute',
	            pointerEvents: 'none',
	            top: parentEl.offsetTop + 'px',
	            left: parentEl.offsetLeft + 'px',
	            width: parentEl.offsetWidth + 'px',
	            height: parentEl.offsetHeight + 'px'
	        });
	        this.element.style.display = 'block';
	        var elToPosition = (this.element.children[0]);
	        elToPosition.style.position = 'absolute';
	        elToPosition.style.pointerEvents = 'auto';
	        switch (position.vertical) {
	            case NguiOverlay.TOP:
	                elToPosition.style.bottom = this.element.offsetHeight + 'px';
	                break;
	            case NguiOverlay.BOTTOM:
	                elToPosition.style.top = this.element.offsetHeight + 'px';
	                break;
	            case NguiOverlay.LEFT:
	                elToPosition.style.right = this.element.offsetWidth + 'px';
	                break;
	            case NguiOverlay.RIGHT:
	                elToPosition.style.left = this.element.offsetWidth + 'px';
	                break;
	        }
	        switch (position.horizontal) {
	            case NguiOverlay.CENTER:
	                elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth) / 2 + 'px';
	                break;
	            case NguiOverlay.LEFT:
	                elToPosition.style.left = '0';
	                break;
	            case NguiOverlay.RIGHT:
	                elToPosition.style.right = '0';
	                break;
	            case NguiOverlay.TOP:
	                elToPosition.style.top = '0';
	                break;
	            case NguiOverlay.BOTTOM:
	                elToPosition.style.bottom = '0';
	                break;
	            case NguiOverlay.CURSOR:
	                var mousePos = getMousePositionInElement(event, this.element);
	                if ((mousePos.x + elToPosition.offsetWidth) > this.element.offsetWidth) {
	                    elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth - 5) + 'px';
	                }
	                else if (mousePos.x < elToPosition.offsetWidth / 2) {
	                    elToPosition.style.left = '0px';
	                }
	                else {
	                    elToPosition.style.left = mousePos.x - elToPosition.offsetWidth / 2 + 'px';
	                }
	                break;
	        }
	    };
	    return NguiOverlay;
	}());
	NguiOverlay.TOP = 11;
	NguiOverlay.MIDDLE = 12;
	NguiOverlay.BOTTOM = 13;
	NguiOverlay.LEFT = 21;
	NguiOverlay.CENTER = 22;
	NguiOverlay.RIGHT = 23;
	NguiOverlay.CURSOR = 31;
	exports.NguiOverlay = NguiOverlay;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var NguiOverlayManager = NguiOverlayManager_1 = (function () {
	    function NguiOverlayManager() {
	    }
	    NguiOverlayManager.prototype.register = function (overlay) {
	        NguiOverlayManager_1.overlays[overlay.id] = overlay;
	        // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
	    };
	    NguiOverlayManager.prototype.open = function (arg, event) {
	        var overlay = typeof arg === 'string' ? NguiOverlayManager_1.overlays[arg] : arg;
	        if (!overlay.opened) {
	            overlay.positionIt(event);
	            overlay.opened = true;
	        }
	    };
	    NguiOverlayManager.prototype.close = function (arg) {
	        var overlay = typeof arg === 'string' ? NguiOverlayManager_1.overlays[arg] : arg;
	        overlay.element.style.display = 'none';
	        overlay.opened = false;
	    };
	    return NguiOverlayManager;
	}());
	//list of overlay objects
	NguiOverlayManager.overlays = {};
	NguiOverlayManager = NguiOverlayManager_1 = __decorate([
	    core_1.Injectable()
	], NguiOverlayManager);
	exports.NguiOverlayManager = NguiOverlayManager;
	var NguiOverlayManager_1;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var overlay_manager_1 = __webpack_require__(2);
	var overlay_1 = __webpack_require__(1);
	var NguiOverlayDirective = (function () {
	    function NguiOverlayDirective(viewContainerRef, overlayManager) {
	        this.viewContainerRef = viewContainerRef;
	        this.overlayManager = overlayManager;
	        this.el = this.viewContainerRef.element.nativeElement;
	    }
	    NguiOverlayDirective.prototype.ngAfterViewInit = function () {
	        this.wrapItWithOverlayTag();
	        this.registerToOverlayManager();
	    };
	    NguiOverlayDirective.prototype.wrapItWithOverlayTag = function () {
	        //console.log('wrapped overlay directive element with <ngui-overlay>');
	        this.overlayEl = document.createElement('ngui-overlay');
	        this.overlayEl.style.display = 'none';
	        this.el.parentElement.insertBefore(this.overlayEl, this.el.nextSibling);
	        this.overlayEl.appendChild(this.el);
	    };
	    //create Overlay object,  then register this element to overlayManager
	    NguiOverlayDirective.prototype.registerToOverlayManager = function () {
	        var positionStr = this.overlayPosition;
	        var overlay = new overlay_1.NguiOverlay(this.overlayEl, {
	            id: this.el.id,
	            windowOverlay: this.overlayOf == "window",
	            position: positionStr
	        });
	        //console.log('registering overlay', overlay);
	        this.overlayManager.register(overlay);
	    };
	    return NguiOverlayDirective;
	}());
	__decorate([
	    core_1.Input('ngui-overlay-of'),
	    __metadata("design:type", String)
	], NguiOverlayDirective.prototype, "overlayOf", void 0);
	__decorate([
	    core_1.Input('ngui-overlay-position'),
	    __metadata("design:type", String)
	], NguiOverlayDirective.prototype, "overlayPosition", void 0);
	NguiOverlayDirective = __decorate([
	    core_1.Directive({
	        selector: '[ngui-overlay], [ngui-overlay-of], [ngui-overlay-position]',
	    }),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef,
	        overlay_manager_1.NguiOverlayManager])
	], NguiOverlayDirective);
	exports.NguiOverlayDirective = NguiOverlayDirective;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var common_1 = __webpack_require__(7);
	var overlay_manager_1 = __webpack_require__(2);
	exports.NguiOverlayManager = overlay_manager_1.NguiOverlayManager;
	var overlay_directive_1 = __webpack_require__(4);
	var NguiOverlayModule = (function () {
	    function NguiOverlayModule() {
	    }
	    return NguiOverlayModule;
	}());
	NguiOverlayModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule, forms_1.FormsModule],
	        declarations: [overlay_directive_1.NguiOverlayDirective],
	        providers: [overlay_manager_1.NguiOverlayManager],
	        exports: [overlay_directive_1.NguiOverlayDirective]
	    })
	], NguiOverlayModule);
	exports.NguiOverlayModule = NguiOverlayModule;
	;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=overlay.umd.js.map