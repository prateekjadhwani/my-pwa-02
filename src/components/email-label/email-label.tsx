import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'email-label',
    styleUrl: 'email-label.css'
})
export class EmailLabel {

    @Prop() labelName: string;
    @Prop() labelColor: string;

    render() {
        return (
            <div class="email-label__container">
              <p class={"email-label__circle email-label--color-" + this.labelColor}></p>
              <p class="email-label__name">{this.labelName}</p>
            </div>
        );
    }
}
