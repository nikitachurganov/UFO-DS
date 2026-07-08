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
    label: { control: 'text', description: 'РўРµРєСЃС‚ С‚РµРіР°.', table: { category: 'РљРѕРЅС‚РµРЅС‚' } },
    size: {
      control: 'select',
      options: sizes,
      description: 'Р’РёР·СѓР°Р»СЊРЅС‹Р№ СЂР°Р·РјРµСЂ: tiny 24px, small 28px, medium 32px, large 36px.',
      table: { category: 'Р’РЅРµС€РЅРёР№ РІРёРґ' },
    },
    modelValue: {
      control: 'boolean',
      description: 'РЎРѕСЃС‚РѕСЏРЅРёРµ РІС‹Р±РѕСЂР°. РСЃРїРѕР»СЊР·СѓРµС‚ РЅР°С‚РёРІРЅСѓСЋ СЃРµРјР°РЅС‚РёРєСѓ checkbox.',
      table: { category: 'РЎРѕСЃС‚РѕСЏРЅРёРµ' },
    },
    floating: {
      control: 'boolean',
      description: 'Р’РёР·СѓР°Р»СЊРЅРѕРµ floating-СЃРѕСЃС‚РѕСЏРЅРёРµ РёР· Figma.',
      table: { category: 'РЎРѕСЃС‚РѕСЏРЅРёРµ' },
    },
    disabled: { control: 'boolean', description: 'РћС‚РєР»СЋС‡Р°РµС‚ checkbox.', table: { category: 'РЎРѕСЃС‚РѕСЏРЅРёРµ' } },
    name: { control: 'text', description: 'РќР°С‚РёРІРЅРѕРµ РёРјСЏ checkbox.', table: { category: 'РџРѕРІРµРґРµРЅРёРµ' } },
    value: { control: 'text', description: 'РќР°С‚РёРІРЅРѕРµ Р·РЅР°С‡РµРЅРёРµ checkbox.', table: { category: 'РџРѕРІРµРґРµРЅРёРµ' } },
  },
  args: {
    label: 'РњРѕСЃРєРІР°',
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


