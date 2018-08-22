(function() {
    class PriceCard extends HTMLElement {
      get template() {
        return `
            <style>
                :host {
                    display: block;
                }
            </style>
            <p>Price Card</p>
            `;
      }
  
      constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = this.template;
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(template.content.cloneNode(true));
      }
    }
    customElements.define('price-card', PriceCard);
  })();
  