# Design Tokens

Документ описывает токены из `src/styles/tokens` и правила их использования в будущих Vue-компонентах дизайн-системы.

Важно: единственный источник токенов — файлы в `src/styles/tokens/`. Файл `src/styles/generated-tokens.css` создаётся автоматически командой `npm run prepare:tokens` только для подключения токенов в браузере.

## Главное правило

В компонентах используем семантические токены: `--text-*`, `--background-*`, `--stroke-*`, `--icon-*`, `--controls-*`, `--spaces-semantic-*`, `--font-*`.

Core-токены вроде `--space-gray-800`, `--uranian-blue-400`, `--100`, `--200` нужны как основа для семантических токенов. Их не стоит использовать напрямую в компонентах, кроме редких случаев, когда семантического токена ещё нет.

## Подключение

Файлы токенов сейчас содержат только CSS-декларации, например `--text-primary: ...;`, без обёртки `:root` или селектора темы. Поэтому их нельзя просто импортировать в CSS как готовые стили: браузер проигнорирует декларации на верхнем уровне.

Правильная схема подключения:

```css
:root {
  /* color-core-hex.css */
  /* xbase-mode-1.css */
  /* radius-mode-1.css */
  /* spaces-mode-1.css */
  /* font-sizes--core-desktop.css или font-sizes--core-mobile.css */
  /* typography-desktop.css или typography-mobile.css */
}

:root,
[data-theme='light'] {
  /* semantic-color-light.css */
}

[data-theme='dark'] {
  /* semantic-color-dark.css */
}
```

Важно: `xbase-mode-1.css` и `font-sizes--core-*.css` используют одинаковые имена переменных `--100`, `--200`, `--300` и т.д. Не подключайте их в один и тот же scope без проверки, иначе значения размеров могут перетереться.

## Таблица токенов

| Группа | Файл | Что содержит | Как использовать |
|---|---|---|---|
| Core colors | `src/styles/tokens/color-core-hex.css` | Базовые палитры: `space-gray`, `jupiter-orange`, `uranian-blue`, `alien-green`, `star-yellow`, `galactic-purple`, `martian-red`, прозрачности | Не использовать напрямую в компонентах. На них ссылаются semantic color токены. |
| Light semantic colors | `src/styles/tokens/semantic-color-light.css` | Семантические цвета для светлой темы: текст, фон, иконки, бордеры, статусы, контролы | Основной источник цветов для компонентов в светлой теме. |
| Dark semantic colors | `src/styles/tokens/semantic-color-dark.css` | Те же семантические роли, но со значениями для тёмной темы | Подключать под `[data-theme='dark']`; компоненты остаются на тех же `var(--text-primary)` и т.п. |
| Base scale | `src/styles/tokens/xbase-mode-1.css` | Числовая шкала размеров: `--0`, `--25`, `--50`, `--100` ... `--3200` | Foundation-слой для spacing/sizing. В компонентах лучше использовать semantic spacing. |
| Spaces | `src/styles/tokens/spaces-mode-1.css` | Семантические отступы: `--spaces-semantic-tiny-4px`, `--spaces-semantic-small-8px`, `--spaces-semantic-large-16px` и др. | Использовать для `padding`, `margin`, `gap`, layout spacing. |
| Radius | `src/styles/tokens/radius-mode-1.css` | Радиусы: `--xs-4px`, `--sm-8px`, `--md-12px`, `--lg-16px`, `--xl-20px` | Использовать для `border-radius`. |
| Core font sizes desktop | `src/styles/tokens/font-sizes--core-desktop.css` | Размеры шрифтов desktop: `--100: 12px`, `--200: 14px`, `--300: 16px`, `--900: 56px` | Подключать в desktop scope. Из-за имён `--100` и т.п. не смешивать бездумно с base scale. |
| Core font sizes mobile | `src/styles/tokens/font-sizes--core-mobile.css` | Размеры шрифтов mobile: от `12px` до `24px` | Подключать в mobile media/scope, если нужна отдельная мобильная типографика. |
| Typography desktop | `src/styles/tokens/typography-desktop.css` | Семейства и веса шрифта PT Sans, заготовки semantic font-size токенов | Использовать для типографики после проверки значений: часть `--font-sizes-*` сейчас равна `0px`. |
| Typography mobile | `src/styles/tokens/typography-mobile.css` | Мобильная версия typography semantic tokens | Использовать аналогично desktop, после проверки `0px` значений. |
| Sizes | `src/styles/tokens/sizes-mode-1.css` | Сейчас содержит только `--number: 0px` | Пока не использовать в компонентах как полноценную шкалу размеров. |

