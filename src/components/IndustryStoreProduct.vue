<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'IndustryStoreProduct' })

withDefaults(defineProps<{
  cover: string
  title: string
  sub: string
  desc: string
  coverRight?: boolean
}>(), {
  coverRight: false,
})
</script>

<template>
  <div class="industry-store-product">
    <!-- -->
    <div class="deco-bg" :class="coverRight ? 'right' : 'left'" />
    <TheAlignContainer>
      <div class="flex" :class="coverRight ? 'flex-row-reverse' : ''">
        <div>
          <img :src="cover" class="w-144 pt-6" alt="">
        </div>
        <div class="flex flex-1 flex-col justify-start pt-37" :class="coverRight ? 'items-start' : 'items-end'">
          <div class="mb-9 text-[3.5rem] font-700">
            {{ title }}
          </div>
          <div class="mb-5 text-2xl text-black tracking-wider">
            {{ sub }}
          </div>
          <div class="w-110 text-xl text-gray-500" :class="coverRight ? 'text-left' : 'text-right'">
            {{ desc }}
          </div>
        </div>
      </div>
    </TheAlignContainer>
  </div>
</template>

<style lang="postcss">
.industry-store-product {
  @apply relative h-150;
}

.deco-bg {
  @apply absolute h-120 top-15;
}

.deco-bg.left {
  @apply left-0 right-1/2  rounded-r-full;
  background: linear-gradient(90deg, #bcd3ff 1%, #f0f4fe 100%);
}

.deco-bg.right {
  @apply right-0 left-1/2 rounded-l-full;
  background: linear-gradient(-90deg, #cfe4e3 0%, #f2f7fc 100%);
}
</style>
