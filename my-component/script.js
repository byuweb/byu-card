    'use strict';
    const util = require('byu-web-component-utils');
    const template = require('./template.html');

    class ByuCard extends HTMLElement {

        constructor() {
            super();
            this.attachShadow({mode: 'open'});
        }

    }

    connectedCallback() {
        util.applyTemplate(this, 'byu-card', template, () => {
            // this._addSomeEventListenersOrSomething();
        });
    }

    // this.shadowRoot.querySelector('#myId');

    window.customElements.define('byu-card', ByuCard);
    window.ByuCard = ByuCard;