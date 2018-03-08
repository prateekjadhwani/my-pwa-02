import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <div class="app-home__folders">
          <green-button text="New Message"></green-button>
          <email-labels></email-labels>
        </div>
        <div class="app-home__main-information">
          <mail-information-card sender="John Doe"
            subject="Something special for you!!"
            content="Just a few lines from the message.."
            is-read="false"
            id="1"
            time="12:46"
            label-color="ff7b6d"
            has-attachments="false"></mail-information-card>
          <mail-information-card sender="Naruto Uzumaki"
            subject="Money for Ramen?"
            content="I was wondering if you could lend me.."
            is-read="true"
            id="2"
            time="12:46"
            label-color="05bf80"
            has-attachments="false"></mail-information-card>
          <mail-information-card sender="John Doe"
            subject="Something special for you!!"
            content="Just a few lines from the message.."
            is-read="false"
            id="3"
            time="12:46"
            label-color="ff7b6d"
            has-attachments="false"></mail-information-card>
          <mail-information-card sender="Naruto Uzumaki"
            subject="Money for Ramen?"
            content="I was wondering if you could lend me.."
            is-read="true"
            id="4"
            time="12:46"
            label-color="05bf80"
            has-attachments="false"></mail-information-card>
        </div>
        <div class="app-home__main-content">Mail Content</div>
      </div>
    );
  }
}
