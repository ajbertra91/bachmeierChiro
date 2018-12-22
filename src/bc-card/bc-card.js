import {bind,wire} from 'hyperhtml';
import {camelize} from '../common/utils';
// import delegate from 'dom-delegate';
import {getPersonCardTemplate} from './templates/bc-card__person-template';
import {getServiceCardTemplate} from './templates/bc-card__service-template';

import './_bc-card.scss';

class BcCard extends HTMLElement {
  static get observedAttributes() { return ['type','image-url', 'image-alt', 'name', 'title', 'text', 'social-media']; }

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
        const baseData = {
            html,
            wire,
            type: this.type,
            imageUrl: this.imageUrl,
            imageAlt: this.imageAlt,
            name: this.name
        }
        if (this.type === 'person') {
            const personCardData = {
                ...baseData,
                title: this.title,
                socialMedia: this.socialMedia
            };
            view = getPersonCardTemplate(personCardData);
        } else if (this.type === 'service') {
            const serviceCardData = {
                ...baseData,
                text: this.text
            };
            view = getServiceCardTemplate(serviceCardData);
        }

        return view;
    }
}

customElements.define('bc-card', BcCard);
