customElements.define(
  'modal-dialog',
  class extends HTMLElement {
    get template() {
      return `
        <div class="modal fade">
            <div tabindex="0"></div>
            <div id="alert_modal" role="alertdialog" aria-modal="true" aria-labelledby="modal_label" aria-describedby="modal_desc"
                class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h2 id="modal_label" class="modal_label"><slot name="modal-label">Title</slot></h2>
                  </div>
                  <div id="modal_desc" class="modal-body">
                      <slot name="modal-description">Content</slot>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Confirm</button>
                  </div>
                </div>
            </div>
            <div tabindex="0"></div>
        </div>`;
    }

    constructor() {
      super();
      const template = document.createElement('template');
      const shadow = this.attachShadow({ mode: 'open' });
      template.innerHTML = this.template;
      shadow.appendChild(template.content.cloneNode(true));
      // this.appendChild(template.content.cloneNode(true));
    }

    getSetting(attr) {
      if (!this.shadowRoot.host.hasAttribute(attr)) {
        throw 'Attribute not set for ' + attr;
      }
      return this.shadowRoot.host.getAttribute(attr);
    }

    get id() {
      return this.getSetting('modalId');
    }

    get title() {
      return this.getSetting('title');
    }

    get content() {
      return this.getSetting('content');
    }

    set setModalTitle(title) {
      this.shadowRoot.getElementById('modal_label').innerHTML = title;
    }

    set setModalContent(desc) {
      this.shadowRoot.getElementById('modal_desc').innerHTML = desc;
    }

    set setModalId(id) {
      this.shadowRoot.querySelector('.modal').setAttribute('id', id);
    }

    connectedCallback() {
      this.setModalTitle = this.title;
      this.setModalContent = this.content;
      this.setModalId = this.id;
    }
  }
);
