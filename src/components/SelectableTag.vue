<script setup lang="ts">
import { computed } from 'vue'
import TagBase from './TagBase.vue'
import type { TagSize, TagValue } from './Tag.types'

const model = defineModel<boolean>({ default: false })

const props = withDefaults(
  defineProps<{
    label?: string
    size?: TagSize
    value?: TagValue
    name?: string
    floating?: boolean
    disabled?: boolean
  }>(),
  {
    label: 'Tag',
    size: 'tiny',
    floating: false,
    disabled: false,
  },
)

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const selected = computed(() => model.value)

function handleClick(event: MouseEvent) {
  if (props.disabled) {
    event.preventDefault()
    return
  }

  emit('click', event)
}

function handleChange(event: Event) {
  if (props.disabled) {
    return
  }

  model.value = (event.target as HTMLInputElement).checked
}
</script>

<template>
  <TagBase
    as="label"
    :label="label"
    :size="size"
    tone="secondary"
    interactive
    :selected="selected"
    :floating="floating"
    :disabled="disabled"
  >
    <template #control>
      <input
        class="selectable-tag__control"
        type="checkbox"
        :name="name"
        :value="value"
        :checked="selected"
        :disabled="disabled"
        @click="handleClick"
        @change="handleChange"
      />
    </template>
    <slot>{{ label }}</slot>
  </TagBase>
</template>

<style scoped>
.selectable-tag__control {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: inherit;
  opacity: 0;
}

.selectable-tag__control:focus-visible + .ufo-tag__surface {
  border-color: var(--stroke-border-dark);
  outline: none;
}
</style>
