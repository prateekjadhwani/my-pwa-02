import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'green-button',
    styleUrl: 'green-button.css'
})
export class GreenButton {

    @Prop() text: string;

    render() {
        return (
            <button>{this.text}</button>
        );
    }
}
