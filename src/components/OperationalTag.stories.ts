import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import OperationalTag from './OperationalTag.vue'
import './Tag.stories.css'
import type { TagColor, TagSize } from './Tag.types'

type OperationalTagStoryArgs = InstanceType<typeof OperationalTag>['$props']

const sizes: TagSize[] = ['tiny', 'small', 'medium', 'large']
const colors: TagColor[] = ['gray', 'blue', 'purple', 'green', 'red', 'orange', 'yellow']

const operationalTagDescription = `
Основано на docs/templates/component-documentation-template.md

OperationalTag — тег для компактных подсказок и второстепенных действий. Он не ограничен навигацией: один и тот же визуальный компонент может открыть страницу, заполнить поле, применить быстрый выбор или запустить другое мгновенное действие.

Используйте \`href\` только для настоящей навигации. Без \`href\` компонент рендерит нативный \`button\`. У OperationalTag намеренно нет disabled-состояния: если действие недоступно, не показывайте тег.
`

const meta = {
  title: 'Components/Tag/OperationalTag',
  component: OperationalTag,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: operationalTagDescription,
      },
    },
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
    color: {
      control: 'select',
      options: colors,
      description: 'Семантический цвет из Figma-компонента clickable tag.',
      table: { category: 'Внешний вид' },
    },
    href: {
      control: 'text',
      description: 'Необязательный href для ссылки. Если не задан, OperationalTag рендерится как кнопка.',
      table: { category: 'Поведение' },
    },
    target: { control: 'text', description: 'Нативный target для ссылки, если задан href.', table: { category: 'Поведение' } },
    rel: { control: 'text', description: 'Нативный rel для ссылки, если задан href.', table: { category: 'Поведение' } },
    icon: {
      control: 'boolean',
      description: 'Показывает правую иконку nav-arrow-up-right из Figma-компонента.',
      table: { category: 'Контент' },
    },
    onClick: {
      action: 'click',
      description: 'Срабатывает для действий кнопки и кликов по ссылке.',
      table: { category: 'События' },
    },
  },
  args: {
    label: 'Москва',
    size: 'tiny',
    color: 'gray',
    href: undefined,
    target: undefined,
    rel: undefined,
    icon: true,
  },
} satisfies Meta<OperationalTagStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Default: Story = {}

export const AsLink: Story = {
  args: {
    label: 'Открыть каталог',
    href: '#',
    color: 'orange',
  },
}

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { OperationalTag },
    setup() {
      return { sizes }
    },
    template: `
      <div class="tag-story-row">
        <OperationalTag v-for="size in sizes" :key="size" label="Москва" :size="size" />
      </div>
    `,
  }),
}

export const Colors: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { OperationalTag },
    setup() {
      return { colors }
    },
    template: `
      <div class="tag-story-row">
        <OperationalTag v-for="color in colors" :key="color" label="Москва" :color="color" />
      </div>
    `,
  }),
}

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { OperationalTag },
    template: `
      <div class="tag-story-grid tag-story-grid--states">
        <div class="tag-story-grid__head">по умолчанию</div>
        <OperationalTag label="Москва" />
        <div class="tag-story-grid__head">hover</div>
        <OperationalTag class="operational-tag--preview-hover" label="Москва" />
        <div class="tag-story-grid__head">focus</div>
        <OperationalTag class="operational-tag--preview-focus" label="Москва" />
      </div>
    `,
  }),
}

export const SearchSuggestion: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { OperationalTag },
    setup() {
      const query = ref('mo')
      const suggestions = ['Москва', 'Московская область', 'Московский']

      function useSuggestion(value: string) {
        query.value = value
      }

      return { query, suggestions, useSuggestion }
    },
    template: `
      <div class="tag-story-search">
        <label class="tag-story-search__label" for="tag-search">Поиск</label>
        <input id="tag-search" v-model="query" class="tag-story-search__input" />
        <div class="tag-story-row" aria-label="Подсказки поиска">
          <OperationalTag
            v-for="suggestion in suggestions"
            :key="suggestion"
            :label="suggestion"
            color="blue"
            @click="useSuggestion(suggestion)"
          />
        </div>
        <p class="tag-story-note">При клике значение тега подставляется в поле поиска.</p>
      </div>
    `,
  }),
}

export const LongContent: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { OperationalTag },
    template: `
      <div class="tag-story-truncate">
        <OperationalTag label="Очень длинное значение operational tag, которое должно обрезаться" />
      </div>
    `,
  }),
}
