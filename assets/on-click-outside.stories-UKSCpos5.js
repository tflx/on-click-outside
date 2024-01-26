import{i as u,s as a,x as d}from"./lit-element-UW5JVWpk.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=s=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};var p=Object.defineProperty,h=Object.getOwnPropertyDescriptor,C=(s,e,o,n)=>{for(var t=n>1?void 0:n?h(e,o):e,l=s.length-1,i;l>=0;l--)(i=s[l])&&(t=(n?i(e,o,t):i(t))||t);return n&&t&&p(e,o,t),t};const v="ON_CLICK_OUTSIDE";let r=class extends a{constructor(){super(...arguments),this.handleBodyClick=s=>{const e=this.querySelector("slot")||this.shadowRoot?.querySelector("slot");if(!e)return;const o=e?.assignedElements({flatten:!0})[0];s.composedPath().some(t=>t===o)||this.dispatchEvent(new CustomEvent(v,{bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),document.querySelector("body")?.addEventListener("click",this.handleBodyClick)}disconnectedCallback(){super.disconnectedCallback(),document.querySelector("body")?.removeEventListener("click",this.handleBodyClick)}render(){return d` <slot></slot> `}};r.styles=u`
    :host {
      display: contents;
    }
  `;r=C([m("on-click-outside")],r);const _={title:"on-click-outside",component:"on-click-outside",parameters:{docs:{description:{component:""}}}},c={render:()=>d`
    <div style="height: 100vh;">
      <on-click-outside @ON_CLICK_OUTSIDE="${()=>console.log("You clicked outside me!")}">
        <button>Click outside me</button>
      </on-click-outside>
      <p>See the console »</p>
    </div>
  `};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height: 100vh;">
      <on-click-outside @ON_CLICK_OUTSIDE="\${() => console.log('You clicked outside me!')}">
        <button>Click outside me</button>
      </on-click-outside>
      <p>See the console »</p>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};const b=["Default"];export{c as Default,b as __namedExportsOrder,_ as default};
