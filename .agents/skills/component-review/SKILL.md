---
name: component-review
description: Use this skill to review a design system component implementation before merge. It checks API quality, component architecture, token usage, Storybook coverage, tests, accessibility, exports, and consistency with existing components. Prefer read-only review unless the user explicitly asks to fix issues.
---

# Component Review Skill

## Goal

Review a component implementation and find issues before merge.

Default mode: read-only review.

Do not edit files unless the user explicitly asks to fix the issues.

## Step 1 — Understand the change

Inspect:

- `AGENTS.md`;
- `TOKENS.md`;
- `.agents/component-ready-checklist.md`;
- changed component files;
- related types;
- styles;
- stories;
- tests;
- exports;
- related components;
- package scripts.

Summarize the intent of the change.

## Step 2 — API review

Check:

- prop names;
- prop types;
- default values;
- controlled or uncontrolled behavior;
- events and callbacks;
- slots and composition;
- public exports;
- overlap with existing components;
- breaking changes;
- boolean prop explosion;
- unnecessary public API.

Flag unclear, redundant, or unstable API decisions.

## Step 3 — Architecture review

Check:

- consistency with existing components;
- file structure;
- import and export patterns;
- internal helper placement;
- separation of behavior and styling;
- state management;
- dependency usage;
- bundle risk.

Flag new patterns that are not justified.

## Step 4 — Token and styling review

Check:

- raw color values;
- raw spacing values;
- raw typography values;
- raw radius values;
- raw shadow values;
- duplicated token values;
- inconsistent hover, pressed, focus, and disabled states;
- missing focus-visible state;
- visual regressions against existing components.

## Step 5 — Storybook review

Check for stories:

- Default
- Sizes
- Variants
- States
- Disabled
- Interactive
- Long content
- With icon / without icon
- Composition or slots
- Accessibility notes

Check controls:

- useful args;
- no internal props exposed;
- realistic examples;
- no duplicated stories.

## Step 6 — Test review

Check tests for:

- rendering;
- variants;
- sizes;
- states;
- callbacks;
- keyboard behavior;
- disabled behavior;
- selected or checked behavior;
- focus behavior;
- edge cases.

Flag missing tests and brittle tests.

## Step 7 — Accessibility review

Check:

- semantic element;
- keyboard interaction;
- focus-visible;
- accessible name;
- ARIA attributes;
- disabled behavior;
- screen reader behavior;
- contrast risks;
- pointer and keyboard parity.

## Step 8 — Output format

Return findings grouped by severity:

# Component review: ComponentName

## Critical

## Major

## Minor

## Suggestions

## Missing tests

## Missing stories

## Accessibility risks

## Recommended fixes

## Validation commands to run

For every issue, include:

- file reference;
- problem;
- why it matters;
- suggested fix.

Do not edit files unless explicitly asked.