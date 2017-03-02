    'use strict';
    const template = require('./template.html');
    class ByuCard extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
		}

    }

    window.customElements.define('byu-card', ByuCard);
    window.ByuCard = ByuCard;

