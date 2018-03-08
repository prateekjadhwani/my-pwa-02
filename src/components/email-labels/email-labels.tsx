import { Component } from '@stencil/core';

@Component({
    tag: 'email-labels',
    styleUrl: 'email-labels.css'
})
export class EmailLabels {

    render() {
        return (
          <div class="email-labels">
            <p class="email-labels__title">Labels</p>
            <email-label label-name="Personal" label-color="ff7b6d"></email-label>
            <email-label label-name="Work" label-color="05bf80"></email-label>
            <email-label label-name="Friends" label-color="c76bef"></email-label>
          </div>
        );
    }
}
