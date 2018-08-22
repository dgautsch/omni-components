customElements.define(
  'a-button',
  class extends HTMLElement {
    get template() {
      return `
      <style>
        button {
          color: red;
        }
      </style>
      <button type="button">Hello Button</button>
      `;
    }

    constructor() {
      super();
      const template = document.createElement('template');
      template.innerHTML = this.template;
      this.shadow = this.attachShadow({ mode: 'open' });
      this.shadow.appendChild(template.content.cloneNode(true));

      //register click event
      this.shadow.getElementById('modal-trigger').onclick = this.open.bind(this);
      this.shadow.getElementById('modal-close').onclick = this.close.bind(this);
    }
  }
);
