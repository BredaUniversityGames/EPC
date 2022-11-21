import {Controller} from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ["sun", "moon", "logo"];
    logoDarkMode = "/images/branding/logo_white.webp";
    logoLightMode = "/images/branding/logo_black.webp";

    connect() {
        if (localStorage.color_theme === 'dark' || (!('color_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.enableDarkMode();
        } else {
            this.enableLightMode();
        }
    }

    enableDarkMode() {
        localStorage.color_theme = 'dark';
        document.documentElement.classList.add('dark');
        this.moonTarget.classList.add('hidden');
        this.sunTarget.classList.remove('hidden');
        this.logoTarget.src = this.logoDarkMode;
    }

    enableLightMode() {
        localStorage.color_theme = 'light';
        document.documentElement.classList.remove('dark');
        this.moonTarget.classList.remove('hidden');
        this.sunTarget.classList.add('hidden');
        this.logoTarget.src = this.logoLightMode;
    }
}
