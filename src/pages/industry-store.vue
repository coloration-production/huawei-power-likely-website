<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'IndustryStore' })
</script>

<template>
  <div class="industry-store">
    <section class="h-244 bg-cover" style="background-image: url(/industry-store-01.png)" data-aos="fade-up">
      <TheAlignContainer class="h-full pt-77">
        <div
          class="mb-4 text-7xl text-white font-700 text-shadow text-shadow-color-black"
          data-aos="fade-up" data-aos-delay="200"
        >
          企业储能
        </div>
        <div
          class="text-6xl text-white text-shadow text-shadow-color-black"
          data-aos="fade-up" data-aos-delay="400"
        >
          更多发电 更多储能 更多收益
        </div>
        <div class="flex gap-8 pt-15" data-aos="fade-up" data-aos-delay="500">
          <button class="rounded-full bg-white px-7 py-3 text-xl">
            立即预定
          </button>
          <button class="rounded-full bg-white px-7 py-3 text-xl">
            预约咨询
          </button>
        </div>
      </TheAlignContainer>
    </section>
    <section class="h-[5000px]">
      <ScrollFrame
        v-slot="{ percent }" class="h-270 bg-cover"
        style="background-image: url(/industry-store-02.png)"
      >
        <TheAlignContainer class="h-full w-full flex gap-20 pt-66">
          <div>
            <div class="mb-80 pt-16 text-[3.4rem] text-white font-500" data-aos="fade-up">
              端到端防护，无安全隐患
            </div>
            <div class="flex items-center justify-between" data-aos="fade-up" data-aos-delay="200">
              <img
                v-for="i in 5"
                :key="i"
                data-aos="fade-left" :data-aos-delay="300 + i * 100" class="h-12 w-12" :src="`/houselord-02-i0${i}.png`" alt=""
              >
            </div>
          </div>
          <ScrollCardView
            :percent="percent"
            :items="[
              {
                icon: '/houselord-02-i01.png',
                title: '业内领先级安全防护1',
                desc: '从光伏到储能，端到端防护措施保障系统安全',
              },
              {
                icon: '/houselord-02-i02.png',
                title: '业内领先级安全防护2',
                desc: '从光伏到储能，端到端防护措施保障系统安全',
              },
              {
                icon: '/houselord-02-i03.png',
                title: '业内领先级安全防护3',
                desc: '从光伏到储能，端到端防护措施保障系统安全',
              },
              {
                icon: '/houselord-02-i04.png',
                title: '业内领先级安全防护4',
                desc: '从光伏到储能，端到端防护措施保障系统安全',
              },
              {
                icon: '/houselord-02-i05.png',
                title: '业内领先级安全防护5',
                desc: '从光伏到储能，端到端防护措施保障系统安全',
              },

            ]"
          />
        </TheAlignContainer>
      </ScrollFrame>
    </section>
    <section class="h-270 bg-op-30 bg-cover" style="background-image: url(/industry-store-03.png)" />
    <section class="h-538 pt-18">
      <SplitTitle title="产品信息" />

      <div class="flex flex-col gap-15 pt-10">
        <IndustryStoreProduct
          v-for="i in 3" :key="i"
          :cover="`industry-store-05-0${i}.png`"
          :cover-right="i % 2 === 0"
          title="智能组件控制器"
          sub="企业安装光伏时的绝佳选择"
          desc="智能组件控制器可对光伏组件进行实时监控，帮助您更好的了解屋顶组件发电情况"
        />
      </div>
    </section>
    <section class="h-270 bg-[#E3ECFF] bg-op-30 pt-22">
      <SplitTitle title="应用场景" class="mb-2" />
      <div class="text-center text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
        可提供各种类型的安装方式，满足各行各业的不同需求
      </div>
    </section>
    <section class="h-270 bg-op-30 bg-cover pt-12" style="background-image: url(/industry-store-04.png)">
      <SplitTitle title="联系我们" color="#ffffff" class="mb-10" />

      <ContactForm />
    </section>
  </div>
</template>

<style lang="postcss">
.industry-store {
  @apply relative z-2;
}
</style>
