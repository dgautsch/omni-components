class ActionButton extends HTMLElement {
  get template() {
    return `
    <style>
      :host {
        display: inline-block;
        --button-text-color: #FFF;
        --button-border-color: #333333;
        --button-background-color: #666;
        --button-font-size: 14px;
      }
      button {
        color: var(--button-text-color);
        border: 1px solid var(--button-border-color);
        border-radius: 3px;
        background: var(--button-background-color);
        padding: 0.5em;
        cursor: pointer;
        font-size: var(--button-font-size);
      }
    </style>
    <button type="button"><slot>Click</slot></button>
    `;
  }

  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = this.template;
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(template.content.cloneNode(true));// Setup a click listener on <app-drawer> itself.
    this.handleClick = this.handleClick.bind(this);
  }

  connectedCallback() {
    if (this.hasAttribute('click-action')) {
      this.addEventListener('click', this.handleClick(this.getAttribute('click-action')));
    }
  }

  handleClick(text) {
    const message = text || 'Clicked!';
    return function() {
      alert(message);
    }
  }
}
customElements.define('a-button', ActionButton);
