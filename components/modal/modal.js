customElements.define(
  'modal-dialog',
  class extends HTMLElement {
    get template() {
      return `
        <link rel="stylesheet" href="./components/modal/modal.css">
        <div class="modal-backdrop no-scroll">
            <div tabindex="0"></div>
            <div id="alert_modal" role="alertdialog" aria-modal="true" aria-labelledby="modal_label" aria-describedby="modal_desc"
                class="default_modal">
                <h2 id="modal_label" class="modal_label">Title</h2>
                <p id="modal_desc" class="modal_desc">
                    Content
                </p>
                <div class="modal_form_actions">
                    <button type="button" class="btn btn-primary">Close</button>
                    <button type="button" class="btn">Confirm</button>
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
    }

    get attrTitle() {
        return this.getAttribute('title');
    }

    get content() {
        return this.innerHTML;
    }

    set setModalLabel(title) {
        this.shadowRoot.getElementById('modal_label').innerHTML = title;
    }

    set setModalDesc(desc) {
        this.shadowRoot.getElementById('modal_desc').innerHTML = desc;
    }

    connectedCallback() {
        this.setModalLabel = this.attrTitle;
        this.setModalDesc = this.content;
    }
  }
);
