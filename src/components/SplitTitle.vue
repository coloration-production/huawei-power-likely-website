<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'SplitTitle' })

const props = withDefaults(defineProps<{
  title?: string
  color?: string
}>(), {
  title: '',
  color: '#000000',
})

const titleStr = computed(() => {
  const t = props.title || ''
  // return t.split('').join('|')
  return t
})
</script>

<template>
  <div class="split-title" :style="{ color }" data-aos="fade-up">
    <!-- -->
    {{ titleStr }}
  </div>
</template>

<style lang="postcss">
.split-title {
  @apply w-full text-center font-700 text-[2.3rem];
  letter-spacing: 1.1rem;
}
</style>
