<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'TabBtnGroup' })
</script>

<template>
  <div class="tab-btn-group" data-aos="fade-up" data-aos-delay="200">
    <!-- -->
    <slot />
  </div>
</template>

<style lang="postcss">
.tab-btn-group {
  @apply h-23 flex items-center gap-14 rounded-2xl bg-white px-12 shadow;
}

.tab-btn-group > button {
  @apply text-[1.7rem];
}

.tab-btn-group > button.active {
  @apply text-blue-500;
}
</style>
