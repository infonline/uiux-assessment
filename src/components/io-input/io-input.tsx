import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'io-input',
    styleUrl: 'io-input.css',
    shadow: true,
})
export class IoInput {

    /**
     * the type of the button
     */
     @Prop() type: string;
    
     /**
     * the value of the button
     */
     @Prop() value: string;

    render() {
        return (
            <input type={this.type} value={this.value} />
        );
    }
}
