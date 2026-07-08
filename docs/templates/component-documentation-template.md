# Component Documentation Template

Use this structure for every public component documentation page. Document only behavior,
states, variants, props, and accessibility rules that exist in the implementation.

For larger Storybook Docs pages, use `DocsTabs` from `docs/components/DocsTabs` to group
content for different audiences:

```tsx
<DocsTabs
  tabs={[
    { id: 'overview', label: 'Overview', children: <>...</> },
    { id: 'design', label: 'Design', children: <>...</> },
    { id: 'development', label: 'Development', children: <>...</> },
    { id: 'accessibility', label: 'Accessibility', children: <>...</> },
  ]}
/>
```

## Overview

Explain:

- what the component is;
- what problem it solves;
- when to use it;
- when not to use it;
- basic usage principles;
- related components.

## Design

Document:

- implemented variants and their purpose;
- implemented sizes;
- supported visual states;
- anatomy;
- specification details such as height, padding, gap, radius, typography, icon size,
  color tokens, background tokens, border tokens, min/max width, truncation, and spacing;
- light and dark mode behavior when supported.

Do not invent variants, states, or theme behavior.

## Development

Document:

- import path;
- real public props;
- prop types and default values;
- events or callbacks;
- slots or composition points;
- usage examples;
- implementation notes that consumers need to know.

Do not expose internal helpers or implementation details as public API.

## Accessibility

Document:

- whether the component is static or interactive;
- semantic element or ARIA role;
- keyboard behavior;
- focus behavior;
- disabled behavior;
- accessible name requirements;
- ARIA states and attributes;
- screen reader expectations;
- pointer and keyboard parity.

Use native semantics whenever possible.

## Storybook Examples Checklist

- Default or Playground
- Variants
- Sizes
- States
- Disabled, when applicable
- Interactive behavior, when applicable
- With icon / without icon, when applicable
- Long content
- Edge cases
- Composition or slot usage, when applicable
- Light and dark mode examples, when supported

## Completeness Checklist

- Documentation reflects the actual implementation.
- Props and controls match public API.
- Token usage is documented without duplicating raw values.
- Accessibility notes match real semantics and behavior.
- Stories render meaningful examples.
- Long content and edge cases are covered.
- No fake variants, states, props, or ARIA behavior are documented.
