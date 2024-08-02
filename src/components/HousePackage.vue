<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'HousePackage' })

withDefaults(defineProps<{
  title: string
  sub: string
  cover: string
  link?: string
  btnTxt?: string
  coverRight?: boolean
  group: { title: string, titleSuffix: string, sub: string, desc: string }[]
}>(), {

})
</script>

<template>
  <div class="house-package">
    <!-- -->
    <img :src="cover" class="absolute bottom-0 z-1 w-129" :class="coverRight ? 'right-0' : 'left-0'" alt="">
    <div
      class="absolute inset-0 z-2 flex flex-col px-10 pt-9"
      :class="coverRight ? 'items-start' : 'items-end'"
    >
      <div
        class="mb-2 max-w-1/2 truncate text-[1.4rem] font-700 tracking-widest"
        v-html="title"
      />
      <div class="text-md text-gray-500" v-html="sub" />

      <div class="mb-7 flex gap-10 pt-7">
        <div v-for="(item, i) in group" :key="i" class="flex flex-col" :class="coverRight ? 'items-start' : 'items-end'">
          <div class="mb-2 flex items-end">
            <span class="text-4xl font-700" v-html="item.title" />
            <template v-if="item.titleSuffix">
              /<span class="text-md font-700" v-html="item.titleSuffix" />
            </template>
          </div>
          <div class="text-md mb-7" v-html="item.sub" />
          <div
            class="text-md text-gray-700 line-height-[1.9]"
            :class="coverRight ? 'text-left' : 'text-right'"

            v-html="item.desc"
          />
        </div>
      </div>
      <RouterLink :to="link">
        <BlueButton>{{ btnTxt }}</BlueButton>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="postcss">
.house-package {
  @apply relative h-110 bg-[#F7F9FF] border-1 border-blue-500 rounded-2xl;
}
</style>
