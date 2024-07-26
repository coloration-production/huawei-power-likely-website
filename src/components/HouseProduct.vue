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
  <div class="house-product box-border cursor-pointer shadow-md">
    <!-- -->
    <img class="mb-6 h-60 w-full object-cover" :src="cover" alt="">
    <div class="title w-full text-center">
      {{ title }}
    </div>
    <div class="text-md mb-8 truncate text-gray-500">
      {{ sub }}
    </div>
    <div class="mb-8 px-5 text-center text-xl text-gray-600" v-html="desc" />
    <router-link :to="moreLink" class="mb-8 text-xl text-blue">
      查看更多
    </router-link>
  </div>
</template>

<style lang="postcss">
.house-product {
  @apply flex h-138 flex-col items-center rounded-2xl shadow-lg overflow-hidden border-2px border-transparent;
}
.house-product:hover,
.house-product.active {
  @apply border-blue-500;
  background: #f4f6fc;
}

.house-product .title {
  @apply px-4 text-[1.6rem] font-700 mb-7 truncate text-gray-700;
}
</style>
