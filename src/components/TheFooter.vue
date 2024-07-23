<script lang="ts" setup>
import { defineOptions } from 'vue';

defineOptions({ name: 'the-footer' })


</script>

<template>
  <div class="the-footer">
    <!-- -->
    <TheAlignContainer>
      the footer content

    </TheAlignContainer>
  </div>
</template>

<style lang="postcss">
.the-footer {
  @apply border-t h-40 border-t-black bg-gray-200 dark:border-t-white dark:bg-gray-700;
}
</style>
