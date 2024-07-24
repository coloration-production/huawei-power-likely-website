<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'HouseProduct' })

withDefaults(defineProps<{
  cover: string
  title: string
  sub: string
  desc: string
  moreLink: string
}>(), {

})
</script>

<template>
  <div class="house-product">
    <!-- -->
    <img class="mb-6 h-46 w-full" :src="cover" alt="">
    <div class="title">
      {{ title }}
    </div>
    <div class="mb-6 truncate text-xs text-gray-500">
      {{ sub }}
    </div>
    <div class="mb-6 text-center text-gray-600" v-html="desc" />
    <router-link :to="moreLink" class="mb-8 text-blue">
      查看更多
    </router-link>
  </div>
</template>

<style lang="postcss">
.house-product {
  @apply flex flex-col items-center rounded-2xl overflow-hidden border-2px border-transparent;
}
.house-product:hover,
.house-product.active {
  @apply border-blue-500;
  background: #f4f6fc;
}

.house-product .title {
  @apply px-2 text-xl font-700 mb-7 truncate text-gray-700;
}
</style>
