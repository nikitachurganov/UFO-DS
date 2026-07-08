import { mount } from '@vue/test-utils'
import { axe } from 'vitest-axe'
import { describe, expect, it, vi } from 'vitest'
import DismissibleTag from './DismissibleTag.vue'
import OperationalTag from './OperationalTag.vue'
import ReadOnlyTag from './ReadOnlyTag.vue'
import SelectableTag from './SelectableTag.vue'
import Tag from './Tag.vue'

describe('ReadOnlyTag', () => {
  it('uses hug width styles from the shared base', () => {
    const wrapper = mount(ReadOnlyTag, {
      props: {
        label: 'Archived',
      },
      attachTo: document.body,
    })

    const surfaceStyle = getComputedStyle(wrapper.get('.read-only-tag__container').element)

    expect(surfaceStyle.width).not.toBe('100%')
    wrapper.unmount()
  })

  it('renders slot content without interactive elements', async () => {
    const wrapper = mount(ReadOnlyTag, {
      slots: {
        default: 'Archived',
        leading: '<span data-test="leading">I</span>',
      },
    })

    expect(wrapper.text()).toContain('Archived')
    expect(wrapper.find('[data-test="leading"]').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(false)
    expect(wrapper.find('a').exists()).toBe(false)
    expect(wrapper.find('input').exists()).toBe(false)
    expect(wrapper.attributes('tabindex')).toBeUndefined()
    expect(wrapper.classes()).not.toContain('ufo-tag--interactive')

    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    expect(wrapper.emitted('dismiss')).toBeUndefined()
  })

  it('renders text inside a padded text wrapper', () => {
    const wrapper = mount(ReadOnlyTag, {
      props: {
        label: 'Archived',
      },
    })

    const textWrapper = wrapper.get('.read-only-tag__text-wrapper')

    expect(textWrapper.text()).toContain('Archived')
    expect(textWrapper.classes()).toContain('read-only-tag__text-wrapper')
  })

  it('does not inherit disabled or click listeners', async () => {
    const onClick = vi.fn()
    const wrapper = mount(ReadOnlyTag, {
      props: {
        label: 'Archived',
      },
      attrs: {
        disabled: '',
        onClick,
      },
    })

    expect(wrapper.attributes('disabled')).toBeUndefined()

    await wrapper.get('.read-only-tag').trigger('click')

    expect(onClick).not.toHaveBeenCalled()
  })

  it('applies a size class used for icon sizing in each size', () => {
    const sizes = ['tiny', 'small', 'medium', 'large'] as const

    for (const size of sizes) {
      const wrapper = mount(ReadOnlyTag, {
        props: {
          size,
        },
        slots: {
          leading: '<span data-test="icon"></span>',
        },
      })

      expect(wrapper.classes()).toContain(`read-only-tag--${size}`)
      expect(wrapper.find('.read-only-tag__icon').exists()).toBe(true)
    }
  })

  it('supports the orange accent read-only variant', () => {
    const wrapper = mount(ReadOnlyTag, {
      props: {
        color: 'orange-accent',
        size: 'medium',
        label: 'Moscow',
      },
      slots: {
        leading: '<span data-test="icon"></span>',
      },
    })

    expect(wrapper.classes()).toContain('read-only-tag--orange-accent')
    expect(wrapper.find('.read-only-tag__icon').exists()).toBe(true)
    expect(wrapper.text()).toContain('Moscow')
  })
})

describe('OperationalTag', () => {
  it('renders a button when href is omitted', () => {
    const wrapper = mount(OperationalTag, {
      props: {
        label: 'Use suggestion',
      },
    })

    const button = wrapper.get('button')

    expect(button.attributes('type')).toBe('button')
    expect(button.text()).toContain('Use suggestion')
  })

  it('renders an anchor when href is provided', () => {
    const wrapper = mount(OperationalTag, {
      props: {
        href: '/catalog',
        label: 'Catalog',
      },
    })

    const link = wrapper.get('a')

    expect(link.attributes('href')).toBe('/catalog')
    expect(link.text()).toContain('Catalog')
  })

  it('adds a safe rel default for blank link targets', () => {
    const wrapper = mount(OperationalTag, {
      props: {
        href: '/catalog',
        target: '_blank',
      },
    })

    expect(wrapper.get('a').attributes('rel')).toBe('noopener noreferrer')
  })

  it('emits click from button actions', async () => {
    const wrapper = mount(OperationalTag, {
      props: {
        label: 'Open',
      },
    })

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not expose a disabled state', () => {
    const wrapper = mount(OperationalTag, {
      props: {
        label: 'Always actionable',
      },
    })

    expect(wrapper.attributes('disabled')).toBeUndefined()
    expect(wrapper.attributes('aria-disabled')).toBeUndefined()
  })
})

describe('SelectableTag', () => {
  it('uses checkbox semantics and updates boolean v-model', async () => {
    const wrapper = mount(SelectableTag, {
      props: {
        modelValue: false,
        label: 'Moscow',
      },
    })

    const input = wrapper.get('input')

    expect(input.attributes('type')).toBe('checkbox')

    await input.setValue(true)

    expect(wrapper.emitted('update:modelValue')).toEqual([[true]])
  })

  it('reflects selected and disabled states', async () => {
    const wrapper = mount(SelectableTag, {
      props: {
        modelValue: true,
        disabled: true,
      },
    })

    const input = wrapper.get('input')

    expect(input.element.checked).toBe(true)
    expect(input.attributes('disabled')).toBeDefined()

    await input.trigger('click')
    await input.trigger('change')

    expect(wrapper.emitted('click')).toBeUndefined()
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })
})

describe('DismissibleTag', () => {
  it('emits dismiss only from the close button', async () => {
    const wrapper = mount(DismissibleTag, {
      props: {
        label: 'Moscow',
      },
    })

    await wrapper.get('.ufo-tag').trigger('click')

    expect(wrapper.emitted('dismiss')).toBeUndefined()

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted('dismiss')).toHaveLength(1)
  })

  it('uses an accessible close label and blocks disabled dismiss', async () => {
    const wrapper = mount(DismissibleTag, {
      props: {
        closeAriaLabel: 'Remove Moscow',
        disabled: true,
      },
    })

    const button = wrapper.get('button')

    expect(button.attributes('aria-label')).toBe('Remove Moscow')
    expect(button.attributes('disabled')).toBeDefined()

    await button.trigger('click')

    expect(wrapper.emitted('dismiss')).toBeUndefined()
  })
})

