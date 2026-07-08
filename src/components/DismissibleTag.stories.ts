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
    label: { control: 'text', description: 'РўРµРєСЃС‚ С‚РµРіР°.', table: { category: 'РљРѕРЅС‚РµРЅС‚' } },
    size: {
      control: 'select',
      options: sizes,
      description: 'Р’РёР·СѓР°Р»СЊРЅС‹Р№ СЂР°Р·РјРµСЂ: tiny 24px, small 28px, medium 32px, large 36px.',
      table: { category: 'Р’РЅРµС€РЅРёР№ РІРёРґ' },
    },
    type: {
      control: 'select',
      options: types,
      description: 'Р’РёР·СѓР°Р»СЊРЅС‹Р№ С‚РёРї: primary РёР»Рё secondary.',
      table: { category: 'Р’РЅРµС€РЅРёР№ РІРёРґ' },
    },
    icon: {
      control: 'boolean',
      description: 'РџРѕРєР°Р·С‹РІР°РµС‚ РєРЅРѕРїРєСѓ СЃ РёРєРѕРЅРєРѕР№ Р·Р°РєСЂС‹С‚РёСЏ.',
      table: { category: 'РљРѕРЅС‚РµРЅС‚' },
    },
    closeAriaLabel: {
      control: 'text',
      description: 'Р”РѕСЃС‚СѓРїРЅРѕРµ РЅР°Р·РІР°РЅРёРµ РєРЅРѕРїРєРё Р·Р°РєСЂС‹С‚РёСЏ.',
      table: { category: 'Р”РѕСЃС‚СѓРїРЅРѕСЃС‚СЊ' },
    },
    disabled: { control: 'boolean', description: 'РћС‚РєР»СЋС‡Р°РµС‚ РєРЅРѕРїРєСѓ Р·Р°РєСЂС‹С‚РёСЏ.', table: { category: 'РЎРѕСЃС‚РѕСЏРЅРёРµ' } },
  },
  args: {
    label: 'РњРѕСЃРєРІР°',
    size: 'tiny',
    type: 'primary',
    icon: true,
    closeAriaLabel: 'РЈРґР°Р»РёС‚СЊ РњРѕСЃРєРІСѓ',
    disabled: false,
  },
} satisfies Meta<DismissibleTagStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}


