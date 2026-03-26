import { HIDE_TARGET_ELEMENT, type HideTargetMessage } from './types'

const MENU_ID = 'hide-current-element'

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ID,
    title: '隐藏当前元素',
    contexts: ['all']
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== MENU_ID || !tab?.id) {
    return
  }

  const message: HideTargetMessage = { type: HIDE_TARGET_ELEMENT }
  const options = typeof info.frameId === 'number' ? { frameId: info.frameId } : undefined

  chrome.tabs.sendMessage(tab.id, message, options)
})
