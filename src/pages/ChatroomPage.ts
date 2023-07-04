import type { IonButton } from '@ionic/core/components/ion-button'
import type { IonTextarea } from '@ionic/core/components/ion-textarea'

export class ChatroomPage extends HTMLElement {
  sendTextarea: IonTextarea
  micButton: IonButton
  sendButton: IonButton
  connectedCallback() {
    this.innerHTML = /* html */ `
	  <ion-header>
      <ion-toolbar>
        <ion-title>Chatroom</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
    </ion-content>
    <ion-footer>
      <ion-item>
        <ion-textarea placeholder="Input message here..." class="send-textarea"></ion-textarea>
        <ion-button slot="end" class="mic-button">
          <ion-icon slot="icon-only" name="mic"></ion-icon>
        </ion-button>
        <ion-button slot="end" class="send-button">
          <ion-icon slot="icon-only" name="paper-plane"></ion-icon>
        </ion-button>
      </ion-item>
    </ion-footer>
`
    this.micButton = this.querySelector('.mic-button')!
    this.sendButton = this.querySelector('.send-button')!
    this.sendTextarea = this.querySelector('.send-textarea')!
    this.sendTextarea.addEventListener('ionInput', this.toggleButtonMode)
    this.toggleButtonMode()
  }
  toggleButtonMode = (event?: any) => {
    console.log(event?.detail.value)
    if (this.sendTextarea.value) {
      this.micButton.hidden = true
      this.sendButton.hidden = false
    } else {
      this.micButton.hidden = false
      this.sendButton.hidden = true
    }
  }
}

customElements.define('chatroom-page', ChatroomPage)
