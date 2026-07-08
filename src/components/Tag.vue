<script setup lang="ts">
import { computed } from 'vue'
import DismissibleTag from './DismissibleTag.vue'
import OperationalTag from './OperationalTag.vue'
import ReadOnlyTag from './ReadOnlyTag.vue'
import SelectableTag from './SelectableTag.vue'
import type { TagValue } from './Tag.types'

type TagMode = 'multi' | 'single' | 'operational' | 'link' | 'readonly' | 'dismissible'
type TagModelValue = boolean | TagValue | TagValue[] | undefined

const model = defineModel<TagModelValue>()

const props = withDefaults(
  defineProps<{
    mode?: TagMode
    value?: TagValue
    name?: string
    href?: string
    target?: string
    rel?: string
    disabled?: boolean
    skeleton?: boolean
  }>(),
  {
    mode: 'multi',
    disabled: false,
    skeleton: false,
  },
)

const emit = defineEmits<{
  click: [event: MouseEvent]
  dismiss: [event: MouseEvent]
}>()

const isSelected = computed(() => {
  if (props.mode === 'multi') {
    if (Array.isArray(model.value)) {
      return props.value !== undefined && model.value.includes(props.value)
    }

    return Boolean(model.value)
  }

  if (props.mode === 'single') {
    return props.value === undefined ? model.value === true : model.value === props.value
  }

  return false
})

function updateSelected(selected: boolean) {
  if (props.mode === 'multi') {
    if (Array.isArray(model.value)) {
      if (props.value === undefined) {
        return
      }

      const nextValue = model.value.filter((item) => item !== props.value)
      model.value = selected ? [...nextValue, props.value] : nextValue
      return
    }

    model.value = selected
    return
  }

  if (props.mode === 'single') {
    model.value = selected ? props.value ?? true : undefined
  }
}
</script>

<template>
  <OperationalTag
    v-if="mode === 'operational' || mode === 'link'"
    :href="href"
    :target="target"
    :rel="rel"
    @click="emit('click', $event)"
  >
    <template v-if="$slots.leading" #trailing>
      <slot name="leading"></slot>
    </template>
    <slot>Tag</slot>
  </OperationalTag>

  <ReadOnlyTag v-else-if="mode === 'readonly'">
    <template v-if="$slots.leading" #leading>
      <slot name="leading"></slot>
    </template>
    <slot>Tag</slot>
  </ReadOnlyTag>

  <DismissibleTag
    v-else-if="mode === 'dismissible'"
    :disabled="disabled || skeleton"
    @dismiss="emit('dismiss', $event)"
  >
    <slot>Tag</slot>
  </DismissibleTag>

  <SelectableTag
    v-else
    :model-value="isSelected"
    :value="value"
    :name="name"
    :disabled="disabled || skeleton"
    @update:model-value="updateSelected"
    @click="emit('click', $event)"
  >
    <slot>Tag</slot>
  </SelectableTag>
</template>
