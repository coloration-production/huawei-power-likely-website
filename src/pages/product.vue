<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'ProductPage' })
</script>

<template>
  <div class="product-page">
    <img class="absolute relative z-1 w-full" src="/product.png" alt="">
  </div>
</template>

<style lang="postcss">
.product-page {
  @apply relative z-2;
}
</style>
