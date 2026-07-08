<script setup lang="ts">
import TagBase from './TagBase.vue'
import type { TagSize, TagTone } from './Tag.types'

const props = withDefaults(
  defineProps<{
    label?: string
    size?: TagSize
    type?: TagTone
    disabled?: boolean
    closeAriaLabel?: string
    icon?: boolean
  }>(),
  {
    label: 'Tag',
    size: 'tiny',
    type: 'primary',
    disabled: false,
    closeAriaLabel: 'Dismiss tag',
    icon: true,
  },
)

const emit = defineEmits<{
  dismiss: [event: MouseEvent]
}>()

function handleDismiss(event: MouseEvent) {
  if (props.disabled) {
    event.preventDefault()
    return
  }

  emit('dismiss', event)
}
</script>

<template>
  <TagBase
    as="span"
    :label="label"
    :size="size"
    :tone="type"
    :disabled="disabled"
    :interactive="!disabled"
  >
    <slot>{{ label }}</slot>
    <template v-if="icon" #trailing>
      <button
        class="dismissible-tag__close"
        type="button"
        :aria-label="closeAriaLabel"
        :disabled="disabled"
        @click.stop="handleDismiss"
      >
        <span aria-hidden="true"></span>
      </button>
    </template>
  </TagBase>
</template>

<style scoped>
.dismissible-tag__close {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  color: inherit;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.dismissible-tag__close:disabled {
  cursor: not-allowed;
}

.dismissible-tag__close:focus-visible {
  outline: var(--25) solid currentColor;
  outline-offset: var(--25);
}

.dismissible-tag__close span::before,
.dismissible-tag__close span::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: var(--25);
  background: currentColor;
  content: '';
}

.dismissible-tag__close span::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.dismissible-tag__close span::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>