## Частые сценарии

| Задача | Использовать | Пример |
|---|---|---|
| Основной текст | `--text-primary` | `color: var(--text-primary);` |
| Вторичный текст | `--text-secondary` | `color: var(--text-secondary);` |
| Ссылка | `--text-link` | `color: var(--text-link);` |
| Основной фон страницы | `--background-primary` | `background: var(--background-primary);` |
| Поверхность карточки/поля | `--background-secondary` или `--background-secondary-surface` | `background: var(--background-secondary);` |
| Disabled-состояние | `--text-disabled`, `--background-disabled`, `--icon-disabled` | `color: var(--text-disabled);` |
| Ошибка | `--text-error`, `--background-error-light`, `--stroke-border-error`, `--icon-error` | `border-color: var(--stroke-border-error);` |
| Успех | `--text-success`, `--background-success-light`, `--stroke-border-success`, `--icon-success` | `background: var(--background-success-light);` |
| Предупреждение | `--text-warning`, `--background-warning-light`, `--stroke-border-warning`, `--icon-warning` | `color: var(--text-warning);` |
| Информационный акцент | `--text-info`, `--background-info-light`, `--stroke-border-info`, `--icon-info` | `background: var(--background-info-light);` |
| Обводка по умолчанию | `--stroke-border` | `border: 1px solid var(--stroke-border);` |
| Разделитель | `--stroke-divider-light` или `--stroke-divider-dark` | `border-bottom: 1px solid var(--stroke-divider-light);` |
| Отступ 8px | `--spaces-semantic-small-8px` | `gap: var(--spaces-semantic-small-8px);` |
| Отступ 16px | `--spaces-semantic-large-16px` | `padding: var(--spaces-semantic-large-16px);` |
| Радиус 8px | `--sm-8px` | `border-radius: var(--sm-8px);` |
| Радиус 12px | `--md-12px` | `border-radius: var(--md-12px);` |
| Основной шрифт | `--font-family-paragraph` | `font-family: var(--font-family-paragraph);` |
| Paragraph 14/130 | `--font-family-paragraph`, `--font-weight-body-paragraph`, `--font-sizes-body-small-14px` | `font-family: var(--font-family-paragraph); font-size: var(--font-sizes-body-small-14px); line-height: 130%;` |

## Пример компонента

```css
.ufo-example {
  display: flex;
  gap: var(--spaces-semantic-small-8px);
  padding: var(--spaces-semantic-large-16px);
  color: var(--text-primary);
  background: var(--background-secondary);
  border: 1px solid var(--stroke-border);
  border-radius: var(--sm-8px);
  font-family: var(--font-family-paragraph);
}

.ufo-example[aria-disabled='true'] {
  color: var(--text-disabled);
  background: var(--background-disabled);
}
```

## Рекомендации для разработки компонентов

| Правило | Почему |
|---|---|
| Использовать semantic tokens, а не hex-значения | Компонент автоматически адаптируется к светлой и тёмной теме. |
| Не использовать core colors напрямую | Core-палитра не описывает назначение цвета, поэтому сложнее поддерживать состояния. |
| Не использовать `--100`, `--200` напрямую в компонентах | Эти имена встречаются в нескольких файлах и могут конфликтовать. |
| Для цветов выбирать роль: `text`, `background`, `stroke`, `icon`, `controls` | Так компонент остаётся предсказуемым и совпадает с моделью токенов. |
| Для spacing использовать `--spaces-semantic-*` | Это сохраняет единую сетку отступов. |
| Для радиусов использовать `--xs-4px` ... `--xl-20px` | Радиусы уже вынесены в отдельную шкалу. |
| Перед использованием typography tokens проверить значения | В `typography-desktop.css` и `typography-mobile.css` часть font-size токенов сейчас равна `0px`. |

## Минимальный шаблон темы

```css
/* Пример итогового слоя токенов после оборачивания экспортированных деклараций */
:root {
  --space-gray-0: #ffffff;
  --space-gray-800: #333333;
  --jupiter-orange-200: #fc8507;
  --text-primary: var(--space-gray-800);
  --background-primary: #f7f7f7;
  --spaces-semantic-small-8px: 8px;
  --sm-8px: 8px;
}

[data-theme='dark'] {
  --text-primary: var(--space-gray-0);
  --background-primary: var(--space-gray-900);
}
```
