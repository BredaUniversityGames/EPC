import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    hide(event) {
        event.currentTarget.parentElement.parentElement.parentElement.classList.add("hidden");
    }
}
