import React, { type KeyboardEvent, type ReactNode, useEffect, useId, useMemo, useRef, useState } from 'react'
import './DocsTabs.css'

export type DocsTab = {
  id: string
  label: string
  children: ReactNode
}

export type DocsTabsProps = {
  tabs: DocsTab[]
  defaultTabId?: string
}

export function DocsTabs({ tabs, defaultTabId }: DocsTabsProps) {
  const generatedId = useId()
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const firstTabId = tabs[0]?.id
  const initialTabId = tabs.some((tab) => tab.id === defaultTabId) ? defaultTabId : firstTabId
  const [activeTabId, setActiveTabId] = useState(initialTabId)
  const [focusedTabId, setFocusedTabId] = useState(initialTabId)

  useEffect(() => {
    if (!tabs.some((tab) => tab.id === activeTabId)) {
      setActiveTabId(firstTabId)
    }

    if (!tabs.some((tab) => tab.id === focusedTabId)) {
      setFocusedTabId(firstTabId)
    }
  }, [activeTabId, firstTabId, focusedTabId, tabs])

  const activeTab = useMemo(
    () => tabs.find((tab) => tab.id === activeTabId) ?? tabs[0],
    [activeTabId, tabs],
  )

  if (!tabs.length || !activeTab) {
    return null
  }

  function focusTab(nextIndex: number) {
    const nextTab = tabs[nextIndex]

    if (!nextTab) {
      return
    }

    setFocusedTabId(nextTab.id)
    window.requestAnimationFrame(() => {
      tabRefs.current[nextIndex]?.focus()
    })
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number, tabId: string) {
    const lastIndex = tabs.length - 1

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault()
        focusTab(index === lastIndex ? 0 : index + 1)
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault()
        focusTab(index === 0 ? lastIndex : index - 1)
        break
      case 'Home':
        event.preventDefault()
        focusTab(0)
        break
      case 'End':
        event.preventDefault()
        focusTab(lastIndex)
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        setActiveTabId(tabId)
        setFocusedTabId(tabId)
        break
      default:
        break
    }
  }

  return (
    <div className="docs-tabs">
      <div className="docs-tabs__list" role="tablist">
        {tabs.map((tab, index) => {
          const tabId = `${generatedId}-${tab.id}-tab`
          const panelId = `${generatedId}-${tab.id}-panel`
          const isActive = tab.id === activeTab.id

          return (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[index] = node
              }}
              className="docs-tabs__tab"
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={tab.id === focusedTabId ? 0 : -1}
              onClick={() => {
                setActiveTabId(tab.id)
                setFocusedTabId(tab.id)
              }}
              onFocus={() => setFocusedTabId(tab.id)}
              onKeyDown={(event) => handleKeyDown(event, index, tab.id)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div
        className="docs-tabs__panel"
        id={`${generatedId}-${activeTab.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${generatedId}-${activeTab.id}-tab`}
        tabIndex={0}
      >
        {activeTab.children}
      </div>
    </div>
  )
}
