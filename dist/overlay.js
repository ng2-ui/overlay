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
//# sourceMappingURL=overlay.js.map