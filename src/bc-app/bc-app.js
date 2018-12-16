import {bind} from 'hyperhtml';
import {getLinks} from '../config/header-config';

import '../bc-header/bc-header';

import './_bc-app.scss';

class BcApp extends HTMLElement {
  // static get observedAttributes() { return ['type','value','label', 'mask']; }

    connectedCallback() {
        this.connected = true;
        this.html = bind(this);
        this.setData();
        this.render(this.html);
        // this.addEventListeners();
    }

    // disconnectedCallback() {
    //     this.delegateEl.off();
    // }

    setData() {
        this.links = getLinks();
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[attr] = newValue;
            this.render(this.html);
        }
    }

    propertyChangeCallback(prop, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.setAttribute(prop, newValue);
            this.render(this.html);
        }
    }

    render(html) {
        if (!this.connected) { return '';}
        return html`
            <bc-header links=${this.links}></bc-header>
        `;
    }
}

customElements.define('bc-app', BcApp);
