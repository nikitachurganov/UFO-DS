import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ReadOnlyTag from './ReadOnlyTag.vue'
import './Tag.stories.css'
import type { ReadOnlyTagColor, TagSize } from './Tag.types'

type ReadOnlyTagStoryArgs = InstanceType<typeof ReadOnlyTag>['$props']

const sizes: TagSize[] = ['tiny', 'small', 'medium', 'large']
const colors: ReadOnlyTagColor[] = ['gray', 'blue', 'purple', 'green', 'red', 'orange', 'orange-accent', 'yellow']
const readOnlyTagDescription = `
ReadOnlyTag вЂ” РЅРµРёРЅС‚РµСЂР°РєС‚РёРІРЅС‹Р№ РёРЅС„РѕСЂРјР°С†РёРѕРЅРЅС‹Р№ С‚РµРі РґР»СЏ РєРѕСЂРѕС‚РєРёС… РјРµС‚РѕРє, РєР°С‚РµРіРѕСЂРёР№ Рё Р°С‚СЂРёР±СѓС‚РѕРІ, РєРѕС‚РѕСЂС‹Рµ РЅСѓР¶РЅРѕ С‚РѕР»СЊРєРѕ РїСЂРѕС‡РёС‚Р°С‚СЊ.

РСЃРїРѕР»СЊР·СѓР№С‚Рµ РµРіРѕ, РєРѕРіРґР° РєРѕРЅС‚РµРЅС‚ РґРѕР»Р¶РµРЅ РѕСЃС‚Р°РІР°С‚СЊСЃСЏ СЃС‚Р°С‚РёС‡РЅС‹Рј Рё РЅРµ РґРѕР»Р¶РµРЅ РІРµСЃС‚Рё СЃРµР±СЏ РєР°Рє СЃСЃС‹Р»РєР°, checkbox, РґРµР№СЃС‚РІРёРµ СѓРґР°Р»РµРЅРёСЏ РёР»Рё РєРЅРѕРїРєР°.

РљРѕРјРїРѕРЅРµРЅС‚ СЂРµРЅРґРµСЂРёС‚СЃСЏ РєР°Рє \`span\`, РЅРµ РїРѕРїР°РґР°РµС‚ РІ tab order, РЅРµ СЂР°СЃРєСЂС‹РІР°РµС‚ selected- РёР»Рё checked-СЃРѕСЃС‚РѕСЏРЅРёСЏ С‡РµСЂРµР· ARIA Рё СЃРєСЂС‹РІР°РµС‚ РґРµРєРѕСЂР°С‚РёРІРЅСѓСЋ leading-РёРєРѕРЅРєСѓ РѕС‚ Р°СЃСЃРёСЃС‚РёРІРЅС‹С… С‚РµС…РЅРѕР»РѕРіРёР№ С‡РµСЂРµР· \`aria-hidden="true"\`.

РСЃРїРѕР»СЊР·СѓР№С‚Рµ stories РЅРёР¶Рµ, С‡С‚РѕР±С‹ РїСЂРѕРІРµСЂРёС‚СЊ РїРѕРґРґРµСЂР¶РёРІР°РµРјС‹Рµ СЂР°Р·РјРµСЂС‹, СЃРµРјР°РЅС‚РёС‡РµСЃРєРёРµ С†РІРµС‚Р°, СЂР°Р±РѕС‚Сѓ СЃ РёРєРѕРЅРєРѕР№, РѕР±СЂРµР·РєСѓ РґР»РёРЅРЅРѕРіРѕ РєРѕРЅС‚РµРЅС‚Р° Рё РѕР¶РёРґР°РµРјРѕРµ РЅРµРёРЅС‚РµСЂР°РєС‚РёРІРЅРѕРµ РїРѕРІРµРґРµРЅРёРµ.
`

