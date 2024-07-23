<script lang="ts" setup>
import { defineOptions } from 'vue';

defineOptions({ name: 'the-align-container' })


</script>

<template>
  <div class="the-align-container">
    <!-- -->
    <slot></slot>
  </div>
</template>

<style lang="postcss">
.the-align-container {
  @apply
    max-w-[1024px]
    mx-auto
    relative
  ;
}
</style>
