<script setup lang="ts">
import { headerRequest } from '~/api/common'

defineOptions({
  name: 'IndexPage',
})
headerRequest({ type: 1 })
</script>

<template>
  <div class="company-page">
    <img class="absolute relative z-1 mx-auto" src="/company.png" alt="">
    <div class="absolute top-25 z-2 w-full">
      <section class="h-125 bg-op-30" style="background-image: url(/)">
        <TheAlignContainer class="h-full bg-blue bg-op-30 pt-45">
          <div class="mb-0 text-[5.5rem] text-white font-700">
            公司介绍
          </div>
        </TheAlignContainer>
      </section>
      <div class="company-info">
        <TheAlignContainer>
          <div class="pb-10 pt-12 text-center text-[2.2rem]">
            企 ｜ 业 ｜ 介 ｜ 绍
          </div>
          <div class="description indent-8 text-xl text-gray-600 font-thin leading-8">
            <p>
              傲强集团旗下子公司，自2018年起其母公司总部位于中国永年。河北傲强金属制品集团有限公司下设邯郸市嘉冠金属制品有限公司、邯郸胜冠金属制品制造有限公司。南京傲强机电安装工程有限公司、北京钇嘉国际贸易有限公司。公司占地面积10000平方米，现有员工500余人。
            </p>
            <p>
              北京钇嘉国际贸易有限公司是一家专业提供一站式智慧能源解决方案、全套家庭储能配置、太阳能电器、商用储能的企业。工业光伏储能研发、生产、销售、安装一站式服务。
              高质量的产品和出色的客户服务帮助该组织获得了覆盖亚洲、南美、欧洲和非洲的全球销售网络，并且正在快速增长。 如果您对我们的任何产品感兴趣或想讨论定制订单，请随时与我们联系。
              我们期待与世界各地的新客户建立成功的业务关系。
            </p>
          </div>
          <div class="pb-20 pt-6">
            <img class="mx-auto h-100 w-full" src="https://fakeimg.pl/1200x400/282828/?text=%E5%8D%A0%E4%BD%8D%E5%9B%BE&font=noto" alt="" srcset="">
          </div>
        </TheAlignContainer>
      </div>
      <div class="company-photo-wall h-180 bg-blue bg-op-30">
        <TheAlignContainer>
          <div class="pb-10 pt-14 text-center text-[2.2rem]">
            公 ｜ 司 ｜ 概 ｜ 况
          </div>
          <div class="photo-swiper">
            aaa
          </div>
        </TheAlignContainer>
      </div>
      <div class="company-aptitude h-180">
        <TheAlignContainer>
          <div class="pb-4 pt-8 text-center text-[2.2rem]">
            资 ｜ 质 ｜ 认 ｜ 证
          </div>
          <div class="text-center text-xl text-neutral-500 font-thin">
            文案需要修改文案需要修改文案需要修改文案需要修改文案需要修改文案需要修改文案
          </div>
          <div class="aptitude-swiper">
            bbb
          </div>
        </TheAlignContainer>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.company-page {
  @apply relative z-2;
}

.description > p {
  @apply mb-8;
}
</style>
