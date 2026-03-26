<script setup lang="ts">
const steps = [
  '在页面任意位置点击鼠标右键',
  '选择“隐藏当前元素”',
  '当前命中的元素会立即隐藏'
]
</script>

<template>
  <main class="popup">
    <h1 class="popup__title">隐藏当前元素</h1>
    <p class="popup__desc">这是一个最小可用版本，仅对当前页面临时生效。</p>
    <ol class="popup__list">
      <li v-for="step in steps" :key="step">{{ step }}</li>
    </ol>
  </main>
</template>
