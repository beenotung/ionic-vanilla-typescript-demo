export class MorePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */ `
	  <ion-header>
      <ion-toolbar>
        <ion-title>More</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item href="/profile">
          <ion-label>Profile</ion-label>
        </ion-item>
        <ion-item href="/chatroom">
          <ion-label>Chatroom</ion-label>
        </ion-item>
        <ion-item href="/privacy">
          <ion-label>Privacy Policy</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
`
  }
}

customElements.define('more-page', MorePage)
