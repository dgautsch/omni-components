customElements.define(
  'modal-dialog',
  class extends HTMLElement {
    get template() {
      return `
      <link rel="stylesheet" href="../src/vanilla/modal/modal.css">
      <div id="modal-container">
        <div class="modal fade" id="modal">
            <div role="alertdialog" aria-modal="true" class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h2 class="modal-title"><slot name="modal-title">Default Title</slot></h2>
                  </div>
                  <div class="modal-body">
                      <slot name="modal-body">Default Body Contebt</slot>
                  </div>
                  <div class="modal-footer">
                      <a-button type="button" class="btn btn-secondary" id="modal-close">Close</a-button>
                      <a-button type="button" class="btn btn-primary">Confirm</a-button>
                  </div>
                </div>
            </div>
        </div>
        <!-- Backdrop -->
        <div class="modal-backdrop"></div>
      </div>

      <!-- Button trigger modal -->
      <a-button type="button" class="btn btn-primary" id="modal-trigger">
        <slot>Open</slot>
      </a-button>
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

    open() {
      const modal = this.shadow.querySelector('#modal');
      modal.dispatchEvent(new Event('modal-open', {bubbles: true, composed: true}));
      this.shadow.querySelector('.modal-backdrop').classList.add('show');
      this.shadow.querySelector('#modal-container').classList.add('modal-open');
    }

    close() {
      const modal = this.shadow.querySelector('#modal');
      modal.dispatchEvent(new Event('modal-close', {bubbles: true, composed: true}));
      this.shadow.querySelector('.modal-backdrop').classList.remove('show');
      this.shadow.querySelector('#modal-container').classList.remove('modal-open');
    }
  }
);
