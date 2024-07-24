<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'HousePackage' })

withDefaults(defineProps<{
  title: string
  sub: string
  cover: string
  link?: string
  coverRight?: boolean
  group: { title: string, titleSuffix: string, sub: string, desc: string }[]
}>(), {

})
</script>

<template>
  <div class="house-package">
    <!-- -->
    <img :src="cover" class="absolute bottom-0 z-1 w-103" :class="coverRight ? 'right-0' : 'left-0'" alt="">
    <div
      class="absolute inset-0 z-2 flex flex-col px-8 pt-7"
      :class="coverRight ? 'items-start' : 'items-end'"
    >
      <div class="mb-1 w-1/2 truncate text-lg font-700 tracking-widest" v-html="title" />
      <div class="text-[0.8rem] text-gray-500" v-html="sub" />

      <div class="mb-5 flex gap-4 pt-4">
        <div v-for="(item, i) in group" :key="i" class="flex flex-col" :class="coverRight ? 'items-start' : 'items-end'">
          <div class="flex items-end">
            <span class="text-[1.7rem] font-700 tracking-wider" v-html="item.title" />
            /<span class="text-sm font-700" v-html="item.titleSuffix" />
          </div>
          <div class="mb-6 text-[0.8rem]" v-html="item.sub" />
          <div
            class="text-[0.8rem] text-gray-700 line-height-[1.9] tracking-wider"
            :class="coverRight ? 'text-left' : 'text-right'"

            v-html="item.desc"
          />
        </div>
      </div>
      <RouterLink :to="link">
        <BlueButton>查看详情</BlueButton>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="postcss">
.house-package {
  @apply relative h-88 bg-[#F7F9FF] border-1 border-blue-500 rounded-2xl;
}
</style>
