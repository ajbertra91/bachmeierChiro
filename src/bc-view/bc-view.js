import {bind,wire} from 'hyperhtml';
import {camelize} from '../common/utils';
// import delegate from 'dom-delegate';
import {getHomeTemplate} from './templates/bc-view__home-template';
import {getServicesTemplate} from './templates/bc-view__services-template';
import {getAboutTemplate} from './templates/bc-view__about-template';

import {getServicesData} from '../config/bc-view__services-config';
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
            this[camelize(attr)] = newValue;
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
        } else if (this.type === 'services') {
            const servicesData = getServicesData();
            servicesData.html = html;
            servicesData.wire = wire;
            view = getServicesTemplate(servicesData);
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
