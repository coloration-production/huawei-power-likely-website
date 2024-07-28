<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'ScrollCardView' })

const props = withDefaults(defineProps<{
  items: { icon: string, title: string, desc: string }[]
  percent: number
}>(), {

})

function getCardStyle(percent: number, stageOffset: number) {
  const len = props.items.length
  const x1 = 0.1 + stageOffset * 0.15
  const x2 = x1 + 0.12
  // [0.1, 0.2]
  // [0.25, 0.35]
  // [0.4, 0.5]
  // [0.55, 0.65]
  // [0.7, 0.8]
  const y1 = 0.25 + stageOffset * 0.15
  const y2 = y1 + 0.1
  // [0.25, 0.35]
  // [0.4, 0.5]
  // [0.55, 0.65]
  // [0.7, 0.8]
  // [0.85, 0.95]

  // x1 - x2
  const stage1Range = (Math.min(Math.max(percent, x1), x2) - x1) / (x2 - x1)

  // y1 - y2
  const stage2Range = (Math.min(Math.max(percent, y1), y2) - y1) / (y2 - y1)

  return {
    transform: `translateY(${(1 - stage1Range) * (Math.min(stageOffset, 1) * 800) - (stage2Range * (len - stageOffset) * 20)}px) scale(${1 - (0.03 * (len - stageOffset) * stage2Range)})`,
    opacity: 1 - (0.02 * stage2Range * (len - stageOffset)), // 1 -> 0.8
  }
}
</script>

<template>
  <div class="scroll-card-view">
    <!-- -->
    <BlackCard
      v-for="(item, i) in items"
      :key="i"
      class="absolute"
      :style="getCardStyle(percent, i)"
      :icon="item.icon"
      :title="item.title"
      :desc="item.desc"
    />
  </div>
</template>

<style lang="postcss">
.scroll-card-view {
  @apply relative;
}
</style>
