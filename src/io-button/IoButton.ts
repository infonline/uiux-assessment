import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class IoButton extends LitElement {

    @property()
    type: string = 'primary';

    static styles = css`
    button {
       border: none;
       border-radius: 4px;
       padding: 8px;
       cursor: pointer;
    }
    
    .primary {
        background-color: #004E7B;
        color: white;
    }

    .secondary {
        background-color: #ececec;
        color: black;
    }

    .danger {
        background-color: #e50000;
        color: white;
    }

    .warning {
        background-color: #bdc300;
        color: black;
    }

    .outline {
        background-color: transparent;
        color: black;
        border: 1px solid #8a8a8a;
    }
  `;

    render() {
        return html`
            <button class="${this.type}">
                <slot></slot>
            </button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "io-button": IoButton;
    }
}
