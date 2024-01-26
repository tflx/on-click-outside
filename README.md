# OnClickOutside Web Component

The `on-click-outside` is a custom web component built using LitElement. It dispatches a custom event `ON_CLICK_OUTSIDE` whenever a click is detected outside the content of this component.

[See demo](https://tflx.github.io/on-click-outside)

## Usage

1. Import the component:

```typescript
import 'on-click-outside.ts';
import { ON_CLICK_OUTSIDE } from './on-click-outside.ts';
```

2. Use the component in your HTML:

```html
<on-click-outside>
  <!-- Your content here -->
</on-click-outside>
```

3. Add an event listener for the `ON_CLICK_OUTSIDE` event:

```typescript
document.querySelector('on-click-outside').addEventListener(ON_CLICK_OUTSIDE, () => {
  console.log('Clicked outside!');
});
```

## Details

The component uses the `connectedCallback` and `disconnectedCallback` lifecycle methods to add and remove a click event listener on the body of the document. When a click event is fired, it checks if the click was outside the content of the component. If it was, it dispatches the `ON_CLICK_OUTSIDE` event.