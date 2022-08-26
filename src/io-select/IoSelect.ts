import { html, css, LitElement } from 'lit';

export class IoSelect extends LitElement {

    static styles = css`
    div {
       border-radius: 4px;
       border: 1px solid black;
       padding: 8px;
       cursor: pointer;
       width: max-content;
    }
  `;

    render() {
        return html`
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "io-select": IoSelect;
    }
}