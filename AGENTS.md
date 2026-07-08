# AGENTS.md

## Project context

This repository contains the UFO design system component library with Storybook documentation.

The main goal is to build reusable, accessible, token-based UI components with consistent APIs, predictable behavior, and complete documentation.

## Repository structure

- `src/` — source code of the design system.
- `.storybook/` — Storybook configuration.
- `.agents/skills/` — Codex skills for repeatable component workflows.
- `.agents/component-spec-template.md` — reusable component specification template.
- `.agents/component-ready-checklist.md` — checklist for deciding whether a component is ready.
- `.agents/tag-component-spec.md` — example or working specification for the Tag component.
- `TOKENS.md` — design token documentation.
- `README.md` — general project documentation.

## Core rules

- Read this file before planning or changing code.
- Inspect existing components before creating a new component or pattern.
- Prefer existing architecture, naming, styling, testing, and Storybook conventions.
- Do not introduce new public API patterns unless existing patterns are insufficient.
- Do not add production dependencies without explicit approval.
- Do not use raw color, spacing, typography, radius, shadow, or z-index values when a design token exists.
- Do not hardcode visual values that should belong to tokens.
- Keep component behavior, state, and visual styling clearly separated.
- Public components must be typed, exported, documented, and covered by Storybook stories.
- Interactive components must support keyboard behavior, focus-visible state, and accessible semantics.
- If a command is missing from `package.json`, report that it is missing instead of inventing one.

## Design system principles

- Components should be composable, predictable, and narrow in responsibility.
- Component APIs should describe behavior and intent, not implementation details.
- Avoid boolean prop explosion.
- Prefer `variant`, `size`, `state`, and behavior-specific props only when they match existing repository patterns.
- Avoid duplicating existing components under a new name.
- If a new component overlaps with an existing component, explain the difference before implementing.
- Prefer slots or composition for custom content when content structure can vary.
- Use controlled patterns for state when the parent application needs to own the state.
- Use uncontrolled or internal state only when it matches existing repository conventions.

## Component workflow

For new components or significant component changes:

1. Use `$component-intake` to prepare or validate the component specification.
2. Use `$component-implementation` to implement the component.
3. Use `$storybook-docs` to add or improve Storybook documentation.
4. Use `$design-system-a11y` to audit accessibility.
5. Use `$component-review` before the component is considered ready.

Before implementing a component, inspect:

- `TOKENS.md`
- `.agents/component-spec-template.md`
- `.agents/component-ready-checklist.md`
- related components in `src/`
- related stories in Storybook
- related tests

## Component decision checklist

Before implementing a component, define:

- Purpose
- Related components
- Non-goals
- Anatomy
- Variants
- Sizes
- States
- Props
- Events or callbacks
- Slots or composition points
- Token usage
- Accessibility requirements
- Storybook coverage
- Test coverage
- Acceptance criteria

## Component structure

Follow the existing repository convention.

If no convention exists, prefer this structure:

    ComponentName/
      ComponentName.tsx
      ComponentName.types.ts
      ComponentName.styles.ts
      ComponentName.stories.tsx
      ComponentName.test.tsx
      index.ts

If the repository uses Vue, SFC, CSS Modules, SCSS, vanilla-extract, styled-components, or another convention, follow the existing convention instead of this example.

## Component documentation

When creating or updating component documentation, always use `docs/templates/component-documentation-template.md` as the required structure. Do not invent variants, states, props, or accessibility behavior that are not implemented in the component.

## Public API rules

- Export public components from the library entry point.
- Export public types when they are useful for consumers.
- Keep internal helpers private unless there is a clear reuse case.
- Use clear prop names that match existing components.
- Do not expose implementation details as props.
- Avoid ambiguous names such as `type` unless the repository already uses them consistently.
- Use `disabled` only for true disabled behavior, not for visual muting.
- Use `as`, `asChild`, or polymorphic patterns only if the repository already supports them.
- Separate visual variants from behavior modes.

## Styling and tokens

- Use existing design tokens for color, background, surface, text, icon, stroke, spacing, radius, typography, shadow, and focus ring.
- Do not create new tokens unless the component cannot be expressed with existing tokens.
- If a new token appears necessary, document:
  - why existing tokens are insufficient;
  - proposed token name;
  - intended semantic role;
  - affected components.
- Do not duplicate token values inside component styles.
- State styles must be explicit:
  - default;
  - hover;
  - active or pressed;
  - focus-visible;
  - disabled;
  - selected or checked, when applicable.

## Accessibility rules

Interactive components must define:

- Correct semantic element or ARIA role.
- Keyboard interaction.
- Focus order.
- Focus-visible styling.
- Disabled behavior.
- Screen reader name.
- ARIA state when applicable.
- Contrast risks.
- Pointer and keyboard parity.

Use native elements whenever possible:

- Use `button` for actions.
- Use `a` for navigation.
- Use `input`, `checkbox`, `radio`, or semantic equivalents when selection behavior is required.
- Do not replace native semantics with ARIA unless there is a clear reason.

## Storybook requirements

Every public component must include Storybook coverage.

Minimum stories:

- Default
- Sizes
- Variants
- States
- Disabled, when applicable
- Interactive behavior, when applicable
- With icon / without icon, when applicable
- Long content
- Edge cases
- Composition or slot usage, when applicable

Documentation should include:

- Purpose
- When to use
- When not to use
- Anatomy
- Props and controls
- States
- Accessibility notes
- Usage examples
- Related components

Use Autodocs for simple components.

Use MDX or a richer docs page when the component requires:

- usage rules;
- anatomy;
- do and don’t guidance;
- accessibility explanation;
- complex examples;
- component-specific design guidance.

## Testing requirements

Add or update tests when component behavior changes.

Prefer tests for:

- Rendering
- Variants
- Sizes
- States
- Events or callbacks
- Keyboard behavior
- Focus behavior
- Disabled behavior
- Selected or checked behavior
- Accessibility-critical behavior
- Storybook play functions for interactive scenarios when the project uses them

Avoid brittle tests that only verify implementation details.

## Validation commands

Before finishing a task, inspect `package.json` and run the relevant available commands.

Common commands to look for:

- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run test:unit`
- `npm run test:storybook`
- `npm run build`
- `npm run build-storybook`
- `npm run storybook:build`

Use the package manager already used by the repository: npm, pnpm, yarn, or bun.

If validation fails, explain:

- which command failed;
- why it failed;
- what was fixed;
- what still remains.

## Subagent usage

Use subagents when the task asks for parallel analysis, review, or exploration.

Recommended subagent roles:

- Component API reviewer
- Storybook documentation reviewer
- Accessibility reviewer
- Test coverage reviewer
- Token usage reviewer

Subagents should usually inspect and report.

They should not edit files unless the user explicitly asks for parallel implementation.

When using subagents:

1. Give each subagent a bounded task.
2. Ask each subagent to return file references.
3. Wait for all subagents.
4. Summarize findings.
5. Let the main agent decide and implement final changes.

## Final response format

At the end of a task, return:

- Summary of what changed
- List of changed files
- Storybook stories added or updated
- Tests added or updated
- Validation commands run and results
- Remaining risks or manual checks
- Suggested updates to AGENTS.md or skills, if a recurring rule was discovered