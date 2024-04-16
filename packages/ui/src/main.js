import { LitElement, html } from "lit";
import "./button.js";

/**
 * This is the root.
 */
export class MainUi extends (LitElement) {

  static get is() {
    return "main-ui";
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("connectedCallback");
  }

  render() {
    return html`<example-button variant="primary"></example-button>`;
  }
}

customElements.define(MainUi.is, MainUi);
