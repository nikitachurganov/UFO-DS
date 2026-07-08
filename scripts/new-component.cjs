const fs = require('fs')
const path = require('path')

const rootDir = path.resolve(__dirname, '..')
const componentsDir = path.join(rootDir, 'src', 'components')
const indexPath = path.join(componentsDir, 'index.ts')

const args = process.argv.slice(2)
const isDryRun = args.includes('--dry-run')
const rawName = args.find((arg) => arg !== '--dry-run')

if (!rawName) {
  fail('Usage: npm run new:component -- ComponentName')
}

const componentName = toPascalCase(rawName)

if (!/^[A-Z][A-Za-z0-9]*$/.test(componentName)) {
  fail(`Invalid component name "${rawName}". Use letters and numbers, starting with a letter.`)
}

const className = toKebabCase(componentName)
const componentPath = path.join(componentsDir, `${componentName}.vue`)
const testPath = path.join(componentsDir, `${componentName}.test.ts`)
const storiesPath = path.join(componentsDir, `${componentName}.stories.ts`)
const storiesCssPath = path.join(componentsDir, `${componentName}.stories.css`)

for (const filePath of [componentPath, testPath, storiesPath, storiesCssPath]) {
  if (fs.existsSync(filePath)) {
    fail(`${relative(filePath)} already exists.`)
  }
}

if (isDryRun) {
  console.log(`Would create ${relative(componentPath)}`)
  console.log(`Would create ${relative(testPath)}`)
  console.log(`Would create ${relative(storiesPath)}`)
  console.log(`Would create ${relative(storiesCssPath)}`)
  console.log(`Would update ${relative(indexPath)}`)
} else {
  fs.mkdirSync(componentsDir, { recursive: true })
  fs.writeFileSync(componentPath, componentTemplate(componentName, className), 'utf8')
  fs.writeFileSync(testPath, testTemplate(componentName), 'utf8')
  fs.writeFileSync(storiesPath, storiesTemplate(componentName, className), 'utf8')
  fs.writeFileSync(storiesCssPath, storiesCssTemplate(className), 'utf8')
  upsertExport(componentName)

  console.log(`Created ${relative(componentPath)}`)
  console.log(`Created ${relative(testPath)}`)
  console.log(`Created ${relative(storiesPath)}`)
  console.log(`Created ${relative(storiesCssPath)}`)
  console.log(`Updated ${relative(indexPath)}`)
}

function fail(message) {
  console.error(message)
  process.exit(1)
}

function relative(filePath) {
  return path.relative(rootDir, filePath).replaceAll(path.sep, '/')
}

function toPascalCase(value) {
  return value
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

function toKebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

function upsertExport(componentName) {
  const line = `export { default as ${componentName} } from './${componentName}.vue'`
  const current = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, 'utf8') : ''
  const lines = current
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean)

  if (!lines.includes(line)) {
    lines.push(line)
  }

  lines.sort((a, b) => a.localeCompare(b))
  fs.writeFileSync(indexPath, `${lines.join('\n')}\n`, 'utf8')
}

function componentTemplate(componentName, className) {
  return `<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    disabled?: boolean
    skeleton?: boolean
  }>(),
  {
    disabled: false,
    skeleton: false,
  },
)

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

function handleClick(event: MouseEvent) {
  if (props.disabled || props.skeleton) {
    return
  }

  emit('click', event)
}
</script>

<template>
  <button
    class="${className}"
    :class="{
      '${className}--skeleton': skeleton,
    }"
    type="button"
    :disabled="disabled || skeleton"
    :aria-busy="skeleton || undefined"
    @click="handleClick"
  >
    <span class="${className}__label">
      <slot>${componentName}</slot>
    </span>
  </button>
</template>

<style scoped>
.${className} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spaces-semantic-small-8px);
  min-height: calc(
    var(--spaces-semantic-small-8px) + var(--spaces-semantic-small-8px) + 1em
  );
  padding: var(--spaces-semantic-small-8px) var(--spaces-semantic-large-16px);
  border: 1px solid var(--stroke-border);
  border-radius: var(--sm-8px);
  color: var(--text-primary);
  background: var(--background-secondary);
  cursor: pointer;
  font-family: var(--font-family-paragraph);
  font-size: var(--font-sizes-body-small-14px);
  font-weight: var(--font-weight-body-paragraph);
  line-height: 130%;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    color 160ms ease;
}

.${className}:hover:not(:disabled) {
  background: var(--background-input-gray-hover);
}

.${className}:focus-visible {
  border-color: var(--stroke-border-dark);
  outline: none;
}

.${className}--preview-hover:not(:disabled) {
  background: var(--background-input-gray-hover);
}

.${className}--preview-focus {
  border-color: var(--stroke-border-dark);
}

.${className}:disabled {
  cursor: not-allowed;
}

.${className}:disabled:not(.${className}--skeleton) {
  color: var(--text-disabled);
  background: var(--background-disabled);
}

.${className}--skeleton {
  color: transparent;
  background: var(--background-skeleton);
}

.${className}--skeleton .${className}__label {
  visibility: hidden;
}

.${className}__label {
  white-space: nowrap;
}
</style>
`
}

