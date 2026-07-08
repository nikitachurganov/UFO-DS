import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import OperationalTag from './OperationalTag.vue'
import './Tag.stories.css'
import type { TagColor, TagSize } from './Tag.types'

type OperationalTagStoryArgs = InstanceType<typeof OperationalTag>['$props']

const sizes: TagSize[] = ['tiny', 'small', 'medium', 'large']
const colors: TagColor[] = ['gray', 'blue', 'purple', 'green', 'red', 'orange', 'yellow']

const operationalTagDescription = `
РћСЃРЅРѕРІР°РЅРѕ РЅР° docs/templates/component-documentation-template.md

OperationalTag вЂ” С‚РµРі РґР»СЏ РєРѕРјРїР°РєС‚РЅС‹С… РїРѕРґСЃРєР°Р·РѕРє Рё РІС‚РѕСЂРѕСЃС‚РµРїРµРЅРЅС‹С… РґРµР№СЃС‚РІРёР№. РћРЅ РЅРµ РѕРіСЂР°РЅРёС‡РµРЅ РЅР°РІРёРіР°С†РёРµР№: РѕРґРёРЅ Рё С‚РѕС‚ Р¶Рµ РІРёР·СѓР°Р»СЊРЅС‹Р№ РєРѕРјРїРѕРЅРµРЅС‚ РјРѕР¶РµС‚ РѕС‚РєСЂС‹С‚СЊ СЃС‚СЂР°РЅРёС†Сѓ, Р·Р°РїРѕР»РЅРёС‚СЊ РїРѕР»Рµ, РїСЂРёРјРµРЅРёС‚СЊ Р±С‹СЃС‚СЂС‹Р№ РІС‹Р±РѕСЂ РёР»Рё Р·Р°РїСѓСЃС‚РёС‚СЊ РґСЂСѓРіРѕРµ РјРіРЅРѕРІРµРЅРЅРѕРµ РґРµР№СЃС‚РІРёРµ.

РСЃРїРѕР»СЊР·СѓР№С‚Рµ \`href\` С‚РѕР»СЊРєРѕ РґР»СЏ РЅР°СЃС‚РѕСЏС‰РµР№ РЅР°РІРёРіР°С†РёРё. Р‘РµР· \`href\` РєРѕРјРїРѕРЅРµРЅС‚ СЂРµРЅРґРµСЂРёС‚ РЅР°С‚РёРІРЅС‹Р№ \`button\`. РЈ OperationalTag РЅР°РјРµСЂРµРЅРЅРѕ РЅРµС‚ disabled-СЃРѕСЃС‚РѕСЏРЅРёСЏ: РµСЃР»Рё РґРµР№СЃС‚РІРёРµ РЅРµРґРѕСЃС‚СѓРїРЅРѕ, РЅРµ РїРѕРєР°Р·С‹РІР°Р№С‚Рµ С‚РµРі.
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
    label: { control: 'text', description: 'РўРµРєСЃС‚ С‚РµРіР°.', table: { category: 'РљРѕРЅС‚РµРЅС‚' } },
    size: {
      control: 'select',
      options: sizes,
      description: 'Р’РёР·СѓР°Р»СЊРЅС‹Р№ СЂР°Р·РјРµСЂ: tiny 24px, small 28px, medium 32px, large 36px.',
      table: { category: 'Р’РЅРµС€РЅРёР№ РІРёРґ' },
    },
    color: {
      control: 'select',
      options: colors,
      description: 'РЎРµРјР°РЅС‚РёС‡РµСЃРєРёР№ С†РІРµС‚ РёР· Figma-РєРѕРјРїРѕРЅРµРЅС‚Р° clickable tag.',
      table: { category: 'Р’РЅРµС€РЅРёР№ РІРёРґ' },
    },
    href: {
      control: 'text',
      description: 'РќРµРѕР±СЏР·Р°С‚РµР»СЊРЅС‹Р№ href РґР»СЏ СЃСЃС‹Р»РєРё. Р•СЃР»Рё РЅРµ Р·Р°РґР°РЅ, OperationalTag СЂРµРЅРґРµСЂРёС‚СЃСЏ РєР°Рє РєРЅРѕРїРєР°.',
      table: { category: 'РџРѕРІРµРґРµРЅРёРµ' },
    },
    target: { control: 'text', description: 'РќР°С‚РёРІРЅС‹Р№ target РґР»СЏ СЃСЃС‹Р»РєРё, РµСЃР»Рё Р·Р°РґР°РЅ href.', table: { category: 'РџРѕРІРµРґРµРЅРёРµ' } },
    rel: { control: 'text', description: 'РќР°С‚РёРІРЅС‹Р№ rel РґР»СЏ СЃСЃС‹Р»РєРё, РµСЃР»Рё Р·Р°РґР°РЅ href.', table: { category: 'РџРѕРІРµРґРµРЅРёРµ' } },
    icon: {
      control: 'boolean',
      description: 'РџРѕРєР°Р·С‹РІР°РµС‚ РїСЂР°РІСѓСЋ РёРєРѕРЅРєСѓ nav-arrow-up-right РёР· Figma-РєРѕРјРїРѕРЅРµРЅС‚Р°.',
      table: { category: 'РљРѕРЅС‚РµРЅС‚' },
    },
    onClick: {
      action: 'click',
      description: 'РЎСЂР°Р±Р°С‚С‹РІР°РµС‚ РґР»СЏ РґРµР№СЃС‚РІРёР№ РєРЅРѕРїРєРё Рё РєР»РёРєРѕРІ РїРѕ СЃСЃС‹Р»РєРµ.',
      table: { category: 'РЎРѕР±С‹С‚РёСЏ' },
    },
  },
  args: {
    label: 'РњРѕСЃРєРІР°',
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

export const AsLink: Story = {
  args: {
    label: 'РћС‚РєСЂС‹С‚СЊ РєР°С‚Р°Р»РѕРі',
    href: '#',
    color: 'orange',
  },
}

export const SearchSuggestion: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { OperationalTag },
    setup() {
      const query = ref('mo')
      const suggestions = ['РњРѕСЃРєРІР°', 'РњРѕСЃРєРѕРІСЃРєР°СЏ РѕР±Р»Р°СЃС‚СЊ', 'РњРѕСЃРєРѕРІСЃРєРёР№']

      function useSuggestion(value: string) {
        query.value = value
      }

      return { query, suggestions, useSuggestion }
    },
    template: `
      <div class="tag-story-search">
        <label class="tag-story-search__label" for="tag-search">РџРѕРёСЃРє</label>
        <input id="tag-search" v-model="query" class="tag-story-search__input" />
        <div class="tag-story-row" aria-label="РџРѕРґСЃРєР°Р·РєРё РїРѕРёСЃРєР°">
          <OperationalTag
            v-for="suggestion in suggestions"
            :key="suggestion"
            :label="suggestion"
            color="blue"
            @click="useSuggestion(suggestion)"
          />
        </div>
        <p class="tag-story-note">РџСЂРё РєР»РёРєРµ Р·РЅР°С‡РµРЅРёРµ С‚РµРіР° РїРѕРґСЃС‚Р°РІР»СЏРµС‚СЃСЏ РІ РїРѕР»Рµ РїРѕРёСЃРєР°.</p>
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
        <OperationalTag label="РћС‡РµРЅСЊ РґР»РёРЅРЅРѕРµ Р·РЅР°С‡РµРЅРёРµ operational tag, РєРѕС‚РѕСЂРѕРµ РґРѕР»Р¶РЅРѕ РѕР±СЂРµР·Р°С‚СЊСЃСЏ" />
      </div>
    `,
  }),
}

