<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'HouseLandlord' })
</script>

<template>
  <div class="house-landlord">
    <img class="absolute relative z-1 w-full" src="/house-landlord.png" alt="">
    <div class="absolute top-20 z-2 w-full">
      <!-- -->

      <section class="h-194 bg-op-30" style="background-image: url(/)">
        <TheAlignContainer class="h-full bg-blue bg-op-30 pl-9 pt-45">
          <div class="mb-0 text-[3.6rem] text-white font-700">
            家庭绿电
          </div>
          <div class="text-5xl text-white">
            墅式光储能
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
      <section class="h-213 bg-orange bg-op-30" />
      <section class="h-213 bg-pink bg-op-30 pt-13">
        <SplitTitle title="产品信息" />
      </section>
      <section class="h-214 bg-green bg-op-30 pt-18">
        <SplitTitle title="案例展示" />
      </section>
      <section class="h-369 bg-blue bg-op-30 pt-13">
        <SplitTitle title="套餐展示" />
      </section>
      <section class="h-213 bg-teal bg-op-30 pt-10">
        <SplitTitle title="联系我们" color="#ffffff" class="mb-9" />
        <ContactForm />
      </section>
    </div>
  </div>
</template>

<style lang="postcss">
.house-landlord {
  @apply relative z-2;
}
</style>