const ReadOnlyTagDocsPage = {
  components: { ReadOnlyTag },
  setup() {
    return { sizes, colors }
  },
  template: `
    <div class="tag-story-page">
      <article class="tag-docs">
        <section class="tag-docs__section">
          <h1>Tag / ReadOnly</h1>
          <p>
            ReadOnlyTag вЂ” РЅРµРёРЅС‚РµСЂР°РєС‚РёРІРЅР°СЏ РјРµС‚РєР° РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕР№ РёРЅС„РѕСЂРјР°С†РёРё РІ РёРЅС‚РµСЂС„РµР№СЃРµ DNS.
            РљРѕРјРїРѕРЅРµРЅС‚ РїРѕРјРѕРіР°РµС‚ РєРѕРјРїР°РєС‚РЅРѕ РїРѕРєР°Р·Р°С‚СЊ СЃРІРѕР№СЃС‚РІРѕ, РєР°С‚РµРіРѕСЂРёСЋ, РїСЂРёР·РЅР°Рє РёР»Рё РєСЂР°С‚РєРѕРµ Р·РЅР°С‡РµРЅРёРµ.
          </p>
          <p>
            ReadOnlyTag РЅРµ РІС‹РїРѕР»РЅСЏРµС‚ РґРµР№СЃС‚РІРёР№, РЅРµ РѕС‚РєСЂС‹РІР°РµС‚ СЃСЃС‹Р»РєРё, РЅРµ РІС‹Р±РёСЂР°РµС‚СЃСЏ Рё РЅРµ СѓРґР°Р»СЏРµС‚СЃСЏ РїРѕР»СЊР·РѕРІР°С‚РµР»РµРј.
            Р•СЃР»Рё С‚РµРі РґРѕР»Р¶РµРЅ РјРµРЅСЏС‚СЊ СЃРѕСЃС‚РѕСЏРЅРёРµ, РІРµСЃС‚Рё РїРѕ СЃСЃС‹Р»РєРµ РёР»Рё СѓРґР°Р»СЏС‚СЊСЃСЏ, РёСЃРїРѕР»СЊР·СѓР№С‚Рµ РґСЂСѓРіРѕР№ РєРѕРјРїРѕРЅРµРЅС‚ СЃРµРјРµР№СЃС‚РІР° Tag.
          </p>
        </section>

        <section class="tag-docs__section">
          <h2>РџРµСЃРѕС‡РЅРёС†Р°</h2>
          <div class="tag-story-row">
            <ReadOnlyTag label="РќРѕРІРёРЅРєР°" size="medium" color="gray" />
            <ReadOnlyTag label="РњРѕСЃРєРІР°" size="medium" color="orange-accent">
              <template #leading>
                <span class="tag-story-leading-placeholder"></span>
              </template>
            </ReadOnlyTag>
            <ReadOnlyTag label="РћРЅР»Р°Р№РЅ" size="medium" color="blue">
              <template #leading>
                <span class="tag-story-leading-placeholder"></span>
              </template>
            </ReadOnlyTag>
            <div class="tag-story-truncate">
              <ReadOnlyTag label="РћС‡РµРЅСЊ РґР»РёРЅРЅРѕРµ Р·РЅР°С‡РµРЅРёРµ С‚РµРіР°" size="medium" color="gray" />
            </div>
          </div>
        </section>

        <section class="tag-docs__section">
          <h2>РќР°Р·РЅР°С‡РµРЅРёРµ</h2>
          <p>
            РСЃРїРѕР»СЊР·СѓР№С‚Рµ ReadOnlyTag РґР»СЏ РєРѕСЂРѕС‚РєРѕРіРѕ РїСЂРёР·РЅР°РєР°, РєР°С‚РµРіРѕСЂРёРё, С‚РёРїР°, С…Р°СЂР°РєС‚РµСЂРёСЃС‚РёРєРё,
            РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕРіРѕ СЃРІРѕР№СЃС‚РІР°, РІСЃРїРѕРјРѕРіР°С‚РµР»СЊРЅРѕР№ РјРµС‚РєРё РёР»Рё РєСЂР°С‚РєРѕРіРѕ Р·РЅР°С‡РµРЅРёСЏ.
            РўРµРі РїРѕРјРѕРіР°РµС‚ Р±С‹СЃС‚СЂРµРµ СЃС‡РёС‚Р°С‚СЊ РєРѕРЅС‚РµРєСЃС‚, РЅРѕ РЅРµ РґРѕР»Р¶РµРЅ Р±С‹С‚СЊ РѕСЃРЅРѕРІРЅС‹Рј СЃРїРѕСЃРѕР±РѕРј СѓРїСЂР°РІР»РµРЅРёСЏ РёРЅС‚РµСЂС„РµР№СЃРѕРј.
          </p>
        </section>

        <section class="tag-docs__section">
          <h2>РљРѕРіРґР° РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ</h2>
          <ul>
            <li>Р—РЅР°С‡РµРЅРёРµ РЅСѓР¶РЅРѕ С‚РѕР»СЊРєРѕ РїСЂРѕС‡РёС‚Р°С‚СЊ.</li>
            <li>РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ РЅРµ РґРѕР»Р¶РµРЅ РІР·Р°РёРјРѕРґРµР№СЃС‚РІРѕРІР°С‚СЊ СЃ С‚РµРіРѕРј.</li>
            <li>РўРµРі РЅРµ РјРµРЅСЏРµС‚ СЃРѕСЃС‚РѕСЏРЅРёРµ РёРЅС‚РµСЂС„РµР№СЃР°.</li>
            <li>РўРµРі РЅРµ РІРµРґРµС‚ РїРѕ СЃСЃС‹Р»РєРµ Рё РЅРµ СѓРґР°Р»СЏРµС‚СЃСЏ.</li>
            <li>РРЅС„РѕСЂРјР°С†РёСЏ РєРѕСЂРѕС‚РєР°СЏ Рё С…РѕСЂРѕС€Рѕ СЃС‡РёС‚С‹РІР°РµС‚СЃСЏ РІ РѕРґРЅСѓ СЃС‚СЂРѕРєСѓ.</li>
          </ul>
          <p>РҐРѕСЂРѕС€РёРµ СѓРЅРёРІРµСЂСЃР°Р»СЊРЅС‹Рµ РїСЂРёРјРµСЂС‹: РќРѕРІРёРЅРєР°, РџРѕРїСѓР»СЏСЂРЅРѕРµ, РћРіСЂР°РЅРёС‡РµРЅРѕ, Р”Рѕ 5 РєРі, РћРЅР»Р°Р№РЅ, 4 С‚РѕРІР°СЂР°, РЎРµСЂРёСЏ A.</p>
        </section>

        <section class="tag-docs__section">
          <h2>РљРѕРіРґР° РЅРµ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ</h2>
          <p>РќРµ РёСЃРїРѕР»СЊР·СѓР№С‚Рµ ReadOnlyTag, РµСЃР»Рё СЌР»РµРјРµРЅС‚ РґРѕР»Р¶РµРЅ:</p>
          <ul>
            <li>РїРѕРєР°Р·С‹РІР°С‚СЊ СЃС‚Р°С‚СѓСЃ РїСЂРѕС†РµСЃСЃР° РёР»Рё РѕР±СЉРµРєС‚Р°;</li>
            <li>СЂР°Р±РѕС‚Р°С‚СЊ РєР°Рє С„РёР»СЊС‚СЂ РёР»Рё С‡РµРєР±РѕРєСЃ;</li>
            <li>РІРµСЃС‚Рё РїРѕ СЃСЃС‹Р»РєРµ;</li>
            <li>СѓРґР°Р»СЏС‚СЊСЃСЏ С‡РµСЂРµР· РєСЂРµСЃС‚РёРє;</li>
            <li>РѕС‚РєСЂС‹РІР°С‚СЊ РјРѕРґР°Р»СЊРЅРѕРµ РѕРєРЅРѕ РёР»Рё Р·Р°РїСѓСЃРєР°С‚СЊ РґРµР№СЃС‚РІРёРµ;</li>
            <li>Р·Р°РјРµРЅСЏС‚СЊ РєРЅРѕРїРєСѓ.</li>
          </ul>
        </section>

        <section class="tag-docs__section">
          <h2>РђРЅР°С‚РѕРјРёСЏ</h2>
          <pre><code>ReadOnlyTag
в””в”Ђв”Ђ container
    в”њв”Ђв”Ђ icon, optional
    в””в”Ђв”Ђ text-wrapper
        в””в”Ђв”Ђ label</code></pre>
          <p>
            Container РѕС‚РІРµС‡Р°РµС‚ Р·Р° С„РѕРЅ, СЃРєСЂСѓРіР»РµРЅРёРµ, РѕР±С‰РёР№ СЂР°Р·РјРµСЂ Рё РіРѕСЂРёР·РѕРЅС‚Р°Р»СЊРЅС‹Рµ РѕС‚СЃС‚СѓРїС‹.
            Icon вЂ” РЅРµРѕР±СЏР·Р°С‚РµР»СЊРЅР°СЏ РёРєРѕРЅРєР° РїРµСЂРµРґ С‚РµРєСЃС‚РѕРј. Text wrapper РѕР±РµСЃРїРµС‡РёРІР°РµС‚ СЃС‚Р°Р±РёР»СЊРЅС‹Рµ РІРЅСѓС‚СЂРµРЅРЅРёРµ
            РѕС‚СЃС‚СѓРїС‹ С‚РµРєСЃС‚Р°. Label СЃРѕРґРµСЂР¶РёС‚ РєРѕСЂРѕС‚РєРѕРµ Р·РЅР°С‡РµРЅРёРµ С‚РµРіР°.
          </p>
        </section>

        <section class="tag-docs__section">
          <h2>РџРѕРІРµРґРµРЅРёРµ</h2>
          <ul>
            <li>РќРµ РєР»РёРєР°РµС‚СЃСЏ Рё РЅРµ РІС‹РїРѕР»РЅСЏРµС‚ РґРµР№СЃС‚РІРёРµ.</li>
            <li>РќРµ РїРѕР»СѓС‡Р°РµС‚ hover, active Рё focus СЃРѕСЃС‚РѕСЏРЅРёСЏ.</li>
            <li>РќРµ РёРјРµРµС‚ selected, checked Рё disabled СЃРѕСЃС‚РѕСЏРЅРёР№.</li>
            <li>РќРµ РїРѕРїР°РґР°РµС‚ РІ tab order Рё РЅРµ СѓРїСЂР°РІР»СЏРµС‚СЃСЏ СЃ РєР»Р°РІРёР°С‚СѓСЂС‹.</li>
            <li>Р¤Р°РєС‚РёС‡РµСЃРєРё СЂРµРЅРґРµСЂРёС‚СЃСЏ РєР°Рє <code>span</code>.</li>
          </ul>
        </section>

        <section class="tag-docs__section">
          <h2>Props</h2>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>РўРёРї</th>
                <th>РџРѕ СѓРјРѕР»С‡Р°РЅРёСЋ</th>
                <th>РћРїРёСЃР°РЅРёРµ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>label</code></td>
                <td><code>string</code></td>
                <td><code>'Tag'</code></td>
                <td>РўРµРєСЃС‚ С‚РµРіР°. РњРѕР¶РЅРѕ Р·Р°РјРµРЅРёС‚СЊ СЃРѕРґРµСЂР¶РёРјС‹Рј default slot.</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td><code>'tiny' | 'small' | 'medium' | 'large'</code></td>
                <td><code>'tiny'</code></td>
                <td>Р Р°Р·РјРµСЂ С‚РµРіР°.</td>
              </tr>
              <tr>
                <td><code>color</code></td>
                <td><code>'gray' | 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'orange-accent' | 'yellow'</code></td>
                <td><code>'gray'</code></td>
                <td>Р¦РІРµС‚РѕРІР°СЏ СЃС…РµРјР° РґР»СЏ РІРёР·СѓР°Р»СЊРЅРѕРіРѕ СЂР°Р·Р»РёС‡РµРЅРёСЏ РёРЅС„РѕСЂРјР°С†РёРѕРЅРЅС‹С… РјРµС‚РѕРє.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="tag-docs__section">
          <h2>Slots</h2>
          <table>
            <thead>
              <tr>
                <th>Slot</th>
                <th>РћРїРёСЃР°РЅРёРµ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>default</code></td>
                <td>РўРµРєСЃС‚ РёР»Рё РїСЂРѕСЃС‚РѕРµ СЃРѕРґРµСЂР¶РёРјРѕРµ С‚РµРіР° РІРјРµСЃС‚Рѕ <code>label</code>.</td>
              </tr>
              <tr>
                <td><code>leading</code></td>
                <td>РќРµРѕР±СЏР·Р°С‚РµР»СЊРЅР°СЏ РёРєРѕРЅРєР° РїРµСЂРµРґ С‚РµРєСЃС‚РѕРј. Р Р°Р·РјРµСЂ Р·Р°РІРёСЃРёС‚ РѕС‚ <code>size</code>.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="tag-docs__section">
          <h2>РќРµРґРѕРїСѓСЃС‚РёРјС‹Рµ props Рё СЃРѕСЃС‚РѕСЏРЅРёСЏ</h2>
          <table>
            <thead>
              <tr>
                <th>Prop РёР»Рё СЃРѕСЃС‚РѕСЏРЅРёРµ</th>
                <th>РџРѕС‡РµРјСѓ РЅРµ РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>disabled</code></td>
                <td>ReadOnlyTag РЅРµ РёРјРµРµС‚ РІС‹РєР»СЋС‡РµРЅРЅРѕРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ. РћРЅ Р»РёР±Рѕ РѕС‚РѕР±СЂР°Р¶Р°РµС‚СЃСЏ, Р»РёР±Рѕ РЅРµ РѕС‚РѕР±СЂР°Р¶Р°РµС‚СЃСЏ.</td>
              </tr>
              <tr>
                <td><code>checked</code></td>
                <td>Р’С‹Р±РѕСЂ РѕС‚РЅРѕСЃРёС‚СЃСЏ Рє SelectableTag.</td>
              </tr>
              <tr>
                <td><code>selected</code></td>
                <td>ReadOnlyTag РЅРµ РІС‹Р±РёСЂР°РµС‚СЃСЏ.</td>
              </tr>
              <tr>
                <td><code>onClick</code></td>
                <td>ReadOnlyTag РЅРµ РІС‹РїРѕР»РЅСЏРµС‚ РґРµР№СЃС‚РІРёРµ.</td>
              </tr>
              <tr>
                <td><code>href</code></td>
                <td>РЎСЃС‹Р»РєРё Рё РґСЂСѓРіРёРµ РєРѕСЂРѕС‚РєРёРµ РґРµР№СЃС‚РІРёСЏ РѕС‚РЅРѕСЃСЏС‚СЃСЏ Рє OperationalTag.</td>
              </tr>
              <tr>
                <td><code>onClose</code> / <code>onDismiss</code></td>
                <td>РЈРґР°Р»РµРЅРёРµ РѕС‚РЅРѕСЃРёС‚СЃСЏ Рє DismissibleTag.</td>
              </tr>
              <tr>
                <td><code>tabIndex</code>, <code>role="button"</code></td>
                <td>РљРѕРјРїРѕРЅРµРЅС‚ РЅРµ СЏРІР»СЏРµС‚СЃСЏ РєРЅРѕРїРєРѕР№ Рё РЅРµ РґРѕР»Р¶РµРЅ РїРѕРїР°РґР°С‚СЊ РІ С„РѕРєСѓСЃ.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="tag-docs__section">
          <h2>Р Р°Р·РјРµСЂС‹</h2>
          <div class="tag-story-row">
            <ReadOnlyTag v-for="size in sizes" :key="size" :label="size" :size="size" />
          </div>
          <table>
            <thead>
              <tr>
                <th>Size</th>
                <th>Height</th>
                <th>Text wrapper padding</th>
                <th>Icon size</th>
                <th>Container padding left/right</th>
                <th>Font</th>
                <th>РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>tiny</code></td>
                <td>24px, <code>--600</code></td>
                <td>4px</td>
                <td>16px, <code>--400</code></td>
                <td>4px</td>
                <td>14px / 130%</td>
                <td>РЎР°РјС‹Рµ РєРѕРјРїР°РєС‚РЅС‹Рµ Р·РѕРЅС‹ РёРЅС‚РµСЂС„РµР№СЃР°, РїР»РѕС‚РЅС‹Рµ СЃРїРёСЃРєРё, РЅРµР±РѕР»СЊС€РёРµ РјРµС‚РєРё.</td>
              </tr>
              <tr>
                <td><code>small</code></td>
                <td>28px, <code>--700</code></td>
                <td>4px</td>
                <td>18px</td>
                <td>4px</td>
                <td>14px / 130%</td>
                <td>РљРѕРјРїР°РєС‚РЅРѕРµ РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕР№ РёРЅС„РѕСЂРјР°С†РёРё.</td>
              </tr>
              <tr>
                <td><code>medium</code></td>
                <td>32px, <code>--800</code></td>
                <td>4px</td>
                <td>18px</td>
                <td>8px</td>
                <td>16px / 140%</td>
                <td>Р‘Р°Р·РѕРІС‹Р№ СЂР°Р·РјРµСЂ РґР»СЏ Р±РѕР»СЊС€РёРЅСЃС‚РІР° СЃР»СѓС‡Р°РµРІ.</td>
              </tr>
              <tr>
                <td><code>large</code></td>
                <td>36px, <code>--900</code></td>
                <td>4px</td>
                <td>20px, <code>--500</code></td>
                <td>8px</td>
                <td>16px / 140%</td>
                <td>Р‘РѕР»РµРµ Р·Р°РјРµС‚РЅС‹Рµ РёРЅС„РѕСЂРјР°С†РёРѕРЅРЅС‹Рµ РјРµС‚РєРё РІ СЃРІРѕР±РѕРґРЅС‹С… layout-Р·РѕРЅР°С….</td>
              </tr>
            </tbody>
          </table>
          <p>РЎРєСЂСѓРіР»РµРЅРёРµ РєРѕРЅС‚РµР№РЅРµСЂР°: <code>--xl-20px</code>. РЁРёСЂРёРЅР° hug РїРѕ СЃРѕРґРµСЂР¶РёРјРѕРјСѓ, РјР°РєСЃРёРјР°Р»СЊРЅР°СЏ С€РёСЂРёРЅР° вЂ” 256px.</p>
        </section>

        <section class="tag-docs__section">
          <h2>Р¦РІРµС‚РѕРІС‹Рµ РІР°СЂРёР°РЅС‚С‹</h2>
          <div class="tag-story-row">
            <ReadOnlyTag v-for="color in colors" :key="color" :label="color" :color="color" />
          </div>
          <table>
            <thead>
              <tr>
                <th>Color</th>
                <th>РќР°Р·РЅР°С‡РµРЅРёРµ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>gray</code></td>
                <td>Р‘Р°Р·РѕРІС‹Р№ РЅРµР№С‚СЂР°Р»СЊРЅС‹Р№ РІР°СЂРёР°РЅС‚ Р±РµР· СЃРјС‹СЃР»РѕРІРѕРіРѕ Р°РєС†РµРЅС‚Р°.</td>
              </tr>
              <tr>
                <td><code>blue</code></td>
                <td>РРЅС„РѕСЂРјР°С†РёРѕРЅРЅС‹Р№ РІР°СЂРёР°РЅС‚ РґР»СЏ СЃРїСЂР°РІРѕС‡РЅРѕР№ РёР»Рё СѓС‚РѕС‡РЅСЏСЋС‰РµР№ РјРµС‚РєРё.</td>
              </tr>
              <tr>
                <td><code>purple</code></td>
                <td>Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Р№ Р°РєС†РµРЅС‚РЅС‹Р№ РІР°СЂРёР°РЅС‚ РґР»СЏ РјСЏРіРєРѕРіРѕ РІРёР·СѓР°Р»СЊРЅРѕРіРѕ РІС‹РґРµР»РµРЅРёСЏ.</td>
              </tr>
              <tr>
                <td><code>green</code></td>
                <td>РџРѕР»РѕР¶РёС‚РµР»СЊРЅС‹Р№ РёР»Рё РїРѕРґС‚РІРµСЂР¶РґР°СЋС‰РёР№ РёРЅС„РѕСЂРјР°С†РёРѕРЅРЅС‹Р№ РѕС‚С‚РµРЅРѕРє. РќРµ Р·Р°РјРµРЅСЏРµС‚ СЃС‚Р°С‚СѓСЃ РїСЂРѕС†РµСЃСЃР°.</td>
              </tr>
              <tr>
                <td><code>red</code></td>
                <td>РљСЂРёС‚РёС‡РµСЃРєРёР№ РёР»Рё РѕРіСЂР°РЅРёС‡РёРІР°СЋС‰РёР№ РёРЅС„РѕСЂРјР°С†РёРѕРЅРЅС‹Р№ РѕС‚С‚РµРЅРѕРє. РСЃРїРѕР»СЊР·СѓР№С‚Рµ Р°РєРєСѓСЂР°С‚РЅРѕ.</td>
              </tr>
              <tr>
                <td><code>orange</code></td>
                <td>РЎРІРµС‚Р»С‹Р№ С„РёСЂРјРµРЅРЅС‹Р№ РІР°СЂРёР°РЅС‚ DNS РґР»СЏ РјСЏРіРєРѕРіРѕ Р°РєС†РµРЅС‚Р° Р±РµР· РёРЅРІРµСЂСЃРёРё С‚РµРєСЃС‚Р°.</td>
              </tr>
              <tr>
                <td><code>orange-accent</code></td>
                <td>РљРѕРЅС‚СЂР°СЃС‚РЅС‹Р№ С„РёСЂРјРµРЅРЅС‹Р№ Р°РєС†РµРЅС‚ DNS СЃ С‚РµРјРЅРѕР№ РѕСЂР°РЅР¶РµРІРѕР№ РїРѕРґР»РѕР¶РєРѕР№ Рё РёРЅРІРµСЂСЃРЅС‹Рј С‚РµРєСЃС‚РѕРј.</td>
              </tr>
              <tr>
                <td><code>yellow</code></td>
                <td>РџСЂРµРґСѓРїСЂРµР¶РґР°СЋС‰РёР№ РёРЅС„РѕСЂРјР°С†РёРѕРЅРЅС‹Р№ РѕС‚С‚РµРЅРѕРє. РќРµ Р·Р°РјРµРЅСЏРµС‚ СЃРёСЃС‚РµРјРЅРѕРµ РїСЂРµРґСѓРїСЂРµР¶РґРµРЅРёРµ.</td>
              </tr>
            </tbody>
          </table>
          <p>
            Р¦РІРµС‚ РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ РґР»СЏ РІРёР·СѓР°Р»СЊРЅРѕРіРѕ СЂР°Р·Р»РёС‡РµРЅРёСЏ РёРЅС„РѕСЂРјР°С†РёРѕРЅРЅС‹С… РјРµС‚РѕРє, Р° РЅРµ РґР»СЏ РёРЅС‚РµСЂР°РєС‚РёРІРЅРѕРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ.
            РќРµ РёСЃРїРѕР»СЊР·СѓР№С‚Рµ С†РІРµС‚ РєР°Рє РµРґРёРЅСЃС‚РІРµРЅРЅС‹Р№ РёСЃС‚РѕС‡РЅРёРє СЃРјС‹СЃР»Р° Рё РЅРµ СЃРјРµС€РёРІР°Р№С‚Рµ СЃР»РёС€РєРѕРј РјРЅРѕРіРѕ С†РІРµС‚РѕРІС‹С… РІР°СЂРёР°РЅС‚РѕРІ РІ РѕРґРЅРѕРј Р±Р»РѕРєРµ.
          </p>
        </section>

        <section class="tag-docs__section">
          <h2>РРєРѕРЅРєРё</h2>
          <p>
            РРєРѕРЅРєР° РЅРµРѕР±СЏР·Р°С‚РµР»СЊРЅР°. РСЃРїРѕР»СЊР·СѓР№С‚Рµ РµРµ, РµСЃР»Рё РѕРЅР° СѓСЃРєРѕСЂСЏРµС‚ СЂР°СЃРїРѕР·РЅР°РІР°РЅРёРµ Р·РЅР°С‡РµРЅРёСЏ,
            РїРѕРјРѕРіР°РµС‚ РѕС‚Р»РёС‡РёС‚СЊ С‚РёРї РёРЅС„РѕСЂРјР°С†РёРё Рё РїРѕРґРґРµСЂР¶РёРІР°РµС‚ СЃРјС‹СЃР» С‚РµРєСЃС‚Р°. РќРµ РёСЃРїРѕР»СЊР·СѓР№С‚Рµ РёРєРѕРЅРєСѓ С‚РѕР»СЊРєРѕ РґР»СЏ СѓРєСЂР°С€РµРЅРёСЏ.
          </p>
          <p>Р Р°Р·РјРµСЂС‹ РёРєРѕРЅРєРё: tiny вЂ” 16px, small вЂ” 18px, medium вЂ” 18px, large вЂ” 20px.</p>
        </section>

        <section class="tag-docs__section">
          <h2>РўРµРєСЃС‚</h2>
          <p>
            РўРµРєСЃС‚ РґРѕР»Р¶РµРЅ Р±С‹С‚СЊ РєРѕСЂРѕС‚РєРёРј Рё РѕРґРЅРѕР·РЅР°С‡РЅС‹Рј. РСЃРїРѕР»СЊР·СѓР№С‚Рµ 1вЂ“3 СЃР»РѕРІР°, РЅРµ СЃС‚Р°РІСЊС‚Рµ С‚РѕС‡РєСѓ РІ РєРѕРЅС†Рµ,
            РЅРµ РїРµСЂРµРЅРѕСЃРёС‚Рµ С‚РµРєСЃС‚ РЅР° РІС‚РѕСЂСѓСЋ СЃС‚СЂРѕРєСѓ Рё РЅРµ РёСЃРїРѕР»СЊР·СѓР№С‚Рµ С‚РµРєСЃС‚, РїРѕС…РѕР¶РёР№ РЅР° РґРµР№СЃС‚РІРёРµ.
          </p>
          <p>РҐРѕСЂРѕС€РёРµ РїСЂРёРјРµСЂС‹: РќРѕРІРёРЅРєР°, Р”Рѕ 5 РєРі, РћРЅР»Р°Р№РЅ, 4 С‚РѕРІР°СЂР°, РЎРµСЂРёСЏ A.</p>
          <p>РџР»РѕС…РёРµ РїСЂРёРјРµСЂС‹: РќР°Р¶РјРёС‚Рµ, С‡С‚РѕР±С‹ РїРѕСЃРјРѕС‚СЂРµС‚СЊ РїРѕРґСЂРѕР±РЅРµРµ; РџРµСЂРµР№С‚Рё; РџРѕРґСЂРѕР±РЅРµРµ.</p>
        </section>

        <section class="tag-docs__section">
          <h2>Truncate</h2>
          <p>
            РћС‚РґРµР»СЊРЅРѕРіРѕ prop <code>truncate</code> РЅРµС‚. РўРµРєСЃС‚ РЅРµ РїРµСЂРµРЅРѕСЃРёС‚СЃСЏ Рё РѕР±СЂРµР·Р°РµС‚СЃСЏ С‡РµСЂРµР· ellipsis,
            РєРѕРіРґР° С€РёСЂРёРЅР° РєРѕРјРїРѕРЅРµРЅС‚Р° РёР»Рё РІРЅРµС€РЅРµРіРѕ РєРѕРЅС‚РµР№РЅРµСЂР° РѕРіСЂР°РЅРёС‡РµРЅР°.
          </p>
        </section>

        <section class="tag-docs__section">
          <h2>Accessibility</h2>
          <ul>
            <li>РќРµ РёСЃРїРѕР»СЊР·СѓР№С‚Рµ <code>button</code> РёР»Рё <code>a</code> РґР»СЏ ReadOnlyTag.</li>
            <li>РќРµ РґРѕР±Р°РІР»СЏР№С‚Рµ <code>tabIndex</code>, <code>role="button"</code>, <code>aria-pressed</code> РёР»Рё <code>aria-checked</code>.</li>
            <li>РќРµ РґРѕР±Р°РІР»СЏР№С‚Рµ keyboard handlers.</li>
            <li>Р”РµРєРѕСЂР°С‚РёРІРЅР°СЏ leading-РёРєРѕРЅРєР° СЃРєСЂС‹С‚Р° РѕС‚ screen reader С‡РµСЂРµР· <code>aria-hidden="true"</code>.</li>
            <li>Р•СЃР»Рё РёРєРѕРЅРєР° РЅРµСЃРµС‚ СЃР°РјРѕСЃС‚РѕСЏС‚РµР»СЊРЅС‹Р№ СЃРјС‹СЃР», РѕРЅ РґРѕР»Р¶РµРЅ Р±С‹С‚СЊ РїСЂРѕРґСѓР±Р»РёСЂРѕРІР°РЅ РІ С‚РµРєСЃС‚Рµ С‚РµРіР°.</li>
          </ul>
        </section>

        <section class="tag-docs__section">
          <h2>РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ</h2>
          <pre><code>&lt;ReadOnlyTag label="РќРѕРІРёРЅРєР°" size="medium" color="gray" /&gt;</code></pre>
          <pre><code>&lt;ReadOnlyTag size="medium" color="blue"&gt;
  РћРЅР»Р°Р№РЅ
  &lt;template #leading&gt;
    &lt;Icon /&gt;
  &lt;/template&gt;
&lt;/ReadOnlyTag&gt;</code></pre>
          <pre><code>&lt;div class="limited-width"&gt;
  &lt;ReadOnlyTag label="РћС‡РµРЅСЊ РґР»РёРЅРЅРѕРµ Р·РЅР°С‡РµРЅРёРµ С‚РµРіР°" size="medium" color="gray" /&gt;
&lt;/div&gt;</code></pre>
        </section>

        <section class="tag-docs__section">
          <h2>РќРµ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ С‚Р°Рє</h2>
          <pre><code>&lt;ReadOnlyTag @click="handleClick"&gt;РџРѕРґСЂРѕР±РЅРµРµ&lt;/ReadOnlyTag&gt;
&lt;ReadOnlyTag href="/page"&gt;Р”РѕРєСѓРјРµРЅС‚&lt;/ReadOnlyTag&gt;
&lt;ReadOnlyTag selected&gt;Р’С‹Р±СЂР°РЅРѕ&lt;/ReadOnlyTag&gt;
&lt;ReadOnlyTag disabled&gt;РќРµРґРѕСЃС‚СѓРїРЅРѕ&lt;/ReadOnlyTag&gt;</code></pre>
        </section>

        <section class="tag-docs__section">
          <h2>РЎРІСЏР·СЊ СЃ РґСЂСѓРіРёРјРё РєРѕРјРїРѕРЅРµРЅС‚Р°РјРё Tag</h2>
          <table>
            <thead>
              <tr>
                <th>РљРѕРјРїРѕРЅРµРЅС‚</th>
                <th>РџРѕРІРµРґРµРЅРёРµ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ReadOnlyTag</td>
                <td>РћС‚РѕР±СЂР°Р¶РµРЅРёРµ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕР№ РёРЅС„РѕСЂРјР°С†РёРё Р±РµР· РІР·Р°РёРјРѕРґРµР№СЃС‚РІРёСЏ.</td>
              </tr>
              <tr>
                <td>SelectableTag</td>
                <td>Р’С‹Р±РѕСЂ Р·РЅР°С‡РµРЅРёСЏ РїРѕ Р»РѕРіРёРєРµ checkbox.</td>
              </tr>
              <tr>
                <td>DismissibleTag</td>
                <td>РћС‚РѕР±СЂР°Р¶РµРЅРёРµ Р·РЅР°С‡РµРЅРёСЏ СЃ РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊСЋ СѓРґР°Р»РµРЅРёСЏ.</td>
              </tr>
              <tr>
                <td>OperationalTag</td>
                <td>РљРѕСЂРѕС‚РєРѕРµ РґРµР№СЃС‚РІРёРµ, РІРєР»СЋС‡Р°СЏ РїРµСЂРµС…РѕРґ РїРѕ СЃСЃС‹Р»РєРµ, РµСЃР»Рё Р·Р°РґР°РЅ <code>href</code>.</td>
              </tr>
            </tbody>
          </table>
          <p>РќРµ Р·Р°РјРµРЅСЏР№С‚Рµ РѕРґРёРЅ С‚РёРї С‚РµРіР° РґСЂСѓРіРёРј, РµСЃР»Рё РјРµРЅСЏРµС‚СЃСЏ РїРѕРІРµРґРµРЅРёРµ РєРѕРјРїРѕРЅРµРЅС‚Р°.</p>
        </section>
      </article>
    </div>
  `,
}

