<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'MobilePowerSystem' })
</script>

<template>
  <div class="mobile-power-system">
    <!-- -->
    <img class="relative z-1 mx-auto w-[1920px]" src="/mobile-power-system.png" alt="">
    <div class="absolute top-26 z-2 w-full">
      <!-- -->

      <section class="h-244 bg-cover" style="background-image: url(/mobile-power-system-01.png)">
        <TheAlignContainer class="h-full pt-98">
          <div class="mb-0 text-8xl text-white font-700">
            移动电源系统
          </div>
        </TheAlignContainer>
      </section>
      <section class="h-270 bg-white pt-12">
        <TheAlignContainer class="pt-4">
          <SplitTitle title="产品信息" class="mb-9" />
          <TabButtonGroup class="mb-9">
            <button class="active">
              双向逆变储能电源
            </button>
            <button>
              双提式户外储能电源
            </button>
            <button>
              便携式手提电源
            </button>
          </TabButtonGroup>

          <div class="relative mb-8 h-70 rounded-2xl">
            <img class="absolute inset-0 z-1" src="/mobile-power-system-02-01.png" alt="">

            <div class="relative z-2 px-10 pt-14 text-shadow text-shadow-color-black">
              <div class="mb-7 text-2xl text-white font-700 tracking-wider text-shadow text-shadow-color-black">
                双向逆变储能电源
              </div>
              <div class="text-[1.2rem] text-white tracking-wider">
                产品简介或者数据参数产品简介或者数据参数
                <br>
                产品简介
              </div>
            </div>
          </div>

          <div class="grid grid-cols-4 mb-11 gap-5">
            <div
              v-for="i in 4" :key="i"
              class="h-84 overflow-hidden rounded-xl bg-white bg-op-30"
            >
              <img src="/houselord-03.png" class="mb-4 h-50" alt="">
              <div class="h-25 flex items-center justify-center px-10 text-center text-2xl">
                {{ '双向逆变储能电源' }}
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <RouterLink>
              <BlueButton>查看更多</BlueButton>
            </RouterLink>
          </div>
        </TheAlignContainer>
      </section>
      <section class="h-270 bg-cover" style="background-image: url(/mobile-power-system-03.png)" />
      <section class="h-282 bg-sky-100 pt-10">
        <SplitTitle title="应用场景" />

        <TheAlignContainer>
          <div class="grid grid-cols-4 grid-rows-3 gap-5 pt-10">
            <div class="relative row-span-2">
              <img class="h-full w-full" src="/mobile-power-system-04-01.png" alt="">
              <div class="mps-card-desc">
                野外垂钓用电
              </div>
            </div>
            <div class="relative col-span-2 row-span-2">
              <img class="h-full w-full" src="/mobile-power-system-04-02.png" alt="">
              <div class="mps-card-desc">
                野外垂钓用电
              </div>
            </div>
            <div class="relative">
              <img class="h-full w-full" src="/mobile-power-system-04-03.png" alt="">
              <div class="mps-card-desc">
                野外垂钓用电
              </div>
            </div>
            <div class="relative">
              <img class="h-full w-full" src="/mobile-power-system-04-04.png" alt="">
              <div class="mps-card-desc">
                野外垂钓用电
              </div>
            </div>
            <div class="relative col-span-2">
              <img class="h-full w-full" src="/mobile-power-system-04-05.png" alt="">
              <div class="mps-card-desc">
                野外垂钓用电
              </div>
            </div>
            <div class="relative col-span-2">
              <div class="mps-card-desc">
                野外垂钓用电
              </div>
              <img class="h-full w-full" src="/mobile-power-system-04-06.png" alt="">
            </div>
          </div>
        </TheAlignContainer>
      </section>
      <section class="h-270 bg-cover pt-12" style="background-image: url(/mobile-power-system-05.png)">
        <SplitTitle title="联系我们" color="#ffffff" class="mb-11" />
        <ContactForm />
      </section>
    </div>
  </div>
</template>

<style lang="postcss">
.mobile-power-system {
  @apply relative z-2;
}

.mps-card-desc {
  @apply absolute z-1 bottom-0 rounded-b-2xl bg-black bg-op-40 w-full h-21 flex items-center px-5 text-white text-2xl font-700 tracking-wider;
}
</style>
