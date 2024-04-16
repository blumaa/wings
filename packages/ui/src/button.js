import { LitElement, html, css } from 'lit';

export class ExampleButton extends LitElement {
  static properties = {
    variant: { type: String }
  };

  constructor() {
    super();
    this.variant = 'default';
  }

  static styles = css`
    button {
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover, button:focus {
      opacity: 0.8;
    }

    button.default {
      background-color: #4CAF50;
    }

    button.primary {
      background-color: #008CBA;
    }

    button.secondary {
      background-color: #f44336;
    }
  `;

  render() {
    return html`
      <button class="${this.variant}" @click="${this._onClick}">Click me</button>
    `;
  }

  _onClick() {
    console.log('Button clicked!');
  }
}

customElements.define('example-button', ExampleButton);

