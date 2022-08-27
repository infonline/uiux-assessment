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
    @Prop() appearence: string;

    /**
     * the size of the button
     */
    @Prop() size: string = 'default';

    render() {
        return (
            <button class={`${this.appearence} ${this.size}`}>
                <slot></slot>
            </button>
        );
    }
}
