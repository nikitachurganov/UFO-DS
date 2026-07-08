# UFO Design System

Vue-проект для разработки и демонстрации компонентов дизайн-системы.

## Стек

- Vue 3
- TypeScript
- Vite
- CSS custom properties для дизайн-токенов

## Команды

```bash
npm install
npm run prepare:tokens
npm run dev
npm run build
npm run validate:tokens
npm run test
npm run verify
npm run storybook
npm run build-storybook
npm run new:component -- ComponentName
npm run new:component -- ComponentName --dry-run
```

## Структура

```text
src/
  components/       Vue-компоненты дизайн-системы и Storybook-истории
  test/             setup для компонентных тестов
  styles/           дизайн-токены и стили компонентов
  App.vue           лёгкий playground проекта
.agents/
  component-spec-template.md
  component-ready-checklist.md
```

## Токены

Инструкция по использованию дизайн-токенов находится в [TOKENS.md](./TOKENS.md).

## Добавление компонента

1. Скопируйте и заполните спецификацию из `.agents/component-spec-template.md`.
2. Создайте каркас компонента:

   ```bash
   npm run new:component -- ComponentName
   ```

3. Реализуйте компонент в `src/components/ComponentName.vue`.
4. Обновите тесты в `src/components/ComponentName.test.ts`.
5. Обновите истории в `src/components/ComponentName.stories.ts`.
6. Проверьте чеклист `.agents/component-ready-checklist.md`.
7. Запустите `npm run verify`.

Storybook является основным местом ревью компонентов. `App.vue` не нужно обновлять для каждого нового компонента, если не нужен отдельный локальный playground.

Компоненты не должны создавать собственные CSS-токены или алиасы вроде `--button-bg`. Если нужного токена нет или маппинг из Figma неясен, нужно остановиться и уточнить токен, а не подбирать похожий.

## Правила для агента

Основные правила реализации компонентов описаны в [AGENTS.md](./AGENTS.md). Они фиксируют стек, работу с токенами, требования к Storybook, доступности и критериям готовности.
