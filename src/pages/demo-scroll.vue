<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'DemoScroll' })
const { y } = useWindowScroll()

function dynamicStyle(p: number) {
  // 0% - 50% => 0% - 100%
  const xPercent = Math.min(p, 0.5) * 2

  // 70% - 100% => 0% - 100%
  const yPercent = (Math.max(p, 0.7) - 0.7) / (1 - 0.7)
  return {
    transform: `translate(${50 * xPercent}vw, ${-50 * yPercent}vh)`,
  }
}
</script>

<template>
  <div class="demo-scroll">
    <ScrollFrame
      v-slot="{ inRange, percent }"
      :distance="y"
      :range="[200, 1000]"
    >
      <div
        v-if="inRange >= 0"
        class="fixed top-50 h-20 w-20 border border-black"
        :style="dynamicStyle(percent)"
      >
        {{ percent }}
      </div>
    </ScrollFrame>
    <p v-for="i in 1000" :key="i" class="h-20" :style="{ background: i % 2 === 0 ? '#eee' : '' }" />
  </div>
</template>

<style lang="postcss">
.demo-scroll {
  @apply h-[5000px];
}
</style>
