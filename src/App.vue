<script setup lang="ts">
import { ref } from 'vue'
import { DismissibleTag, OperationalTag, ReadOnlyTag, SelectableTag } from './components'

const selectedCity = ref(false)
</script>

<template>
  <main class="app-shell">
    <section class="intro">
      <p class="eyebrow">UFO Design System</p>
      <h1>Tag</h1>
      <p class="lead">
        Компактная локальная песочница для read-only, selectable, dismissible и operational тегов.
      </p>
    </section>

    <section class="component-preview" aria-label="Tag playground">
      <div class="interactive-demo">
        <p class="interactive-demo__label">Мультивыбор</p>
        <SelectableTag v-model="selectedCity" label="Москва" value="moscow" />
      </div>

      <div class="interactive-demo">
        <p class="interactive-demo__label">Удаляемый тег</p>
        <DismissibleTag label="Выбрано" close-aria-label="Удалить выбранный тег" />
      </div>

      <div class="interactive-demo">
        <p class="interactive-demo__label">Operational и read-only</p>
        <OperationalTag label="Акция" href="#" color="orange" />
        <ReadOnlyTag label="Архив" color="blue" />
      </div>
    </section>
  </main>
</template>
