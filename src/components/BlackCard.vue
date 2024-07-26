<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'BlackCard' })

withDefaults(defineProps<{
  icon: string
  title: string
  desc: string
}>(), {

})
</script>

<template>
  <div class="black-card">
    <!-- -->
    <div class="text-white">
      <img class="mb-10 h-14 w-14" :src="icon" alt="">
      <div class="gradient-blue-bg mb-9 h-4px w-14 rounded-full" />
      <div class="mb-9 text-3xl tracking-widest" v-html="title" />
      <div class="pl-2 text-[1.2rem] tracking-widest" v-html="desc.replace(/\|/g, '<br />')" />
    </div>
  </div>
</template>

<style lang="postcss">
.black-card {
  @apply w-130 h-130 flex flex-col bg-[#212123] rounded-3xl pl-12 pr-16 py-19;
}
</style>
