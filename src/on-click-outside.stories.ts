import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit'
import './index'


const meta: Meta = {
    title: 'on-click-outside',
    component: 'on-click-outside',
    parameters: {
        docs: {
            description: {
                component: '',
            },
        },
    },
}
export default meta;
type Story = StoryObj;
//👇 We create a “template” of how args map to rendering
export const Default: Story = {
  render: () => html`
    <div style="height: 100vh;">
      <on-click-outside @onClickOutside="${() => console.log('You clicked outside me!')}">
        <div style="border: 1px solid black; padding: 1rem;">
          <p>Click outside this element and check the console 👇</p>
        </div>
      </on-click-outside>
    </div>
  `
}
