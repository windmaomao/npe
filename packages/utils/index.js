function resolve() {
  console.log('resolve 6')
}

resolve()

import confetti from 'canvas-confetti'
confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true
})({ particleCount: 200, spread: 200 })

import { LitElement, html } from 'lit-element'

class NpeHeader extends LitElement {
  render() {
    return html`<p>Header</p>`
  }
}

window.customElements.define('npe-header', NpeHeader)