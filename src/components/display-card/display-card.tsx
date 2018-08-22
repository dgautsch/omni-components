import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'display-card',
  styleUrl: 'display-card.scss'
})
export class DisplayCard {

  // Indicate that name should be a public property on the component
  @Prop() cardtitle: string;
  @Prop() cardbody: string;

  render() {
    return (
      <div class="display-card">
        <h3>{this.cardtitle}</h3>
        <p>
          {this.cardbody}
        </p>
      </div>
    );
  }
}