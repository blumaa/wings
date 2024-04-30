import { LitElement, html, css } from 'lit';

export class ExampleButton extends LitElement {
  static properties = {
    variant: { type: String },
    disabled: { type: Boolean } // 1. Add new property
  };

  constructor() {
    super();
    this.variant = 'default';
    this.disabled = false; // 2. Initialize this.disabled
  }

  static styles = css`
    button {
      color: var(--onStrong-1, white);
      padding: var(--space-10, 10px);
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: var(--font-size-10, 10px);
      margin: var(--space-30, 10px) var(--40, 20px);
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button.default:hover, button:focus {
      opacity: 0.8;
      background-color: blue;
      border: 1px solid lightblue;
      border-radius: 5px;
    }

    button.default {
      background-color: lightblue;
      border: 1px solid black;
    }

    button.primary {
      background-color: lightblue;
    }

    button.primary:hover, button:focus {
      opacity: 0.8;
      background-color: blue;
    }

    button.secondary {
      background-color: darkblue;
    }

    button.secondary:hover, button:focus {
      opacity: 0.8;
      background-color: light-blue;
    }

    button.warning {
      background-color: yellow;
    }

    button.warning:hover, button:focus {
      opacity: 0.8;
      background-color: light-yellow;
    }

    button.default:disabled,
    button.primary:disabled,
    button.secondary:disabled { 
      background-color: #808080;
      color: #A9A9A9;
      cursor: not-allowed;
    }
  `;


  render() {
    return html`
      <button class="${this.variant}" @click="${this._onClick}" ?disabled=${this.disabled}>Click me</button>
    `;
  }

  _onClick() {
    console.log('Button clicked!');
  }
}

customElements.define('example-button', ExampleButton);

