<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'HouseLandlord' })
</script>

<template>
  <div class="house-landlord">
    <img class="relative z-1 mx-auto w-[1920px]" src="/house-landlord.png" alt="">
    <div class="absolute top-26 z-2 w-full">
      <!-- -->

      <section class="h-245 bg-cover" style="background-image: url(/houselord-01.png)">
        <TheAlignContainer class="h-full pt-60">
          <div class="mb-4 text-7xl text-white font-700">
            家庭绿电
          </div>
          <div class="text-6xl text-white">
            墅式光储能
          </div>
          <div class="flex gap-8 pt-15">
            <button class="rounded-full bg-white px-7 py-3 text-xl">
              立即预定
            </button>
            <button class="rounded-full bg-white px-7 py-3 text-xl">
              预约咨询
            </button>
          </div>
        </TheAlignContainer>
      </section>
      <section class="h-270 bg-red bg-op-30" />
      <section class="h-268 bg-cover" style="background-image: url(/houselord-03.png)" />
      <section class="h-270 pt-17">
        <SplitTitle title="产品信息" />
        <TheAlignContainer class="pt-16">
          <TabButtonGroup>
            <button class="active">
              全部产品
            </button>
            <button>
              电池组
            </button>
            <button>
              逆变器
            </button>
          </TabButtonGroup>
          <div class="grid grid-cols-3 grid-rows-1 gap-6 pt-8">
            <HouseProduct
              v-for="i in 3"
              :key="i"
              class="flex-1"
              cover="/houselord-03.png"
              title="单项5KW-10KWH堆叠式储能"
              sub="智能组件控制器"
              desc="适配多种类型组件，简单易用<br /> 自动生成组件排布图<5S"
              more-link=""
            />
          </div>

          <div class="flex justify-center pt-24">
            <RouterLink to="">
              <BlueButton>查看更多</BlueButton>
            </RouterLink>
          </div>
        </TheAlignContainer>
      </section>
      <section class="h-270 bg-op-30 pt-24">
        <SplitTitle title="案例展示" />

        <TheAlignContainer class="pt-20">
          <div class="grid grid grid-cols-4 grid-rows-3 h-190 gap-4">
            <div>
              <img class="h-full w-full" src="/houselord-04-01.png" alt="">
            </div>
            <div>
              <img class="h-full w-full" src="/houselord-04-02.png" alt="">
            </div>
            <div>
              <img class="h-full w-full" src="/houselord-04-03.png" alt="">
            </div>
            <div class="row-span-2">
              <img class="h-full w-full" src="/houselord-04-04.png" alt="">
            </div>
            <div class="row-span-2">
              <img class="h-full w-full" src="/houselord-04-05.png" alt="">
            </div>
            <div class="col-span-2">
              <img class="h-full w-full scale-125 transform-gpu" src="/houselord-04-06.png" alt="">
            </div>
            <div>
              <img class="h-full w-full" src="/houselord-04-07.png" alt="">
            </div>
            <div class="col-span-2">
              <img class="h-full w-full" src="/houselord-04-08.png" alt="">
            </div>
          </div>
        </TheAlignContainer>
      </section>
      <section class="h-467 bg-red bg-op-30">
        <TheAlignContainer class="pt-18">
          <SplitTitle title="套餐展示" class="mb-18" />
          <div class="flex flex-col gap-26">
            <HousePackage
              v-for="i in [1, 2, 3]"
              :key="i"
              title="单相5KW/15KWH离网发电系统清单表"
              sub="可匹配家用电器5000W以内持续运行3个小时(根据功率大小计算相应运行时间）时间=电池电量/功率"
              :cover="`/houselord-05-0${i}.png`"
              link=""
              :cover-right=" i % 2 === 1"
              :group="[
                {
                  title: '5KWH',
                  titleSuffix: '3台',
                  sub: '堆叠式电磁组',
                  desc: '光伏电缆连接插件: MC4 <br />光伏电缆4mm<br />输出控制箱:2P40A',
                },
                {
                  title: '5KWH',
                  titleSuffix: '3台',
                  sub: '堆叠式电磁组',
                  desc: '光伏电缆连接插件: MC4 <br />光伏电缆4mm<br />输出控制箱:2P40A',
                },
                {
                  title: '5KWH',
                  titleSuffix: '3台',
                  sub: '堆叠式电磁组',
                  desc: '光伏电缆连接插件: MC4 <br />光伏电缆4mm<br />输出控制箱:2P40A',
                },
              ]"
            />
          </div>
        </TheAlignContainer>
      </section>
      <section class="h-213 bg-cover pt-12 op-30" style="background-image: url(/houselord-06.png);">
        <SplitTitle title="联系我们" color="#ffffff" class="mb-10" />
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
