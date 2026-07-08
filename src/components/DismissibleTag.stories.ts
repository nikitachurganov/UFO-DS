import type { Meta, StoryObj } from '@storybook/vue3-vite'
import DismissibleTag from './DismissibleTag.vue'
import './Tag.stories.css'
import type { TagSize, TagTone } from './Tag.types'

type DismissibleTagStoryArgs = InstanceType<typeof DismissibleTag>['$props']

const sizes: TagSize[] = ['tiny', 'small', 'medium', 'large']
const types: TagTone[] = ['primary', 'secondary']

const meta = {
  title: 'Components/Tag/DismissibleTag',
  component: DismissibleTag,
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
    type: {
      control: 'select',
      options: types,
      description: 'Визуальный тип: primary или secondary.',
      table: { category: 'Внешний вид' },
    },
    icon: {
      control: 'boolean',
      description: 'Показывает кнопку с иконкой закрытия.',
      table: { category: 'Контент' },
    },
    closeAriaLabel: {
      control: 'text',
      description: 'Доступное название кнопки закрытия.',
      table: { category: 'Доступность' },
    },
    disabled: { control: 'boolean', description: 'Отключает кнопку закрытия.', table: { category: 'Состояние' } },
  },
  args: {
    label: 'Москва',
    size: 'tiny',
    type: 'primary',
    icon: true,
    closeAriaLabel: 'Удалить Москву',
    disabled: false,
  },
} satisfies Meta<DismissibleTagStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Default: Story = {}

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DismissibleTag },
    setup() {
      return { sizes }
    },
    template: `
      <div class="tag-story-row">
        <DismissibleTag v-for="size in sizes" :key="size" label="Москва" :size="size" />
      </div>
    `,
  }),
}

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { DismissibleTag },
    template: `
      <div class="tag-story-grid tag-story-grid--states">
        <div class="tag-story-grid__head">primary</div>
        <DismissibleTag label="Москва" type="primary" />
        <div class="tag-story-grid__head">secondary</div>
        <DismissibleTag label="Москва" type="secondary" />
        <div class="tag-story-grid__head">hover primary</div>
        <DismissibleTag class="ufo-tag--preview-hover" label="Москва" type="primary" />
        <div class="tag-story-grid__head">hover secondary</div>
        <DismissibleTag class="ufo-tag--preview-hover" label="Москва" type="secondary" />
        <div class="tag-story-grid__head">focus</div>
        <DismissibleTag class="ufo-tag--preview-focus" label="Москва" close-aria-label="Удалить Москву" />
        <div class="tag-story-grid__head">отключён</div>
        <DismissibleTag label="Москва" disabled />
      </div>
    `,
  }),
}
