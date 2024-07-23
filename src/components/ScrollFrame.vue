<script lang="ts" setup>
import { defineOptions } from 'vue';

defineOptions({ name: 'scroll-frame' })

const props = withDefaults(defineProps<{
  distance: number,
  range: [number, number]
}>(), {
  distance: 0
})

const percent = computed(() => {
  const [start, end] = props.range
  const v = ((props.distance - start) / (end - start)).toFixed(2)
  return Math.min(Math.max(0, Number(v)), 1)
})

const inRange = computed(() => {
  const [start, end] = props.range
  const d = props.distance
  return d < start ? -1
                   : d > end 
                     ? 1
                     : 0
})


</script>

<template>
  <div class="scroll-frame">
    <!-- -->
    <slot v-bind="{ percent, inRange }"></slot>
  </div>
</template>

<style lang="postcss">
.scroll-frame {
  @apply fixed;
}
</style>
