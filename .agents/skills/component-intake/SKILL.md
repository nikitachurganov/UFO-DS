---
name: component-intake
description: Use this skill before implementing a new design system component or significantly changing an existing component. It turns a rough component request into a clear component brief, API proposal, Storybook plan, accessibility requirements, test plan, and acceptance criteria.
---

# Component Intake Skill

## Goal

Create a clear implementation brief before writing code.

Use this skill when the user asks to:

- create a new component;
- redesign a component API;
- split one component into several components;
- merge or compare similar components;
- document expected behavior before implementation;
- prepare a component for Storybook.

Do not start implementation yet.

## Step 1 — Inspect project context

Inspect:

- `AGENTS.md`;
- `TOKENS.md`;
- `.agents/component-spec-template.md`;
- `.agents/component-ready-checklist.md`;
- existing components with similar purpose;
- existing Storybook stories;
- existing tests;
- existing token usage;
- existing naming conventions;
- public exports;
- documentation patterns.

Return file references when possible.

## Step 2 — Identify related components

For the requested component, list:

- directly related components;
- components with overlapping behavior;
- components with similar visual form;
- components that should not be duplicated.

Explain the difference between the requested component and related components.

If the requested component overlaps with an existing component, explicitly define:

- what remains in the existing component;
- what belongs to the new component;
- what is out of scope.

## Step 3 — Define component brief

Create this structure:

# Component brief: ComponentName

## Purpose

Describe what the component is for.

## Related components

List related components and explain differences.

## Non-goals

Describe what this component should not do.

## Anatomy

Describe internal parts of the component.

## Behavior modes

Describe behavior modes, for example read-only, action, link, selection, dismissable.

## Variants

Describe visual variants.

## Sizes

Describe available sizes.

## States

Describe states:

- default;
- hover;
- active or pressed;
- focus-visible;
- disabled;
- selected or checked;
- loading, if applicable;
- invalid or error, if applicable.

## Props

Define proposed props.

For each prop include:

- name;
- type;
- default value;
- required or optional;
- description;
- behavior mode where it applies.

## Events / callbacks

Define events and callbacks.

## Slots / composition

Define slots or composition points.

## Token usage

List required token groups:

- background;
- surface;
- text;
- icon;
- stroke;
- spacing;
- radius;
- typography;
- focus ring.

## Accessibility requirements

Define:

- semantic element;
- keyboard behavior;
- focus behavior;
- ARIA requirements;
- screen reader name;
- disabled behavior.

## Storybook plan

List required stories.

## Test plan

List required tests.

## Acceptance criteria

List measurable criteria for completion.

## Open questions

List only questions that block implementation.

## Step 4 — API proposal rules

When proposing API:

- Prefer existing naming patterns.
- Do not introduce unnecessary props.
- Avoid boolean prop explosion.
- Separate behavior props from visual props.
- Use discriminated unions when modes have incompatible props.
- Prefer native semantics where possible.
- Include controlled behavior when selection or value can be owned by the parent.
- Do not expose internal implementation details.

## Step 5 — Storybook plan

Minimum stories:

- Default
- Sizes
- Variants
- States
- Disabled
- Interactive behavior
- Long content
- With icon / without icon, if applicable
- Composition or slot usage, if applicable
- Accessibility example, if applicable

For each story, describe what it proves.

## Step 6 — Test plan

Define tests for:

- render;
- props;
- events or callbacks;
- keyboard behavior;
- disabled behavior;
- selected or checked behavior;
- focus behavior;
- edge cases.

## Step 7 — Acceptance criteria

Acceptance criteria must be concrete and testable.

Example criteria:

- Component uses existing typography, spacing, radius, color, and focus tokens.
- Component exports public props and types.
- Storybook includes Default, Sizes, Variants, States, and Interactive stories.
- Keyboard behavior matches the accessibility section.
- Relevant validation commands pass.

## Output format

Return the component brief in markdown.

Do not edit files unless the user explicitly asks to proceed with implementation.