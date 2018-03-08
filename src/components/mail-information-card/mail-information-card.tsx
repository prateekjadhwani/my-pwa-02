import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'mail-information-card',
    styleUrl: 'mail-information-card.css'
})
export class MailInformationCard {

    @Prop() sender: string;
    @Prop() subject: string;
    @Prop() content: string;
    @Prop() isRead: boolean;
    @Prop() id: string;
    @Prop() time: string;
    @Prop() labelColor: string;

    generateRadioID() {
      return 'mail-information-card-' + this.id;
    }

    render() {
        return (
            <div>
              <input type="radio" name="mail-information-card"
                id={this.generateRadioID()} />
              <label htmlFor={this.generateRadioID()}>
                <div class="mail-information-card__sender">
                  <p class={"mail-information-card__sender-name --read-"
                    + this.isRead }>{this.sender}</p>
                  <p class={"mail-information-card__sender-time --label-color-"
                    + this.labelColor}>{this.time}</p>
                </div>
                <p class="mail-information-card__subject">{this.subject}</p>
                <p class="mail-information-card__content">{this.content}</p>
              </label>
            </div>
        );
    }
}
