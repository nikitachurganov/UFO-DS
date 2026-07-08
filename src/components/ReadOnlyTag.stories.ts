import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ReadOnlyTag from './ReadOnlyTag.vue'
import './Tag.stories.css'
import type { ReadOnlyTagColor, TagSize } from './Tag.types'

type ReadOnlyTagStoryArgs = InstanceType<typeof ReadOnlyTag>['$props']

const sizes: TagSize[] = ['tiny', 'small', 'medium', 'large']
const colors: ReadOnlyTagColor[] = ['gray', 'blue', 'purple', 'green', 'red', 'orange', 'orange-accent', 'yellow']
const readOnlyTagDescription = `
ReadOnlyTag — неинтерактивный информационный тег для коротких меток, категорий и атрибутов, которые нужно только прочитать.

Используйте его, когда контент должен оставаться статичным и не должен вести себя как ссылка, checkbox, действие удаления или кнопка.

Компонент рендерится как \`span\`, не попадает в tab order, не раскрывает selected- или checked-состояния через ARIA и скрывает декоративную leading-иконку от ассистивных технологий через \`aria-hidden="true"\`.

Используйте stories ниже, чтобы проверить поддерживаемые размеры, семантические цвета, работу с иконкой, обрезку длинного контента и ожидаемое неинтерактивное поведение.
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
            ReadOnlyTag — неинтерактивная метка для отображения дополнительной информации в интерфейсе DNS.
            Компонент помогает компактно показать свойство, категорию, признак или краткое значение.
          </p>
          <p>
            ReadOnlyTag не выполняет действий, не открывает ссылки, не выбирается и не удаляется пользователем.
            Если тег должен менять состояние, вести по ссылке или удаляться, используйте другой компонент семейства Tag.
          </p>
        </section>

        <section class="tag-docs__section">
          <h2>Песочница</h2>
          <div class="tag-story-row">
            <ReadOnlyTag label="Новинка" size="medium" color="gray" />
            <ReadOnlyTag label="Москва" size="medium" color="orange-accent">
              <template #leading>
                <span class="tag-story-leading-placeholder"></span>
              </template>
            </ReadOnlyTag>
            <ReadOnlyTag label="Онлайн" size="medium" color="blue">
              <template #leading>
                <span class="tag-story-leading-placeholder"></span>
              </template>
            </ReadOnlyTag>
            <div class="tag-story-truncate">
              <ReadOnlyTag label="Очень длинное значение тега" size="medium" color="gray" />
            </div>
          </div>
        </section>

        <section class="tag-docs__section">
          <h2>Назначение</h2>
          <p>
            Используйте ReadOnlyTag для короткого признака, категории, типа, характеристики,
            дополнительного свойства, вспомогательной метки или краткого значения.
            Тег помогает быстрее считать контекст, но не должен быть основным способом управления интерфейсом.
          </p>
        </section>

        <section class="tag-docs__section">
          <h2>Когда использовать</h2>
          <ul>
            <li>Значение нужно только прочитать.</li>
            <li>Пользователь не должен взаимодействовать с тегом.</li>
            <li>Тег не меняет состояние интерфейса.</li>
            <li>Тег не ведет по ссылке и не удаляется.</li>
            <li>Информация короткая и хорошо считывается в одну строку.</li>
          </ul>
          <p>Хорошие универсальные примеры: Новинка, Популярное, Ограничено, До 5 кг, Онлайн, 4 товара, Серия A.</p>
        </section>

        <section class="tag-docs__section">
          <h2>Когда не использовать</h2>
          <p>Не используйте ReadOnlyTag, если элемент должен:</p>
          <ul>
            <li>показывать статус процесса или объекта;</li>
            <li>работать как фильтр или чекбокс;</li>
            <li>вести по ссылке;</li>
            <li>удаляться через крестик;</li>
            <li>открывать модальное окно или запускать действие;</li>
            <li>заменять кнопку.</li>
          </ul>
        </section>

        <section class="tag-docs__section">
          <h2>Анатомия</h2>
          <pre><code>ReadOnlyTag
└── container
    ├── icon, optional
    └── text-wrapper
        └── label</code></pre>
          <p>
            Container отвечает за фон, скругление, общий размер и горизонтальные отступы.
            Icon — необязательная иконка перед текстом. Text wrapper обеспечивает стабильные внутренние
            отступы текста. Label содержит короткое значение тега.
          </p>
        </section>

        <section class="tag-docs__section">
          <h2>Поведение</h2>
          <ul>
            <li>Не кликается и не выполняет действие.</li>
            <li>Не получает hover, active и focus состояния.</li>
            <li>Не имеет selected, checked и disabled состояний.</li>
            <li>Не попадает в tab order и не управляется с клавиатуры.</li>
            <li>Фактически рендерится как <code>span</code>.</li>
          </ul>
        </section>

        <section class="tag-docs__section">
          <h2>Props</h2>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Тип</th>
                <th>По умолчанию</th>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>label</code></td>
                <td><code>string</code></td>
                <td><code>'Tag'</code></td>
                <td>Текст тега. Можно заменить содержимым default slot.</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td><code>'tiny' | 'small' | 'medium' | 'large'</code></td>
                <td><code>'tiny'</code></td>
                <td>Размер тега.</td>
              </tr>
              <tr>
                <td><code>color</code></td>
                <td><code>'gray' | 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'orange-accent' | 'yellow'</code></td>
                <td><code>'gray'</code></td>
                <td>Цветовая схема для визуального различения информационных меток.</td>
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
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>default</code></td>
                <td>Текст или простое содержимое тега вместо <code>label</code>.</td>
              </tr>
              <tr>
                <td><code>leading</code></td>
                <td>Необязательная иконка перед текстом. Размер зависит от <code>size</code>.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="tag-docs__section">
          <h2>Недопустимые props и состояния</h2>
          <table>
            <thead>
              <tr>
                <th>Prop или состояние</th>
                <th>Почему не используется</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>disabled</code></td>
                <td>ReadOnlyTag не имеет выключенного состояния. Он либо отображается, либо не отображается.</td>
              </tr>
              <tr>
                <td><code>checked</code></td>
                <td>Выбор относится к SelectableTag.</td>
              </tr>
              <tr>
                <td><code>selected</code></td>
                <td>ReadOnlyTag не выбирается.</td>
              </tr>
              <tr>
                <td><code>onClick</code></td>
                <td>ReadOnlyTag не выполняет действие.</td>
              </tr>
              <tr>
                <td><code>href</code></td>
                <td>Ссылки и другие короткие действия относятся к OperationalTag.</td>
              </tr>
              <tr>
                <td><code>onClose</code> / <code>onDismiss</code></td>
                <td>Удаление относится к DismissibleTag.</td>
              </tr>
              <tr>
                <td><code>tabIndex</code>, <code>role="button"</code></td>
                <td>Компонент не является кнопкой и не должен попадать в фокус.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="tag-docs__section">
          <h2>Размеры</h2>
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
                <th>Использование</th>
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
                <td>Самые компактные зоны интерфейса, плотные списки, небольшие метки.</td>
              </tr>
              <tr>
                <td><code>small</code></td>
                <td>28px, <code>--700</code></td>
                <td>4px</td>
                <td>18px</td>
                <td>4px</td>
                <td>14px / 130%</td>
                <td>Компактное отображение дополнительной информации.</td>
              </tr>
              <tr>
                <td><code>medium</code></td>
                <td>32px, <code>--800</code></td>
                <td>4px</td>
                <td>18px</td>
                <td>8px</td>
                <td>16px / 140%</td>
                <td>Базовый размер для большинства случаев.</td>
              </tr>
              <tr>
                <td><code>large</code></td>
                <td>36px, <code>--900</code></td>
                <td>4px</td>
                <td>20px, <code>--500</code></td>
                <td>8px</td>
                <td>16px / 140%</td>
                <td>Более заметные информационные метки в свободных layout-зонах.</td>
              </tr>
            </tbody>
          </table>
          <p>Скругление контейнера: <code>--xl-20px</code>. Ширина hug по содержимому, максимальная ширина — 256px.</p>
        </section>

        <section class="tag-docs__section">
          <h2>Цветовые варианты</h2>
          <div class="tag-story-row">
            <ReadOnlyTag v-for="color in colors" :key="color" :label="color" :color="color" />
          </div>
          <table>
            <thead>
              <tr>
                <th>Color</th>
                <th>Назначение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>gray</code></td>
                <td>Базовый нейтральный вариант без смыслового акцента.</td>
              </tr>
              <tr>
                <td><code>blue</code></td>
                <td>Информационный вариант для справочной или уточняющей метки.</td>
              </tr>
              <tr>
                <td><code>purple</code></td>
                <td>Дополнительный акцентный вариант для мягкого визуального выделения.</td>
              </tr>
              <tr>
                <td><code>green</code></td>
                <td>Положительный или подтверждающий информационный оттенок. Не заменяет статус процесса.</td>
              </tr>
              <tr>
                <td><code>red</code></td>
                <td>Критический или ограничивающий информационный оттенок. Используйте аккуратно.</td>
              </tr>
              <tr>
                <td><code>orange</code></td>
                <td>Светлый фирменный вариант DNS для мягкого акцента без инверсии текста.</td>
              </tr>
              <tr>
                <td><code>orange-accent</code></td>
                <td>Контрастный фирменный акцент DNS с темной оранжевой подложкой и инверсным текстом.</td>
              </tr>
              <tr>
                <td><code>yellow</code></td>
                <td>Предупреждающий информационный оттенок. Не заменяет системное предупреждение.</td>
              </tr>
            </tbody>
          </table>
          <p>
            Цвет используется для визуального различения информационных меток, а не для интерактивного состояния.
            Не используйте цвет как единственный источник смысла и не смешивайте слишком много цветовых вариантов в одном блоке.
          </p>
        </section>

        <section class="tag-docs__section">
          <h2>Иконки</h2>
          <p>
            Иконка необязательна. Используйте ее, если она ускоряет распознавание значения,
            помогает отличить тип информации и поддерживает смысл текста. Не используйте иконку только для украшения.
          </p>
          <p>Размеры иконки: tiny — 16px, small — 18px, medium — 18px, large — 20px.</p>
        </section>

        <section class="tag-docs__section">
          <h2>Текст</h2>
          <p>
            Текст должен быть коротким и однозначным. Используйте 1–3 слова, не ставьте точку в конце,
            не переносите текст на вторую строку и не используйте текст, похожий на действие.
          </p>
          <p>Хорошие примеры: Новинка, До 5 кг, Онлайн, 4 товара, Серия A.</p>
          <p>Плохие примеры: Нажмите, чтобы посмотреть подробнее; Перейти; Подробнее.</p>
        </section>

        <section class="tag-docs__section">
          <h2>Truncate</h2>
          <p>
            Отдельного prop <code>truncate</code> нет. Текст не переносится и обрезается через ellipsis,
            когда ширина компонента или внешнего контейнера ограничена.
          </p>
        </section>

        <section class="tag-docs__section">
          <h2>Accessibility</h2>
          <ul>
            <li>Не используйте <code>button</code> или <code>a</code> для ReadOnlyTag.</li>
            <li>Не добавляйте <code>tabIndex</code>, <code>role="button"</code>, <code>aria-pressed</code> или <code>aria-checked</code>.</li>
            <li>Не добавляйте keyboard handlers.</li>
            <li>Декоративная leading-иконка скрыта от screen reader через <code>aria-hidden="true"</code>.</li>
            <li>Если иконка несет самостоятельный смысл, он должен быть продублирован в тексте тега.</li>
          </ul>
        </section>

        <section class="tag-docs__section">
          <h2>Использование</h2>
          <pre><code>&lt;ReadOnlyTag label="Новинка" size="medium" color="gray" /&gt;</code></pre>
          <pre><code>&lt;ReadOnlyTag size="medium" color="blue"&gt;
  Онлайн
  &lt;template #leading&gt;
    &lt;Icon /&gt;
  &lt;/template&gt;
&lt;/ReadOnlyTag&gt;</code></pre>
          <pre><code>&lt;div class="limited-width"&gt;
  &lt;ReadOnlyTag label="Очень длинное значение тега" size="medium" color="gray" /&gt;
&lt;/div&gt;</code></pre>
        </section>

        <section class="tag-docs__section">
          <h2>Не использовать так</h2>
          <pre><code>&lt;ReadOnlyTag @click="handleClick"&gt;Подробнее&lt;/ReadOnlyTag&gt;
&lt;ReadOnlyTag href="/page"&gt;Документ&lt;/ReadOnlyTag&gt;
&lt;ReadOnlyTag selected&gt;Выбрано&lt;/ReadOnlyTag&gt;
&lt;ReadOnlyTag disabled&gt;Недоступно&lt;/ReadOnlyTag&gt;</code></pre>
        </section>

        <section class="tag-docs__section">
          <h2>Связь с другими компонентами Tag</h2>
          <table>
            <thead>
              <tr>
                <th>Компонент</th>
                <th>Поведение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ReadOnlyTag</td>
                <td>Отображение дополнительной информации без взаимодействия.</td>
              </tr>
              <tr>
                <td>SelectableTag</td>
                <td>Выбор значения по логике checkbox.</td>
              </tr>
              <tr>
                <td>DismissibleTag</td>
                <td>Отображение значения с возможностью удаления.</td>
              </tr>
              <tr>
                <td>OperationalTag</td>
                <td>Короткое действие, включая переход по ссылке, если задан <code>href</code>.</td>
              </tr>
            </tbody>
          </table>
          <p>Не заменяйте один тип тега другим, если меняется поведение компонента.</p>
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
      description: 'Текст тега. Можно заменить содержимым default slot.',
      table: { category: 'Content' },
    },
    size: {
      control: 'select',
      options: sizes,
      description: 'Размер тега: tiny 24px, small 28px, medium 32px, large 36px.',
      table: { category: 'Appearance' },
    },
    color: {
      control: 'select',
      options: colors,
      description: 'Цветовая схема для визуального различения информационных меток.',
      table: { category: 'Appearance' },
    },
  },
  args: {
    label: 'Новинка',
    size: 'tiny',
    color: 'gray',
  },
} satisfies Meta<ReadOnlyTagStoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Default: Story = {}

export const Accent: Story = {
  args: {
    label: 'Москва',
    size: 'medium',
    color: 'orange-accent',
  },
}

export const WithIcon: Story = {
  render: (args) => ({
    components: { ReadOnlyTag },
    setup() {
      return { args }
    },
    template: `
      <ReadOnlyTag
        :label="args.label"
        :size="args.size"
        :color="args.color"
      >
        <template #leading>
          <span class="tag-story-leading-placeholder"></span>
        </template>
      </ReadOnlyTag>
    `,
  }),
}

export const WithoutIcon: Story = {
  args: {
    label: 'Новинка',
  },
}

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { ReadOnlyTag },
    setup() {
      return { sizes }
    },
    template: `
      <div class="tag-story-row">
        <ReadOnlyTag v-for="size in sizes" :key="size" label="Новинка" :size="size" />
      </div>
    `,
  }),
}

export const Colors: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { ReadOnlyTag },
    setup() {
      return { colors }
    },
    template: `
      <div class="tag-story-row">
        <ReadOnlyTag v-for="color in colors" :key="color" label="Новинка" :color="color" />
      </div>
    `,
  }),
}

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { ReadOnlyTag },
    template: `
      <div class="tag-story-grid tag-story-grid--states">
        <div class="tag-story-grid__head">по умолчанию</div>
        <ReadOnlyTag label="Новинка" />
        <div class="tag-story-grid__head">with icon</div>
        <ReadOnlyTag label="Онлайн">
          <template #leading>
            <span class="tag-story-leading-placeholder"></span>
          </template>
        </ReadOnlyTag>
        <div class="tag-story-grid__head">accent</div>
        <ReadOnlyTag label="Москва" color="orange-accent">
          <template #leading>
            <span class="tag-story-leading-placeholder"></span>
          </template>
        </ReadOnlyTag>
      </div>
    `,
  }),
}

export const Truncate: Story = {
  parameters: { controls: { disable: true } },
  render: () => ({
    components: { ReadOnlyTag },
    template: `
      <div class="tag-story-truncate">
        <ReadOnlyTag label="Очень длинное значение тега, которое должно обрезаться через ellipsis" />
      </div>
    `,
  }),
}
