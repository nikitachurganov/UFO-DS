---
name: storybook-docs
description: Use this skill when adding or improving Storybook documentation for a design system component, including CSF stories, Autodocs, MDX documentation, controls, usage guidance, states, accessibility notes, and examples. Do not use it for non-Storybook documentation.
---

# Storybook Docs Skill

## Goal

Create complete, useful, and maintainable Storybook documentation for a design system component.

## Step 1 — Inspect existing Storybook conventions

Before editing:

- read `AGENTS.md`;
- inspect `.storybook/`;
- confirm which Storybook addons are enabled in `.storybook/main.*`;
- find similar component stories;
- inspect metadata format;
- inspect args and controls conventions;
- inspect docs and autodocs usage;
- inspect MDX patterns if present;
- inspect naming of stories and story groups;
- inspect decorators and layout configuration.

Follow existing conventions.
Repository-specific notes for this codebase:

- Storybook uses `storybook@10` with `@storybook/vue3-vite`.
- Docs require `@storybook/addon-docs` to be installed and listed in `.storybook/main.ts`.
- Current stories are CSF3 in `src/components/*.stories.ts` using `Meta` and `StoryObj`.
- The project currently does not use MDX files for component docs.
- Shared story layout commonly uses the `tag-story-page` decorator wrapper.

## Step 2 — Define documentation scope

For the component, document:

- purpose;
- when to use;
- when not to use;
- related components;
- anatomy;
- variants;
- sizes;
- states;
- behavior;
- accessibility;
- content guidelines;
- edge cases.

## Step 3 — Required stories

Add or update these stories when applicable:

- Default
- Sizes
- Variants
- States
- Disabled
- Interactive
- WithIcon
- WithoutIcon
- LongContent
- CustomContent or SlotUsage
- Accessibility
- Playground, if the repository uses it

Do not create stories that duplicate each other.

## Step 4 — Args and controls

Configure controls so the component can be tested interactively.

Rules:

- Use realistic default args.
- Hide internal-only props from controls.
- Use select or radio controls for finite variants.
- Use boolean controls for true boolean props.
- Use text controls for labels and simple content.
- Avoid exposing implementation details.

## Step 5 — Documentation content

For simple components, use Autodocs with clear stories.

For this repository, prefer:

- `tags: ['autodocs']`;
- `component: ComponentName` in the default meta export;
- `parameters.docs.description.component` for narrative docs text;
- story examples and controls instead of custom docs-page rendering when possible.

Do not use `parameters.docs.page` with a plain Vue component or options object in this repository. In the current setup this can cause runtime Docs failures such as `docsParameter.renderer is not a function`.

For complex components, add MDX or a richer docs page with:

# ComponentName

## Overview

## When to use

## When not to use

## Anatomy

## Variants

## Sizes

## States

## Accessibility

## Content guidelines

## Related components

## Step 6 — Accessibility notes

Document:

- semantic role;
- keyboard interaction;
- focus behavior;
- ARIA state;
- disabled behavior;
- screen reader expectations;
- usage constraints.

## Step 7 — Interaction examples

For interactive components, add story examples that demonstrate:

- click behavior;
- keyboard behavior;
- selected or checked state;
- controlled usage;
- disabled behavior;
- navigation behavior when applicable.

Use play functions only if the repository already uses them or if Storybook testing is configured.

## Step 8 — Validate

Run available Storybook-related commands:

- Storybook build;
- Storybook tests;
- unit tests if stories import tested utilities;
- lint;
- typecheck.

Do not invent missing commands.

Repository-specific validation order:

- run `npm run typecheck`;
- run `npm run build-storybook`;
- if Docs are blank or crash, inspect the browser console for missing `@storybook/addon-docs` or incompatible `parameters.docs.*` usage before rewriting stories.

## Final response

Return:

- docs files changed;
- stories added or updated;
- controls configured;
- accessibility notes added;
- validation commands and results;
- missing documentation risks.
