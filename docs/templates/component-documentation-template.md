You are working in the current local project. Do not use context from unrelated projects. Work only with the current repository structure, existing Storybook setup, existing components, and existing documentation conventions.

Goal: create a reusable component documentation template file inside the project, then use it as the source of truth for documenting the Tag component.

Problem:
Component documentation must have a consistent structure across the design system. We need a separate template file in the repository so that future component documentation can reference it and follow the same style, order, and level of detail.

Tasks:

1. Analyze the current project structure:

   * Storybook configuration
   * existing documentation files
   * existing component stories
   * existing docs folders
   * existing conventions for Markdown, MDX, CSF, and Storybook Docs

2. Create a reusable documentation template file.
   Prefer one of these locations depending on the current project structure:

   * `docs/templates/component-documentation-template.md`
   * `docs/component-documentation-template.md`
   * `.storybook/docs/component-documentation-template.md`

   Choose the location that best fits the existing repository structure.

3. The template file must define the required structure for every component documentation page.

Required sections:

## 1. Overview

Explain:

* what the component is
* what it is used for
* what problem it solves
* when to use it
* when not to use it
* basic usage principles

## 2. Variants

Document:

* all implemented variants
* purpose of each variant
* usage rules for each variant
* visual examples required in Storybook

Do not invent variants that are not implemented.

## 3. States

Document:

* all supported states from the actual implementation
* default
* hover
* active/pressed
* focus
* disabled
* selected
* error if supported
* loading if supported

Do not document states that the component does not support.

## 4. Accessibility

Document:

* whether the component is static or interactive
* keyboard behavior
* focus behavior
* ARIA roles and attributes
* accessible name
* screen reader expectations
* correct semantics for button/link/checkbox-like behavior

This section can be marked as optional only for purely static or decorative components.

## 5. Anatomy

Document:

* component container
* label/text
* leading icon
* trailing icon
* action icon
* selection indicator
* custom slot/content area
* any other real internal parts

The anatomy must reflect the real component structure.

## 6. Specification

Document:

* sizes
* height
* padding
* gap
* border radius
* typography
* icon size
* color tokens
* background tokens
* border tokens
* min/max width
* truncation rules
* spacing rules
* interaction tokens if available

Prefer existing design tokens, CSS variables, or project constants. Do not hardcode values if tokens already exist.

## 7. Light and Dark modes

Document:

* how the component behaves in light mode
* how the component behaves in dark mode
* which tokens change between modes
* contrast requirements
* readable text/icon/border/background combinations

Do not implement a new theme system unless the project already has theme infrastructure.

## 8. Props / API

Document:

* real public props
* prop types
* default values
* required/optional props
* usage notes
* deprecated props if any

Do not add fake props.

## 9. Examples

Document required Storybook examples:

* default
* variants
* sizes
* states
* with icon
* with long text
* interactive examples if applicable
* light mode
* dark mode if supported

4. The template must include:

   * clear headings
   * short guidance for what each section should contain
   * placeholders that future documentation authors can fill in
   * a checklist for documentation completeness
   * rules for what not to do

5. Add a short reference to this template in the appropriate project place if it exists:

   * `README.md`
   * `AGENTS.md`
   * Storybook docs README
   * docs index file

   The reference should say that all component documentation must follow the component documentation template.

6. Apply this template to the Tag component documentation.
   First analyze the actual Tag implementation:

   * source files
   * props/types
   * styles
   * variants
   * states
   * existing stories
   * existing docs

7. Update or create Tag documentation using the template structure.
   Depending on the project convention, use:

   * MDX documentation file
   * CSF Autodocs with `parameters.docs`
   * existing docs format if the project already has one

8. The Tag documentation must include these sections:

   * Overview
   * Variants
   * States
   * Accessibility
   * Anatomy
   * Specification
   * Light and Dark modes
   * Props / API
   * Examples

9. Add a short internal comment or visible note in the Tag documentation source that it follows the shared template:
   `Based on docs/templates/component-documentation-template.md`

10. Ensure the Storybook Docs page is not empty.
    Check:

* `tags: ['autodocs']` if using Autodocs
* MDX `<Meta of={...} />` if using MDX
* Storybook `stories` glob includes the docs file
* docs addon is enabled
* the page renders actual content

11. Run available checks:

* typecheck
* lint
* Storybook build
* tests if available

12. Final report:

* where the template file was created
* why this location was chosen
* which files were changed
* how the Tag documentation now follows the template
* which Storybook examples were added or updated
* which commands were run
* which checks passed
* what still needs manual review in the browser

Important rules:

* Diagnose existing conventions before creating new files.
* Do not create duplicate documentation systems.
* Do not invent component behavior.
* Do not add fake variants, fake states, or fake props.
* Do not rewrite component implementation unless required for documentation to work.
* Keep the solution minimal, consistent, and reusable.
* The template must be generic enough for future components, but the Tag documentation must be specific and based on the actual implementation.
