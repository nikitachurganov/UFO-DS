import type { Meta, StoryObj } from '@storybook/vue3-vite'
import DismissibleTag from './DismissibleTag.vue'
import OperationalTag from './OperationalTag.vue'
import ReadOnlyTag from './ReadOnlyTag.vue'
import SelectableTag from './SelectableTag.vue'
import Tag from './Tag.vue'
import './Tag.stories.css'

const meta = {
  title: 'Компоненты/Tag/Обзор',
  component: Tag,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
    docs: {
      description: {
        component:
          'Tag представлен четырьмя публичными компонентами, которые соответствуют четырём наборам компонентов в Figma. OperationalTag отвечает за компактные кликабельные действия, включая, но не ограничиваясь ссылками. Legacy-экспорт Tag остаётся только как compatibility wrapper.',
      },
    },
  },
  decorators: [
    (story) => ({
      components: { Story: story() },
      template: '<div class="tag-story-page"><Story /></div>',
    }),
  ],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const ComponentSets: Story = {
  render: () => ({
    components: { DismissibleTag, OperationalTag, ReadOnlyTag, SelectableTag },
    template: `
      <div class="tag-story-grid tag-story-grid--overview">
        <div class="tag-story-grid__head">Набор</div>
        <div class="tag-story-grid__head">Пример</div>
        <div class="tag-story-grid__head">Поведение</div>

        <div class="tag-story-grid__label">ReadOnlyTag</div>
        <ReadOnlyTag label="Москва" color="blue" />
        <span class="tag-story-note">Неинтерактивный информационный тег.</span>

        <div class="tag-story-grid__label">SelectableTag</div>
        <SelectableTag label="Москва" model-value />
        <span class="tag-story-note">Тег с поведением checkbox: выбран или не выбран.</span>

        <div class="tag-story-grid__label">DismissibleTag</div>
        <DismissibleTag label="Москва" close-aria-label="Удалить Москву" />
        <span class="tag-story-note">Тег значения, который удаляется через кнопку закрытия.</span>

        <div class="tag-story-grid__label">OperationalTag</div>
        <OperationalTag label="Москва" color="orange" />
        <span class="tag-story-note">Тег действия, который запускает мгновенное действие, включая навигацию при заданном href.</span>
      </div>
    `,
  }),
}
