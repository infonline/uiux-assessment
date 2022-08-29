import { Component, Prop, h, Host } from '@stencil/core';

@Component({
    tag: 'io-button',
    styleUrl: 'io-button.scss',
    shadow: true,
})
export class IoButton {

    /**
     * flag for disabling the button
     */
    @Prop() disabled: boolean;

    /**
     * the type of the button
     */
    @Prop() appearance: string;

    /**
     * the size of the button
     */
    @Prop() size: string = 'default';

    render() {
        return (
            <Host>
                <button disabled={this.disabled} class={`${this.appearance} ${this.size}`}>
                    <slot></slot>
                </button>
            </Host>
        );
    }
}
