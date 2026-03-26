import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  manifest_version: 3,
  name: '隐藏当前元素',
  version: '0.0.1',
  description: '通过右键菜单隐藏当前鼠标命中的页面元素。',
  permissions: ['contextMenus', 'tabs'],
  host_permissions: ['<all_urls>'],
  background: {
    service_worker: 'src/background.ts',
    type: 'module'
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/content.ts'],
      run_at: 'document_start',
      all_frames: true
    }
  ],
  action: {
    default_popup: 'index.html',
    default_title: '隐藏当前元素'
  }
})
