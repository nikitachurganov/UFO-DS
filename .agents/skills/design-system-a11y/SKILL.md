---
name: design-system-a11y
description: Use this skill to audit or implement accessibility for design system components, especially interactive components such as buttons, tags, chips, links, inputs, tabs, modals, dropdowns, tooltips, popovers, menus, checkboxes, radios, and selection controls.
---

# Design System Accessibility Skill

## Goal

Ensure design system components are accessible, keyboard usable, and semantically correct.

## Default mode

If used during review, do not edit files unless explicitly asked.

If used during implementation, apply fixes directly and validate them.

## Step 1 — Classify the component

Identify the component type:

- static or read-only;
- action;
- navigation;
- selection;
- form control;
- disclosure;
- overlay;
- feedback or status;
- composite widget.

The accessibility requirements depend on this classification.

## Step 2 — Prefer native semantics

Use native elements whenever possible:

- `button` for actions;
- `a` for navigation;
- `input[type="checkbox"]` for checkbox behavior;
- `input[type="radio"]` for radio behavior;
- `input`, `textarea`, `select` for form controls;
- semantic headings and lists where appropriate.

Use ARIA only when native semantics are insufficient.

## Step 3 — Check keyboard behavior

Verify:

- Tab order;
- Enter behavior;
- Space behavior;
- Arrow key behavior for composite widgets;
- Escape behavior for overlays;
- Home and End behavior when applicable;
- focus trapping for modals;
- focus restoration after closing overlays.

## Step 4 — Check focus

Verify:

- visible focus state;
- focus-visible behavior;
- no focus loss after state changes;
- disabled elements are handled correctly;
- focus order matches visual order.

Focus styles must use existing focus tokens or utilities.

## Step 5 — Check names and states

Verify:

- accessible name;
- accessible description when needed;
- `aria-expanded`;
- `aria-selected`;
- `aria-checked`;
- `aria-disabled`;
- `aria-invalid`;
- `aria-describedby`;
- `aria-controls`;
- `aria-current`;
- `role`, only when needed.

Do not add ARIA attributes that do not match actual behavior.

## Step 6 — Check disabled behavior

Verify:

- disabled components cannot be activated;
- disabled components do not emit action events;
- disabled visual state is clear;
- disabled focus behavior matches semantic expectations;
- links that look disabled do not remain active unless documented.

## Step 7 — Check pointer and keyboard parity

Anything available by mouse should also be available by keyboard.

Interactive behavior must not depend only on:

- hover;
- pointer movement;
- drag;
- color alone.

## Step 8 — Check visual accessibility

Review:

- text contrast;
- icon contrast;
- focus ring contrast;
- disabled contrast;
- state contrast;
- hit target size;
- text truncation;
- long content behavior;
- zoom and responsive behavior.

## Step 9 — Storybook accessibility documentation

Ensure Storybook documents:

- semantic role;
- keyboard interaction;
- focus behavior;
- ARIA states;
- disabled behavior;
- usage warnings;
- examples of correct usage.

## Step 10 — Suggested tests

Suggest or add tests for:

- keyboard interaction;
- focus-visible behavior;
- disabled behavior;
- selected or checked state;
- accessible name;
- ARIA state;
- interaction parity.

## Step 11 — Output format

Return:

# Accessibility review: ComponentName

## Component classification

## Expected semantics

## Keyboard behavior

## Focus behavior

## ARIA requirements

## Issues found

## Required fixes

## Suggested Storybook examples

## Suggested tests

For implementation mode, also return:

- changed files;
- tests added;
- validation results.