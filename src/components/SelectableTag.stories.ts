import { ref, watch } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SelectableTag from './SelectableTag.vue'
import './Tag.stories.css'
import type { TagSize } from './Tag.types'

type SelectableTagStoryArgs = InstanceType<typeof SelectableTag>['$props']

const sizes: TagSize[] = ['tiny', 'small', 'medium', 'large']

const meta = {
  title: 'Components/Tag/SelectableTag',
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

export const Default: Story = {}

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { SelectableTag },
    setup() {
      return { sizes }
    },
    template: `
      <div class="tag-story-row">
        <SelectableTag v-for="size in sizes" :key="size" label="Москва" :size="size" />
      </div>
    `,
  }),
}

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { SelectableTag },
    template: `
      <div class="tag-story-grid tag-story-grid--states">
        <div class="tag-story-grid__head">по умолчанию</div>
        <SelectableTag label="Москва" />
        <div class="tag-story-grid__head">выбрано</div>
        <SelectableTag label="Москва" model-value />
        <div class="tag-story-grid__head">floating</div>
        <SelectableTag label="Москва" floating />
        <div class="tag-story-grid__head">выбрано floating</div>
        <SelectableTag label="Москва" model-value floating />
        <div class="tag-story-grid__head">hover</div>
        <SelectableTag class="ufo-tag--preview-hover" label="Москва" />
        <div class="tag-story-grid__head">focus</div>
        <SelectableTag class="ufo-tag--preview-focus" label="Москва" />
        <div class="tag-story-grid__head">отключён</div>
        <SelectableTag label="Москва" disabled />
      </div>
    `,
  }),
}