const meta = {
  title: 'Components/Tag/ReadOnlyTag',
  component: ReadOnlyTag,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: readOnlyTagDescription,
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
    label: {
      control: 'text',
      description: 'РўРµРєСЃС‚ С‚РµРіР°. РњРѕР¶РЅРѕ Р·Р°РјРµРЅРёС‚СЊ СЃРѕРґРµСЂР¶РёРјС‹Рј default slot.',
      table: { category: 'Content' },
    },
    size: {
      control: 'select',
      options: sizes,
      description: 'Р Р°Р·РјРµСЂ С‚РµРіР°: tiny 24px, small 28px, medium 32px, large 36px.',
      table: { category: 'Appearance' },
    },
    color: {
      control: 'select',
      options: colors,
      description: 'Р¦РІРµС‚РѕРІР°СЏ СЃС…РµРјР° РґР»СЏ РІРёР·СѓР°Р»СЊРЅРѕРіРѕ СЂР°Р·Р»РёС‡РµРЅРёСЏ РёРЅС„РѕСЂРјР°С†РёРѕРЅРЅС‹С… РјРµС‚РѕРє.',
      table: { category: 'Appearance' },
    },
  },
  args: {
    label: 'РќРѕРІРёРЅРєР°',
    size: 'tiny',
    color: 'gray',
  },
} satisfies Meta<ReadOnlyTagStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    label: "ппапа"
  }
}


