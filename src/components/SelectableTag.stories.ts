import { ref, watch } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SelectableTag from './SelectableTag.vue'
import './Tag.stories.css'
import type { TagSize } from './Tag.types'

type SelectableTagStoryArgs = InstanceType<typeof SelectableTag>['$props']

const sizes: TagSize[] = ['tiny', 'small', 'medium', 'large']

const meta = {
  title: 'Компоненты/Tag/SelectableTag',
  component: SelectableTag,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (story) => ({
      components: { Story: story() },
      template: '<div class="tag-story-page"><Story /></div>',
    }),
  ],
  argTypes: {
    label: { control: 'text', description: 'Текст тега.', table: { category: 'Контент' } },
    size: {
      control: 'select',
      options: sizes,
      description: 'Визуальный размер: tiny 24px, small 28px, medium 32px, large 36px.',
      table: { category: 'Внешний вид' },
    },
    modelValue: {
      control: 'boolean',
      description: 'Состояние выбора. Использует нативную семантику checkbox.',
      table: { category: 'Состояние' },
    },
    floating: {
      control: 'boolean',
      description: 'Визуальное floating-состояние из Figma.',
      table: { category: 'Состояние' },
    },
    disabled: { control: 'boolean', description: 'Отключает checkbox.', table: { category: 'Состояние' } },
    name: { control: 'text', description: 'Нативное имя checkbox.', table: { category: 'Поведение' } },
    value: { control: 'text', description: 'Нативное значение checkbox.', table: { category: 'Поведение' } },
  },
  args: {
    label: 'Москва',
    size: 'tiny',
    modelValue: false,
    floating: false,
    disabled: false,
    name: 'city',
    value: 'moscow',
  },
  render: (args) => ({
    components: { SelectableTag },
    setup() {
      const selected = ref(Boolean(args.modelValue))

      watch(
        () => args.modelValue,
        (nextValue) => {
          selected.value = Boolean(nextValue)
        },
      )

      return { args, selected }
    },
    template: `
      <SelectableTag
        v-model="selected"
        :label="args.label"
        :size="args.size"
        :floating="args.floating"
        :disabled="args.disabled"
        :name="args.name"
        :value="args.value"
      />
    `,
  }),
} satisfies Meta<SelectableTagStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}


