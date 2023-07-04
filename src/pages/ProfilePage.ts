import { selectImage } from '@beenotung/tslib/file'
import { compressMobilePhoto } from '@beenotung/tslib/image'

export class ProfilePage extends HTMLElement {
  previewImage: HTMLImageElement
  connectedCallback() {
    this.innerHTML = /* html */ `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/more"></ion-back-button>
        </ion-buttons>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      todo
      <div class="ion-text-center">
        <ion-button class="camera-button">
          <ion-icon name="camera"></ion-icon>
        </ion-button>
      </div>
      <div class="preview-image-container">
        <img class="preview-image">
      </div>
      <div class="ion-text-center">
        <ion-button mode="md">md button</ion-button>
        <ion-button mode="ios">ios button</ion-button>
        <ion-button>default button</ion-button>
      </div>
    </ion-content>
`
    this.previewImage = this.querySelector('.preview-image')!
    this.querySelector('.camera-button')?.addEventListener(
      'click',
      this.pickImage,
    )
  }

  pickImage = async () => {
    let [file] = await selectImage({ multiple: false })
    if (!file) return
    let dataUrl = await compressMobilePhoto({ image: file })
    this.previewImage.src = dataUrl
  }
}

customElements.define('profile-page', ProfilePage)
