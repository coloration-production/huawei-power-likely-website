<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'ProductPage' })
</script>

<template>
  <div class="product-page">
    <section class="h-124 bg-cover" style="background-image: url(/product-01.png)" data-aos="fade-up">
      <TheAlignContainer class="pt-50">
        <div class="text-8xl font-700 tracking-wide" data-aos="fade-up" data-aos-delay="100">
          产品
        </div>
      </TheAlignContainer>
    </section>

    <section class="h-394 bg-white pt-10">
      <TheAlignContainer>
        <div class="mb-5 flex gap-4" data-aos="fade-up" data-aos-delay="200">
          <div class="product-tab-btn">
            <img src="/product-02-icon01.png" alt="">
            用户式储能
          </div>
          <div class="product-tab-btn active">
            <img src="/product-02-icon02.png" alt="">
            工商业储能
          </div>
          <div class="product-tab-btn">
            <img src="/product-02-icon03.png" alt="">
            灌溉系统
          </div>
          <div class="product-tab-btn">
            <img src="/product-02-icon04.png" alt="">
            移动电源
          </div>
        </div>

        <TabButtonGroup class="mb-6">
          <button class="active">
            全部产品
          </button>
          <button>电池组</button>
          <button>逆变器</button>
        </TabButtonGroup>

        <div class="grid grid-cols-3 grid-rows-2 mb-8 gap-6" data-aos="fade-up" data-aos-delay="100">
          <HouseProduct
            v-for="i in 6" :key="i" class="flex-1" cover="/houselord-03.png" title="单项5KW-10KWH堆叠式储能"
            sub="智能组件控制器" desc="适配多种类型组件，简单易用<br /> 自动生成组件排布图<5S" more-link=""
          />
        </div>

        <div class="pagination">
          <div class="w-25">
            上一页
          </div>
          <div>1</div>
          <div>2</div>
          <div class="active">
            3
          </div>
          <div>...</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div class="w-25">
            下一页
          </div>
        </div>
      </TheAlignContainer>
    </section>
  </div>
</template>

<style lang="postcss">
.product-page {
  @apply relative z-2;
}

.product-tab-btn {
  @apply flex items-center flex-1 border-[2px] border-transparent h-30 shadow rounded-3xl pl-12 text-2xl gap-4 tracking-wider;
}

.product-tab-btn.active {
  @apply text-blue-600 border-blue;
}

.product-tab-btn img {
  @apply w-12;
}

.pagination {
  @apply flex justify-end gap-4.5;
}

.pagination > div {
  @apply border border-gray-400 rounded-full min-w-13 text-center py-1.5 text-xl text-gray-500;
}

.pagination > div:hover,
.pagination > div.active {
  @apply text-white;
  background: linear-gradient(90deg, #2c76f4 0%, #519dff 100%);
}
</style>
