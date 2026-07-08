---
name: component-implementation
description: Use this skill to implement a design system component after its behavior, API, states, Storybook stories, accessibility requirements, and acceptance criteria are known. It creates or updates component code, styles, exports, stories, and tests using existing repository conventions.
---

# Component Implementation Skill

## Goal

Implement a design system component in a way that matches the existing codebase.

## Preconditions

Before implementation, make sure you know:

- component purpose;
- related components;
- intended API;
- variants;
- sizes;
- states;
- behavior;
- accessibility requirements;
- Storybook requirements;
- test requirements.

If these are missing, use the `component-intake` skill first.

## Step 1 — Inspect repository conventions

Before editing files, inspect:

- `AGENTS.md`;
- `TOKENS.md`;
- `.agents/component-spec-template.md`;
- `.agents/component-ready-checklist.md`;
- similar components;
- index and barrel export patterns;
- style conventions;
- token usage;
- test patterns;
- Storybook patterns;
- package manager and scripts.

Summarize the implementation plan before changing code.

## Step 2 — Implement the component

Follow existing repository conventions.

Implementation must include, when applicable:

- component file;
- types;
- styles;
- tests;
- stories;
- documentation;
- exports.

Rules:

- Use existing tokens.
- Do not use raw design values when tokens exist.
- Do not add dependencies without approval.
- Do not duplicate existing utilities.
- Do not introduce a new architecture pattern without explaining why.
- Keep the component API minimal.
- Keep visual variants separate from behavior modes.
- Prefer native HTML semantics.
- Avoid excessive internal state.

## Step 3 — Implement states

Cover relevant states:

- default;
- hover;
- active or pressed;
- focus-visible;
- disabled;
- selected or checked;
- error or invalid, if applicable;
- loading, if applicable.

State styling must use tokens or existing state utilities.

## Step 4 — Implement accessibility

For interactive components, verify:

- semantic element;
- keyboard interaction;
- focus-visible;
- aria-label or accessible name;
- ARIA state when applicable;
- disabled behavior;
- screen reader behavior;
- pointer and keyboard parity.

Do not use ARIA to fake behavior that can be achieved with native elements.

## Step 5 — Add Storybook stories

Add or update stories for:

- Default
- Sizes
- Variants
- States
- Disabled
- Interactive behavior
- Long content
- With icon / without icon
- Composition or slots
- Accessibility example, if applicable

Configure controls and args so the component can be inspected interactively.

Use Autodocs for basic API docs.

Use MDX or additional docs sections for complex usage guidance.

## Step 6 — Add tests

Follow existing test conventions.

Add tests for:

- rendering;
- variants;
- sizes;
- states;
- events or callbacks;
- keyboard behavior;
- disabled behavior;
- selected or checked behavior;
- focus behavior;
- edge cases.

If the project uses Storybook play functions or test-runner, add interaction coverage where useful.

## Step 7 — Validate

Inspect `package.json` and run relevant available commands:

- lint;
- typecheck;
- unit tests;
- Storybook build;
- Storybook tests.

Do not invent missing commands.

## Step 8 — Final response

Return:

- summary;
- changed files;
- public API;
- stories added;
- tests added;
- validation commands and results;
- unresolved risks;
- suggested updates to AGENTS.md or skills.