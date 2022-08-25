import { html, css, LitElement } from 'lit';

export class IoInput extends LitElement {

    static styles = css`
    button {
       border: none;
       border-radius: 4px;
       padding: 8px;
       cursor: pointer;
    }
    
  `;

    render() {
        return html`
            <input/>
        `;
    }
}