function storiesTemplate(componentName, className) {
  return `import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ${componentName} from './${componentName}.vue'
import './${componentName}.stories.css'

type ${componentName}StoryArgs = InstanceType<typeof ${componentName}>['$props'] & {
  label: string
}

const meta = {
  title: 'Components/${componentName}',
  component: ${componentName},
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Content inside the component.',
      table: {
        category: 'Content',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the component.',
      table: {
        category: 'State',
      },
    },
    skeleton: {
      control: 'boolean',
      description: 'Shows the skeleton state.',
      table: {
        category: 'State',
      },
    },
  },
  args: {
    label: '${componentName}',
    disabled: false,
    skeleton: false,
  },
  render: (args) => ({
    components: { ${componentName} },
    setup() {
      return { args }
    },
    template: \`
      <${componentName}
        :disabled="args.disabled"
        :skeleton="args.skeleton"
      >
        {{ args.label }}
      </${componentName}>
    \`,
  }),
} satisfies Meta<${componentName}StoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
  },
}

export const States: Story = {
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      description: {
        story: 'State matrix for design review.',
      },
    },
  },
  render: () => ({
    components: { ${componentName} },
    template: \`
      <div class="${className}-story-grid">
        <div class="${className}-story-grid__head">State</div>
        <div class="${className}-story-grid__head">Preview</div>

        <div class="${className}-story-grid__label">default</div>
        <${componentName}>${componentName}</${componentName}>

        <div class="${className}-story-grid__label">hover</div>
        <${componentName} class="${className}--preview-hover">${componentName}</${componentName}>

        <div class="${className}-story-grid__label">focus</div>
        <${componentName} class="${className}--preview-focus">${componentName}</${componentName}>

        <div class="${className}-story-grid__label">disabled</div>
        <${componentName} disabled>${componentName}</${componentName}>

        <div class="${className}-story-grid__label">skeleton</div>
        <${componentName} skeleton>${componentName}</${componentName}>
      </div>
    \`,
  }),
}
`
}

function testTemplate(componentName) {
  return `import { mount } from '@vue/test-utils'
import { axe } from 'vitest-axe'
import { describe, expect, it } from 'vitest'
import ${componentName} from './${componentName}.vue'

describe('${componentName}', () => {
  it('renders slot content', () => {
    const wrapper = mount(${componentName}, {
      slots: {
        default: '${componentName}',
      },
    })

    expect(wrapper.text()).toContain('${componentName}')
  })

  it('emits click when enabled', async () => {
    const wrapper = mount(${componentName}, {
      slots: {
        default: '${componentName}',
      },
    })

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(${componentName}, {
      props: {
        disabled: true,
      },
      slots: {
        default: '${componentName}',
      },
    })

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('has no obvious accessibility violations', async () => {
    const wrapper = mount(${componentName}, {
      slots: {
        default: '${componentName}',
      },
      attachTo: document.body,
    })

    expect(await axe(wrapper.element)).toHaveNoViolations()
    wrapper.unmount()
  })
})
`
}

function storiesCssTemplate(className) {
  return `.${className}-story-grid {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: var(--spaces-semantic-large-16px);
  align-items: center;
}

.${className}-story-grid__head,
.${className}-story-grid__label {
  color: var(--text-secondary);
  font-family: var(--font-family-paragraph);
  font-size: var(--font-sizes-body-small-14px);
  font-weight: var(--font-weight-body-paragraph);
  line-height: 130%;
}

.${className}-story-grid__head {
  font-weight: 700;
}
`
}
