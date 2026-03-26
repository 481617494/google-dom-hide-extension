import { HIDE_TARGET_ELEMENT, type HideTargetMessage } from './types'

let lastRightClickedElement: HTMLElement | SVGElement | null = null

function resolveTarget(target: EventTarget | null): HTMLElement | SVGElement | null {
  if (target instanceof HTMLElement || target instanceof SVGElement) {
    return target
  }

  if (target instanceof Node && target.parentElement) {
    if (target.parentElement instanceof HTMLElement || target.parentElement instanceof SVGElement) {
      return target.parentElement
    }
  }

  return null
}

window.addEventListener(
  'contextmenu',
  (event) => {
    lastRightClickedElement = resolveTarget(event.target)
  },
  true
)

chrome.runtime.onMessage.addListener((message: HideTargetMessage) => {
  if (message.type !== HIDE_TARGET_ELEMENT || !lastRightClickedElement) {
    return
  }

  lastRightClickedElement.style.setProperty('display', 'none', 'important')
  lastRightClickedElement = null
})
