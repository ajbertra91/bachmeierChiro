import {bind,wire} from 'hyperhtml';
import delegate from 'dom-delegate';

import './_bc-header.scss';

class BcHeader extends HTMLElement {
  static get observedAttributes() { return ['links']; }

    connectedCallback() {
        this.connected = true;
        this.html = bind(this);
        this.normalizeData();
        this.render(this.html);
        this.addEventListeners();
    }

    disconnectedCallback() {
        this.delegateEl.off();
    }

    addEventListeners() {
        this.delegateEl = delegate(this);
        this.delegateEl.on('click', '.bc-header__link', e => {
            console.log('e: ', e);
        });
    }

    normalizeData() {
        this.links = JSON.parse(this.links) || [];
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

    toggleMobileNav() {
        const mobileNavLinksEl = this.querySelector('.bc-header__nav-links');
        const mobileNavIconEl = this.querySelector('.bc-header__mobile-nav-icon');
        if (mobileNavLinksEl.classList.contains('is-active')) {
            mobileNavLinksEl.classList.remove('is-active');
            mobileNavIconEl.classList.remove('is-active');
        } else {
            mobileNavLinksEl.classList.add('is-active');
            mobileNavIconEl.classList.add('is-active');
        }
    }

    render(html) {
        if (!this.connected) { return '';}
        return html`
            <nav class="bc-header__container top-bar">
                <ul class="bc-header__title-link">
                    <li class="bc-header__mobile-nav-icon" onclick=${this.toggleMobileNav.bind(this)}>
                        <i class="fa fa-bars"></i>
                    </li>
                    <li class="bc-header__name">
                        <h1>
                            <a href="#home" class="logo-container">
                                <i class="logo--image"></i>
                                <span class="logo--text"><span>B</span>achmeier <em><span>C</span>hiropractic</em></span>
                            </a>
                        </h1>
                    </li>
                </ul>
                <ul class="bc-header__nav-links">
                    ${this.links.map(link => wire(link)`
                        <li><a href=${link.url} class=${link.class}>${link.label}</a></li>
                    `)}
                </ul>
            </nav>
        `;
    }
}

customElements.define('bc-header', BcHeader);
