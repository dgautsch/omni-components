customElements.define(
  "modal-dialog",
  class extends HTMLElement {
    get template() {
        return `
        <link rel="stylesheet" href="./components/modal/modal.css">
        <div class="modal-backdrop no-scroll active">
            <div tabindex="0"></div>
            <div id="alert_modal" role="alertdialog" aria-modal="true" aria-labelledby="modal_label" aria-describedby="modal_desc"
                class="default_modal">
                <h2 id="modal_label" class="modal_label">Title</h2>
                <div id="modal_desc" class="modal_desc">
                    <p>Content</p>
                </div>
                <div class="modal_form_actions">
                    <button type="button">Close</button>
                    <button type="button">Confirm</button>
                </div>
            </div>
            <div tabindex="0"></div>
        </div>`
    }
    constructor() {
      super();
      const template = document.createElement('template');
      const shadow = this.attachShadow({ mode: "open" });
      template.innerHTML = this.template;
      shadow.appendChild(template.content.cloneNode(true));
    }
  }
);
