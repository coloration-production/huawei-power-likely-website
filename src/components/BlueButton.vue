<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'BlueBtn' })

withDefaults(defineProps<{
  size?: 'md' | 'lg'
}>(), {
  size: 'md',
})
</script>

<template>
  <div class="blue-btn gradient-blue-bg inline-flex" :class="size">
    <!-- -->
    <slot />
  </div>
</template>

<style lang="postcss">
.blue-btn {
  @apply text-white hover:shadow-lg tracking-wider rounded-full text-sm  px-7;
}

.blue-btn.md {
  @apply py-3;
}
.blue-btn.lg {
  @apply py-4;
}
</style>
