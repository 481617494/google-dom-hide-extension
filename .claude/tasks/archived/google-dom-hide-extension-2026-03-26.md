# 任务：谷歌插件右键隐藏 DOM
状态：已完成
创建：2026-03-26
更新：2026-03-26

## 需求摘要
- 开发一款基于 Vue 3 的 Chrome Manifest V3 插件，在浏览器右键菜单中提供“隐藏当前元素”，点击后隐藏当前鼠标右键命中的 DOM，且仅当前页面临时生效。

## 关键决策
- 使用 Vue 3 + TypeScript + Vite，并接入 @crxjs/vite-plugin 简化 Chrome 扩展构建。
- 通过 content script 监听 contextmenu 记录命中元素，通过 background service worker 响应右键菜单点击并向当前标签页发送隐藏消息。
- 仅实现最小功能版本，不做持久化、撤销或恢复。

## 实现计划
- [x] 1. 初始化 Vue 3 + MV3 扩展项目骨架与构建配置
- [x] 2. 实现右键记录目标元素与隐藏逻辑
- [x] 3. 补充 manifest 与最小 Vue 弹窗界面
- [x] 4. 自审并归档任务文件

## 已修改文件
- .claude/tasks/google-dom-hide-extension-2026-03-26.md
- package.json
- tsconfig.json
- vite.config.ts
- manifest.config.ts
- index.html
- src/env.d.ts
- src/types.ts
- src/background.ts
- src/content.ts
- src/main.ts
- src/App.vue
- src/styles.css
