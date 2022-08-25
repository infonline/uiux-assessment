import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class IoInput extends LitElement {

    @property()
    type: string = 'text';

    @property()
    value: string = '';

    static styles = css`
    input {
       border-radius: 4px;
    }
  `;

    render() {
        switch (this.type) {
            case 'password':
                return html`
                    <input type="password" .value="${this.value}">
                `;
            case 'number':
                return html`
                    <input type="number" .value="${this.value}">
                `;
            case 'search':
                return html`
                    <input type="search" .value="${this.value}">
                `;
            case 'email':
                return html`
                    <input type="email" .value="${this.value}">
                `;
            default:
                return html `
                    <input type="text" .value="${this.value}">
                `;
        }
    }
}
