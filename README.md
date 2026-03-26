# 隐藏当前元素 Chrome 插件

一个基于 Vue 3 + TypeScript + Vite + Manifest V3 的 Chrome 扩展。

功能很简单：在网页上右键某个元素后，点击菜单项 **“隐藏当前元素”**，即可将当前命中的 DOM 元素隐藏。

## 功能说明

- 支持浏览器右键菜单
- 支持隐藏当前右键命中的元素
- 仅当前页面临时生效
- 不包含撤销、恢复、持久化功能

## 技术栈

- Vue 3
- TypeScript
- Vite
- `@crxjs/vite-plugin`
- Chrome Extension Manifest V3

## 项目结构

```text
google_dom/
├── dist/
├── src/
│   ├── App.vue
│   ├── background.ts
│   ├── content.ts
│   ├── env.d.ts
│   ├── main.ts
│   ├── styles.css
│   └── types.ts
├── index.html
├── manifest.config.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 安装依赖

```bash
npm install
```

## 本地开发

```bash
npm run build
```

构建完成后会生成 `dist/` 目录。

## 加载到 Chrome

1. 打开 `chrome://extensions/`
2. 打开右上角“开发者模式”
3. 点击“加载已解压的扩展程序”
4. 选择当前项目的 `dist/` 目录

## 使用方式

1. 打开任意网页
2. 将鼠标移动到要隐藏的元素上
3. 点击鼠标右键
4. 选择 **“隐藏当前元素”**
5. 当前命中的元素会被隐藏

## 注意事项

- 修改代码后，需要重新执行：

```bash
npm run build
```

- 然后去 `chrome://extensions/` 页面点击扩展的“刷新”按钮
- 某些特殊页面可能受浏览器限制，content script 不会生效，例如 Chrome 内置页面
- 当前版本只做最小功能，不支持刷新后保留隐藏状态

## 核心实现

### 1. 记录右键命中的元素

`src/content.ts` 中监听 `contextmenu` 事件，记录最近一次右键命中的 DOM 元素。

### 2. 注册右键菜单

`src/background.ts` 中注册菜单项 **“隐藏当前元素”**。

### 3. 执行隐藏

点击菜单后，background 向对应页面 frame 发送消息，由 content script 将目标元素设置为：

```ts
style.setProperty('display', 'none', 'important')
```

## 已知限制

- 只隐藏当前右键命中的元素，不会自动隐藏父级容器
- 不支持撤销
- 不支持恢复全部元素
- 不支持跨刷新持久化

## 后续可扩展方向

- 撤销上一次隐藏
- 恢复本页全部元素
- 按 URL 持久化隐藏规则
- 支持隐藏父级容器
- 支持元素选择高亮预览
