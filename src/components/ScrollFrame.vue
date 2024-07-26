<script lang="ts" setup>
import { getOffsetFromBody } from '@coloration/kit'
import { defineOptions } from 'vue'

defineOptions({ name: 'ScrollFrame' })

let parentScrollDistance = 0
const frameRef = ref<HTMLDivElement>()
const parentRef = useParentElement()
const { y } = useWindowScroll()
const parentBounding = useElementBounding(parentRef)

const topOffset = computed(() => {
  return y.value - parentScrollDistance + window.screen.availHeight
})

const inRange = computed(() => {
  const pHeight = parentBounding.height.value

  return topOffset.value < 0
    ? -1
    : topOffset.value > pHeight
      ? 1
      : 0
})

const percent = computed(() => {
  if (inRange.value < 0)
    return 0
  if (inRange.value > 0)
    return 1
  return topOffset.value / parentBounding.height.value
})

onMounted(() => {
  if (parentRef.value) {
    nextTick(() => {
      const position = getOffsetFromBody(parentRef.value as HTMLElement)
      parentScrollDistance = position.top
    })
  }
})
</script>

<template>
  <div ref="frameRef" class="scroll-frame" :class="{ fix: inRange }">
    <!-- -->
    <slot v-bind="{ percent, inRange }" />
  </div>
</template>

<style lang="postcss">
.scroll-frame {
  @apply top-0 z-10 sticky w-full;
}
</style>