describe('Tag compatibility wrapper', () => {
  it('keeps array multi compatibility', async () => {
    const wrapper = mount(Tag, {
      props: {
        mode: 'multi',
        modelValue: ['Apple'],
        value: 'Samsung',
      },
    })

    await wrapper.get('input').setValue(true)

    expect(wrapper.emitted('update:modelValue')).toEqual([[['Apple', 'Samsung']]])
  })

  it('keeps scalar single compatibility through checkbox-like selection', async () => {
    const wrapper = mount(Tag, {
      props: {
        mode: 'single',
        modelValue: 'Apple',
        value: 'Samsung',
      },
    })

    await wrapper.get('input').setValue(true)

    expect(wrapper.emitted('update:modelValue')).toEqual([['Samsung']])
  })
})

describe('Tag accessibility', () => {
  it('has no obvious selectable accessibility violations', async () => {
    const wrapper = mount(SelectableTag, {
      props: {
        label: 'Moscow',
      },
      attachTo: document.body,
    })

    const results = await axe(wrapper.element)

    expect(results.violations).toEqual([])
    wrapper.unmount()
  })

  it('has no obvious dismissible accessibility violations', async () => {
    const wrapper = mount(DismissibleTag, {
      props: {
        label: 'Moscow',
        closeAriaLabel: 'Remove Moscow',
      },
      attachTo: document.body,
    })

    const results = await axe(wrapper.element)

    expect(results.violations).toEqual([])
    wrapper.unmount()
  })

  it('has no obvious operational accessibility violations', async () => {
    const wrapper = mount(OperationalTag, {
      props: {
        label: 'Moscow',
      },
      attachTo: document.body,
    })

    const results = await axe(wrapper.element)

    expect(results.violations).toEqual([])
    wrapper.unmount()
  })
})
