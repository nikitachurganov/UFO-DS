<script setup lang="ts">
import { computed } from 'vue'
import type { TagColor, TagSize } from './Tag.types'

const props = withDefaults(
  defineProps<{
    label?: string
    size?: TagSize
    color?: TagColor
    href?: string
    target?: string
    rel?: string
    icon?: boolean
  }>(),
  {
    label: 'Tag',
    size: 'tiny',
    color: 'gray',
    icon: true,
  },
)

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const element = computed(() => (props.href ? 'a' : 'button'))
const safeRel = computed(() => props.rel ?? (props.target === '_blank' ? 'noopener noreferrer' : undefined))
const rootClasses = computed(() => [`operational-tag--${props.size}`, `operational-tag--${props.color}`])
</script>

<template>
  <component
    :is="element"
    class="operational-tag"
    :class="rootClasses"
    :href="href"
    :target="href ? target : undefined"
    :rel="href ? safeRel : undefined"
    :type="href ? undefined : 'button'"
    @click="emit('click', $event)"
  >
    <span class="operational-tag__text-wrapper">
      <span class="operational-tag__text">
        <slot>{{ label }}</slot>
      </span>
    </span>
    <slot v-if="$slots.trailing || icon" name="trailing">
      <span class="operational-tag__icon" aria-hidden="true"></span>
    </slot>
  </component>
</template>

<style scoped>
.operational-tag {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  max-width: 256px;
  justify-self: start;
  padding: 0;
  overflow: hidden;
  color: var(--text-primary);
  font-family: var(--font-family-paragraph);
  font-weight: var(--font-weight-body-paragraph);
  letter-spacing: 0;
  background: var(--background-primary-surface);
  border: 0;
  border-radius: var(--xl-20px);
  appearance: none;
  cursor: pointer;
  text-decoration: none;
  vertical-align: top;
  transition:
    box-shadow 160ms ease,
    color 160ms ease;
}

.operational-tag:hover,
.operational-tag--preview-hover {
  box-shadow:
    inset var(--0) var(--0) var(--0) var(--2500)
    color-mix(in srgb, var(--transparency-dark-dark-4) 4%, transparent);
}

.operational-tag:focus-visible,
.operational-tag--preview-focus {
  outline: var(--25) solid var(--stroke-border-dark);
  outline-offset: var(--25);
}

.operational-tag__text-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: 0 var(--spaces-semantic-tiny-4px);
}

.operational-tag__text {
  min-width: 0;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.operational-tag__icon {
  position: relative;
  display: inline-block;
  flex: 0 0 auto;
}

.operational-tag--tiny {
  min-height: var(--600);
  max-height: var(--600);
  padding: 0 var(--spaces-semantic-tiny-4px);
  font-size: var(--font-sizes-body-small-14px);
  line-height: 130%;
}

.operational-tag--small {
  min-height: var(--700);
  max-height: var(--700);
  padding: 0 var(--spaces-semantic-tiny-4px);
  font-size: var(--font-sizes-body-small-14px);
  line-height: 130%;
}

.operational-tag--medium {
  min-height: var(--800);
  max-height: var(--800);
  padding: 0 var(--spaces-semantic-small-8px);
  font-size: 16px;
  line-height: 140%;
}

.operational-tag--large {
  min-height: var(--900);
  max-height: var(--900);
  padding: 0 var(--spaces-semantic-small-8px);
  font-size: 16px;
  line-height: 140%;
}

.operational-tag--tiny .operational-tag__icon {
  width: var(--400);
  height: var(--400);
}

.operational-tag--small .operational-tag__icon,
.operational-tag--medium .operational-tag__icon {
  width: 18px;
  height: 18px;
}

.operational-tag--large .operational-tag__icon {
  width: var(--500);
  height: var(--500);
}

.operational-tag--gray {
  color: var(--text-primary);
  background: var(--background-primary-surface);
}

.operational-tag--blue {
  color: var(--text-info);
  background: var(--background-info-light);
}

.operational-tag--purple {
  color: var(--text-bonus);
  background: var(--background-bonus-light);
}

.operational-tag--green {
  color: var(--text-success);
  background: var(--background-success-light);
}

.operational-tag--red {
  color: var(--text-error);
  background: var(--background-error-light);
}

.operational-tag--orange {
  color: var(--text-brand);
  background: var(--background-brand-light);
}

.operational-tag--yellow {
  color: var(--text-warning);
  background: var(--background-warning-light);
}

.operational-tag__icon::before {
  position: absolute;
  top: 20%;
  right: 18%;
  width: 45%;
  height: 45%;
  border-top: var(--25) solid currentColor;
  border-right: var(--25) solid currentColor;
  content: '';
}

.operational-tag__icon::after {
  position: absolute;
  right: 20%;
  bottom: 20%;
  width: 58%;
  height: var(--25);
  background: currentColor;
  content: '';
  transform: rotate(-45deg);
  transform-origin: right center;
}
</style>
