<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'ScrollCard' })

withDefaults(defineProps<{
  icon: string
  title: string
}>(), {

})
</script>

<template>
  <div class="scroll-card">
    <!-- -->
    <div class="flex flex-col">
      <img :src="icon" alt="">
      <div class="gradient-blue-bg h-[4px] rounded-full" />
      <div>{{ title }}</div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.scroll-card {
  @apply;
}
</style>
