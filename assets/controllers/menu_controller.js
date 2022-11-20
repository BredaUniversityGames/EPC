import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = [ "overlay", "menu", "closeButton" ];

    open() {
        console.log('Opening menu...');

        document.body.classList.replace("overflow-y-hidden", "overflow-y-auto");

        this.overlayTarget.classList.replace("opacity-0", "opacity-80");
        this.overlayTarget.classList.replace("pointer-events-none", "pointer-events-auto");

        this.menuTarget.classList.replace("-right-full", "right-0");
        this.menuTarget.classList.replace("md:-right-96", "md:right-0");

        this.closeButtonTarget.classList.replace("opacity-0", "opacity-100");
    }

    close() {
        console.log('Closing menu...');

        document.body.classList.replace("overflow-y-auto", "overflow-y-hidden");

        this.overlayTarget.classList.replace("opacity-80", "opacity-0");
        this.overlayTarget.classList.replace("pointer-events-auto", "pointer-events-none");

        this.menuTarget.classList.replace("right-0", "-right-full");
        this.menuTarget.classList.replace("md:right-0", "md:-right-96");

        this.closeButtonTarget.classList.replace("opacity-100", "opacity-0");
    }
}
