import {bind} from 'hyperhtml';
import {getLinks} from '../config/bc-header__config';

import '../bc-header/bc-header';
import '../bc-view/bc-view';

import './_bc-app.scss';

class BcApp extends HTMLElement {

    connectedCallback() {
        this.connected = true;
        this.html = bind(this);
        this.setData();
        this.render(this.html);
    }

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
            <bc-view type="home"></bc-view>
            <bc-view type="about"></bc-view>
        `;
    }
}

customElements.define('bc-app', BcApp);
