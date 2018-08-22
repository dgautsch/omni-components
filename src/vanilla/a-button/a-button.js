class ActionButton extends HTMLElement {
  get template() {
    return `
    <style>
      :host {
        display: inline-block;
        --button-text-color: #FFF;
        --button-border-color: #333333;
        --button-background-color: #666;
        --button-font-size: 18px;
      }
      button {
        color: var(--button-text-color);
        border: 1px solid var(--button-border-color);
        background: var(--button-background-color);
        padding: 1em;
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
      this.addEventListener('click', this.handleClick);
    }
  }

  handleClick() {
    alert('Clicked!');
  }
}
customElements.define('a-button', ActionButton);
