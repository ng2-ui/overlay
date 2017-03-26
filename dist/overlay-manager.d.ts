import { NguiOverlay } from "./overlay";
export declare class NguiOverlayManager {
    static overlays: {
        [id: string]: NguiOverlay;
    };
    register(overlay: NguiOverlay): void;
    open(arg: string | NguiOverlay, event: Event): void;
    close(arg: string | NguiOverlay): void;
}
