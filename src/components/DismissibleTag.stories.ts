import type { Meta, StoryObj } from '@storybook/vue3-vite'
import DismissibleTag from './DismissibleTag.vue'
import './Tag.stories.css'
import type { TagSize, TagTone } from './Tag.types'

type DismissibleTagStoryArgs = InstanceType<typeof DismissibleTag>['$props']

const sizes: TagSize[] = ['tiny', 'small', 'medium', 'large']
const types: TagTone[] = ['primary', 'secondary']

const meta = {
  title: 'Компоненты/Tag/DismissibleTag',
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


