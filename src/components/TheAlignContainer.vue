<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'TheAlignContainer' })
</script>

<template>
  <div class="the-align-container">
    <!-- -->
    <slot />
  </div>
</template>

<style lang="postcss">
.the-align-container {
  @apply max-w-[1200px]
    mx-auto
    relative;
}
</style>
