import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'io-button',
    styleUrl: 'io-button.css',
    shadow: true,
})
export class IoButton {

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
            <button class={`${this.appearance} ${this.size}`}>
                <slot></slot>
            </button>
        );
    }
}
