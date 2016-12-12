import { Ng2Overlay } from "./ng2-overlay";
export declare class Ng2OverlayManager {
    static overlays: {
        [id: string]: Ng2Overlay;
    };
    register(overlay: Ng2Overlay): void;
    open(arg: string | Ng2Overlay, event: Event): void;
    close(arg: string | Ng2Overlay): void;
}
