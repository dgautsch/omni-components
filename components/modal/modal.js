customElements.define(
  'modal-dialog',
  class extends HTMLElement {
    get template() {
      return `
        <link rel="stylesheet" href="./components/modal/modal.css">
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
      template.innerHTML = this.template;
      this.appendChild(template.content.cloneNode(true));
    }

    get id() {
      return this.getAttribute('modalId');
    }

    get title() {
      return this.getAttribute('title');
    }

    get content() {
      return this.getAttribute('content');
    }

    set setModalTitle(title) {
      document.getElementById('modal_label').innerHTML = title;
    }

    set setModalContent(desc) {
      document.getElementById('modal_desc').innerHTML = desc;
    }

    set setModalId(id) {
      document.querySelector('.modal').setAttribute('id', id);
    }

    connectedCallback() {
      this.setModalTitle = this.title;
      this.setModalContent = this.content;
      this.setModalId = this.id;
    }
  }
);
