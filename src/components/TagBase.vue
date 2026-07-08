<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { TagColor, TagSize, TagTone } from './Tag.types'

const props = withDefaults(
  defineProps<{
    as?: string
    label?: string
    size?: TagSize
    color?: TagColor
    tone?: TagTone
    interactive?: boolean
    selected?: boolean
    floating?: boolean
    disabled?: boolean
  }>(),
  {
    as: 'span',
    size: 'tiny',
    color: 'gray',
    tone: 'secondary',
    interactive: false,
    selected: false,
    floating: false,
    disabled: false,
  },
)

const slots = useSlots()

const hasLeading = computed(() => Boolean(slots.leading))
const hasTrailing = computed(() => Boolean(slots.trailing))
const hasControl = computed(() => Boolean(slots.control))

const rootClasses = computed(() => [
  `ufo-tag--${props.size}`,
  `ufo-tag--${props.color}`,
  `ufo-tag--${props.tone}`,
  {
    'ufo-tag--interactive': props.interactive && !props.disabled,
    'ufo-tag--selected': props.selected,
    'ufo-tag--floating': props.floating,
    'ufo-tag--disabled': props.disabled,
  },
])
</script>

<template>
  <component :is="as" class="ufo-tag" :class="rootClasses">
    <slot v-if="hasControl" name="control"></slot>
    <span class="ufo-tag__surface">
      <span v-if="hasLeading" class="ufo-tag__icon ufo-tag__icon--leading" aria-hidden="true">
        <slot name="leading"></slot>
      </span>
      <span class="ufo-tag__content">
        <slot>{{ label }}</slot>
      </span>
      <span v-if="hasTrailing" class="ufo-tag__icon ufo-tag__icon--trailing" aria-hidden="true">
        <slot name="trailing"></slot>
      </span>
    </span>
  </component>
</template>

<style scoped>
.ufo-tag {
  position: relative;
  display: inline-flex;
  width: fit-content;
  max-width: 256px;
  justify-self: start;
  padding: 0;
  color: var(--text-primary);
  font-family: var(--font-family-paragraph);
  font-weight: var(--font-weight-body-paragraph);
  letter-spacing: 0;
  background: transparent;
  border: 0;
  appearance: none;
  text-decoration: none;
  vertical-align: top;
}

.ufo-tag--interactive {
  cursor: pointer;
}

.ufo-tag--disabled {
  cursor: not-allowed;
}

.ufo-tag__surface {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-width: 0;
  border: var(--25) solid transparent;
  border-radius: var(--xl-20px);
  color: var(--text-primary);
  background: var(--background-primary-surface);
  overflow: hidden;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease,
    color 160ms ease;
}

.ufo-tag--tiny {
  font-size: var(--font-sizes-body-small-14px);
  line-height: 130%;
}

.ufo-tag--small {
  font-size: var(--font-sizes-body-small-14px);
  line-height: 130%;
}

.ufo-tag--medium,
.ufo-tag--large {
  font-size: 16px;
  line-height: 140%;
}

.ufo-tag--tiny .ufo-tag__surface {
  min-height: var(--600);
  padding: 0 var(--spaces-semantic-tiny-4px);
}

.ufo-tag--small .ufo-tag__surface {
  min-height: var(--700);
  padding: 0 var(--spaces-semantic-tiny-4px);
}

.ufo-tag--medium .ufo-tag__surface {
  min-height: var(--800);
  padding: 0 var(--spaces-semantic-small-8px);
}

.ufo-tag--large .ufo-tag__surface {
  min-height: var(--900);
  padding: 0 var(--spaces-semantic-small-8px);
}

.ufo-tag__content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: 0 var(--spaces-semantic-tiny-4px);
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ufo-tag__icon {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: currentColor;
}

.ufo-tag--tiny .ufo-tag__icon {
  width: var(--400);
  height: var(--400);
}

.ufo-tag--small .ufo-tag__icon,
.ufo-tag--medium .ufo-tag__icon {
  width: 18px;
  height: 18px;
}

.ufo-tag--large .ufo-tag__icon {
  width: var(--500);
  height: var(--500);
}

.ufo-tag__icon :slotted(svg) {
  width: 100%;
  height: 100%;
}

.ufo-tag--gray .ufo-tag__surface {
  color: var(--text-primary);
  background: var(--background-primary-surface);
  border-color: var(--stroke-border);
}

.ufo-tag--blue .ufo-tag__surface {
  color: var(--text-info);
  background: var(--background-info-light);
  border-color: var(--stroke-border-info);
}

.ufo-tag--purple .ufo-tag__surface {
  color: var(--text-bonus);
  background: var(--background-bonus-light);
  border-color: var(--stroke-border-bonus);
}

.ufo-tag--green .ufo-tag__surface {
  color: var(--text-success);
  background: var(--background-success-light);
  border-color: var(--stroke-border-success);
}

.ufo-tag--red .ufo-tag__surface {
  color: var(--text-error);
  background: var(--background-error-light);
  border-color: var(--stroke-border-error);
}

.ufo-tag--orange .ufo-tag__surface {
  color: var(--text-brand);
  background: var(--background-brand-light);
  border-color: var(--stroke-border-brand);
}

.ufo-tag--yellow .ufo-tag__surface {
  color: var(--text-warning);
  background: var(--background-warning-light);
  border-color: var(--stroke-border-warning);
}

.ufo-tag--secondary.ufo-tag--selected .ufo-tag__surface {
  color: var(--text-primary);
  background: var(--background-primary-surface);
  border-color: var(--stroke-border-dark);
}

.ufo-tag--primary .ufo-tag__surface,
.ufo-tag--primary.ufo-tag--selected.ufo-tag--floating .ufo-tag__surface {
  color: var(--text-primary-inverse);
  background: var(--background-brand-dark);
  border-color: transparent;
}

.ufo-tag--floating .ufo-tag__surface {
  background: var(--background-secondary-surface);
  box-shadow: var(--0) 3px var(--300) var(--0) var(--effects-shadow-plate-floating-shadow);
}

.ufo-tag--selected.ufo-tag--floating .ufo-tag__surface {
  color: var(--text-primary-inverse);
  background: var(--background-brand-dark);
  border-color: transparent;
}

.ufo-tag--interactive:hover .ufo-tag__surface,
.ufo-tag--preview-hover .ufo-tag__surface {
  background: var(--background-neutral-light);
}

.ufo-tag--interactive.ufo-tag--primary:hover .ufo-tag__surface,
.ufo-tag--primary.ufo-tag--preview-hover .ufo-tag__surface,
.ufo-tag--selected.ufo-tag--floating.ufo-tag--preview-hover .ufo-tag__surface {
  background: var(--background-brand-main);
}

.ufo-tag--preview-focus .ufo-tag__surface {
  border-color: var(--stroke-border-dark);
}

.ufo-tag:focus-visible {
  outline: none;
}

.ufo-tag:focus-visible .ufo-tag__surface,
.ufo-tag:focus-within .ufo-tag__surface {
  border-color: var(--stroke-border-dark);
}

.ufo-tag--disabled .ufo-tag__surface {
  color: var(--text-disabled);
  background: var(--background-disabled);
  border-color: transparent;
  box-shadow: none;
}

</style>
