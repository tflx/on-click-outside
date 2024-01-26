import { html, LitElement, css } from 'lit'
import { customElement } from 'lit/decorators.js'

export const ON_CLICK_OUTSIDE = 'ON_CLICK_OUTSIDE'

@customElement('on-click-outside')
export class OnClickOutside extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
  `  

  connectedCallback(): void {
    super.connectedCallback()
    document.querySelector('body')?.addEventListener('click', this.handleBodyClick)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    document.querySelector('body')?.removeEventListener('click', this.handleBodyClick)
  }

  handleBodyClick = (e: Event) => {
    const slot = this.querySelector('slot') || this.shadowRoot?.querySelector('slot')
    if (!slot) return

    const slotEl = slot?.assignedElements({ flatten: true })[0]

    const hasSlot = e.composedPath().some(el => el === slotEl)

    // if (e.target != slotEl) {
    if (!hasSlot) {      
      this.dispatchEvent(new CustomEvent(ON_CLICK_OUTSIDE, { bubbles: true, composed: true }))
    }
  }

  render() {
    return html` <slot></slot> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'on-click-outside': OnClickOutside
  }
}
