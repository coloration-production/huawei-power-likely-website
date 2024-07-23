<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'MobilePowerSystem' })
</script>

<template>
  <div class="mobile-power-system">
    <!-- -->
    <img class="absolute relative z-1 w-full" src="/mobile-power-system.png" alt="">
    <div class="absolute top-20 z-2 w-full">
      <!-- -->

      <section class="h-194 bg-op-30" style="background-image: url(/)">
        <TheAlignContainer class="h-full bg-blue bg-op-30 pl-9 pt-78">
          <div class="mb-0 text-7xl text-white font-700">
            移动电源系统
          </div>
        </TheAlignContainer>
      </section>
      <section class="h-214 bg-red bg-op-30 pt-12">
        <SplitTitle title="产品信息" />
      </section>
      <section class="h-213 bg-op-30" />
      <section class="h-223 bg-pink bg-op-30 pt-8">
        <SplitTitle title="应用场景" />
      </section>
      <section class="h-213 bg-green bg-op-30 pt-10">
        <SplitTitle title="联系我们" color="#ffffff" class="mb-10" />
        <ContactForm />
      </section>
    </div>
  </div>
</template>

<style lang="postcss">
.mobile-power-system {
  @apply relative z-2;
}
</style>
