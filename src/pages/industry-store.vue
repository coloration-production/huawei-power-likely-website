<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'IndustryStore' })
</script>

<template>
  <div class="industry-store">
    <!-- -->
    <img class="absolute relative z-1 w-full" src="/industry-store.png" alt="">
    <div class="absolute top-20 z-2 w-full">
      <!-- -->

      <section class="h-194 bg-op-30" style="background-image: url(/)">
        <TheAlignContainer class="h-full bg-blue bg-op-30 pl-9 pt-58">
          <div class="mb-0 text-[3.6rem] text-white font-700 text-shadow text-shadow-color-black">
            企业储能
          </div>
          <div class="text-5xl text-white text-shadow text-shadow-color-black">
            更多发电 更多储能 更多收益
          </div>
          <div class="flex gap-5 pt-11">
            <button class="rounded-full bg-white px-6 py-2">
              立即预定
            </button>
            <button class="rounded-full bg-white px-6 py-2">
              预约咨询
            </button>
          </div>
        </TheAlignContainer>
      </section>
      <section class="h-214 bg-red bg-op-30" />
      <section class="h-213 bg-op-30" />
      <section class="h-426 bg-pink bg-op-30 pt-15">
        <SplitTitle title="产品信息" />
      </section>
      <section class="h-214 bg-green bg-op-30 pt-17">
        <SplitTitle title="应用场景" />
      </section>
      <section class="h-369 bg-op-30 pt-10">
        <SplitTitle title="联系我们" color="#ffffff" class="mb-10" />

        <ContactForm />
      </section>
    </div>
  </div>
</template>

<style lang="postcss">
.industry-store {
  @apply relative z-2;
}
</style>
