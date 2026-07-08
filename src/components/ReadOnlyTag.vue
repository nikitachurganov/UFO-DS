<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { ReadOnlyTagColor, TagSize } from './Tag.types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    label?: string
    size?: TagSize
    color?: ReadOnlyTagColor
  }>(),
  {
    label: 'Tag',
    size: 'tiny',
    color: 'gray',
  },
)

const slots = useSlots()
const hasLeading = computed(() => Boolean(slots.leading))

const rootClasses = computed(() => [
  `read-only-tag--${props.size}`,
  `read-only-tag--${props.color}`,
])
</script>

<template>
  <span class="ufo-tag read-only-tag" :class="rootClasses">
    <span class="read-only-tag__container">
      <span v-if="hasLeading" class="read-only-tag__icon" aria-hidden="true">
        <slot name="leading"></slot>
      </span>
      <span class="read-only-tag__text-wrapper">
        <span class="read-only-tag__text">
          <slot>{{ label }}</slot>
        </span>
      </span>
    </span>
  </span>
</template>

<style scoped>
.read-only-tag {
  position: relative;
  display: inline-flex;
  width: fit-content;
  max-width: 256px;
  justify-self: start;
  color: var(--text-primary);
  font-family: var(--font-family-paragraph);
  font-weight: var(--font-weight-body-paragraph);
  letter-spacing: 0;
  text-decoration: none;
  vertical-align: top;
}

.read-only-tag__container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-width: 0;
  border-radius: var(--xl-20px);
  color: var(--text-primary);
  background: transparent;
  overflow: hidden;
}

.read-only-tag__text-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: var(--spaces-semantic-tiny-4px);
}

.read-only-tag__text {
  min-width: 0;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.read-only-tag__icon {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: currentColor;
}

.read-only-tag__icon :slotted(svg) {
  width: 100%;
  height: 100%;
}

.read-only-tag--tiny {
  font-size: var(--font-sizes-body-small-14px);
  line-height: 130%;
}

.read-only-tag--small {
  font-size: var(--font-sizes-body-small-14px);
  line-height: 130%;
}

.read-only-tag--medium,
.read-only-tag--large {
  font-size: 16px;
  line-height: 140%;
}

.read-only-tag--tiny .read-only-tag__container {
  min-height: var(--600);
  padding: 0 var(--spaces-semantic-tiny-4px);
}

.read-only-tag--small .read-only-tag__container {
  min-height: var(--700);
  padding: 0 var(--spaces-semantic-tiny-4px);
}

.read-only-tag--medium .read-only-tag__container {
  min-height: var(--800);
  padding: 0 var(--spaces-semantic-small-8px);
}

.read-only-tag--large .read-only-tag__container {
  min-height: var(--900);
  padding: 0 var(--spaces-semantic-small-8px);
}

.read-only-tag--tiny .read-only-tag__icon {
  width: var(--400);
  height: var(--400);
}

.read-only-tag--small .read-only-tag__icon,
.read-only-tag--medium .read-only-tag__icon {
  width: 18px;
  height: 18px;
}

.read-only-tag--large .read-only-tag__icon {
  width: var(--500);
  height: var(--500);
}

.read-only-tag--gray .read-only-tag__container {
  color: var(--text-primary);
  background: var(--background-primary-surface);
}

.read-only-tag--blue .read-only-tag__container {
  color: var(--text-info);
  background: var(--background-info-light);
}

.read-only-tag--purple .read-only-tag__container {
  color: var(--text-bonus);
  background: var(--background-bonus-light);
}

.read-only-tag--green .read-only-tag__container {
  color: var(--text-success);
  background: var(--background-success-light);
}

.read-only-tag--red .read-only-tag__container {
  color: var(--text-error);
  background: var(--background-error-light);
}

.read-only-tag--orange .read-only-tag__container {
  color: var(--text-brand);
  background: var(--background-brand-light);
}

.read-only-tag--orange-accent .read-only-tag__container {
  color: var(--text-primary-inverse);
  background: var(--background-brand-dark);
}

.read-only-tag--yellow .read-only-tag__container {
  color: var(--text-warning);
  background: var(--background-warning-light);
}
</style>
