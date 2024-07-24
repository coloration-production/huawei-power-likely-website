<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'HouseLandlord' })
</script>

<template>
  <div class="house-landlord">
    <img class="absolute relative z-1 w-full" src="/house-landlord.png" alt="">
    <div class="absolute top-20 z-2 w-full">
      <!-- -->

      <section class="h-194 bg-cover" style="background-image: url(/houselord-01.png)">
        <TheAlignContainer class="h-full pl-9 pt-45">
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
      <section class="h-213 bg-orange bg-op-30 bg-cover" style="background-image: url(/houselord-03.png)" />
      <section class="h-213 pt-13">
        <SplitTitle title="产品信息" />
        <TheAlignContainer class="px-9 pt-12">
          <div class="h-20 flex items-center gap-12 rounded-2xl bg-white px-10 shadow">
            <button class="active hl-tab-btn">
              全部产品
            </button>
            <button class="hl-tab-btn">
              电池组
            </button>
            <button class="hl-tab-btn">
              逆变器
            </button>
          </div>

          <div class="flex gap-6 pt-6">
            <HouseProduct
              cover="/houselord-03.png"
              title="单项5KW-10KWH堆叠式储能"
              sub="智能组件控制器"
              desc="适配多种类型组件，简单易用<br /> 自动生成组件排布图<5S"
              more-link=""
            />
            <HouseProduct
              cover="/houselord-03.png"
              title="单项5KW-10KWH堆叠式储能"
              sub="智能组件控制器"
              desc="适配多种类型组件，简单易用<br /> 自动生成组件排布图<5S"
              more-link=""
            />
            <HouseProduct
              cover="/houselord-03.png"
              title="单项5KW-10KWH堆叠式储能"
              sub="智能组件控制器"
              desc="适配多种类型组件，简单易用<br /> 自动生成组件排布图<5S"
              more-link=""
            />
          </div>

          <div class="flex justify-center pt-20">
            <RouterLink to="">
              <BlueButton>查看更多</BlueButton>
            </RouterLink>
          </div>
        </TheAlignContainer>
      </section>
      <section class="h-214 bg-op-30 pt-18">
        <SplitTitle title="案例展示" />

        <TheAlignContainer class="px-9 pt-16">
          <div class="grid grid grid-cols-4 grid-rows-3 h-150 gap-4">
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
      <section class="h-369 bg-op-30">
        <TheAlignContainer class="px-9 pt-13">
          <SplitTitle title="套餐展示" class="mb-16" />
          <div class="flex flex-col gap-20">
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
      <section class="h-213 bg-teal bg-cover pt-10" style="background-image: url(/houselord-06.png);">
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

.hl-tab-btn {
  @apply text-xl;
}

.hl-tab-btn.active {
  @apply text-blue-500;
}
</style>
