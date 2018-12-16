import {bind,wire} from 'hyperhtml';
// import delegate from 'dom-delegate';
import {getHomeTemplate} from './templates/bc-view__home-template';
import {getAboutTemplate} from './templates/bc-view__about-template';

import {getAboutData} from '../config/bc-view__about-config';

import './_bc-view.scss';

class BcView extends HTMLElement {
  static get observedAttributes() { return ['type']; }

    connectedCallback() {
        this.connected = true;
        this.html = bind(this);
        this.render(this.html);
        // this.addEventListeners();
    }

    // disconnectedCallback() {
    //     this.delegateEl.off();
    // }

    // addEventListeners() {
    //     this.delegateEl = delegate(this);
    //     this.delegateEl.on('click', '.bc-header__link', e => {
    //         console.log('e: ', e);
    //     });
    // }

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
        let view = '';
        if (this.type === 'home') {
            view = getHomeTemplate(html);
        } else if (this.type === 'about') {
            const aboutData = getAboutData();
            aboutData.html = html;
            aboutData.wire = wire;
            view = getAboutTemplate(aboutData);
        }

        return view;
    }
}

customElements.define('bc-view', BcView);
