customElements.define(
  "modal-dialog",
  class extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      const element = document.currentScript.ownerDocument.getElementById(
        "modal-dialog"
      ).content;
      shadow.appendChild(element);
    }
  }
);
