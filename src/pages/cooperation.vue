<script lang="ts" setup>
import { defineOptions } from 'vue'
import { callMe } from '~/api/common'

defineOptions({ name: 'Cooperation' })

const store = useCommonStore()

const pageData = ref<any>(null)

watch(() => store.lang, async (newLanguage) => {
  const result: any = await callMe({ type: newLanguage })
  pageData.value = result.data
})

onMounted(async () => {
  const result: any = await callMe({ type: store.lang })
  pageData.value = result.data
})
</script>

<template>
  <div class="cooperation">
    <section class="h-screen bg-cover" :style="`background-image: url(${pageData?.banner})`">
      <TheAlignContainer class="h-full pt-36">
        <div class="mb-7 text-7xl text-black font-700 text-shadow text-shadow-color-black">
          {{ pageData?.banner_title }}
        </div>
        <div class="coop-list">
          <div class="coop-list-item">
            <span class="coop-list-order">01</span>
            <div class="text-[1.6rem]">
              <span>您可以留下联系方式</span>
            </div>
          </div>
          <div class="coop-list-item">
            <span class="coop-list-order">02</span>
            <div class="flex flex-col text-[1.6rem]">
              <span>我们的销售顾问将联系您</span>
              <span>为您提供定制化的光伏解决方案</span>
            </div>
          </div>
        </div>
      </TheAlignContainer>
    </section>
    <section class="bg-white pt-10">
      <TheAlignContainer>
        <div class="flex justify-between">
          <div>
            <div class="mb-6 text-[2.5rem]">
              {{ pageData?.call_me_name }}
            </div>

            <div v-if="pageData" class="flex flex-col gap-8">
              <div
                v-for="(item, i) in [
                  { color: 'rgba(44, 119, 244, 0.16)', name: pageData.style_name, icon: '/product-02-icon01.png', user: pageData.call_name_style, email: pageData.call_email_style, mobile: pageData.call_mobile_style, show: pageData.show_style },
                  { color: 'rgba(242, 155, 30, 0.16)', name: pageData.ind_name, icon: '/product-02-icon02.png', user: pageData.call_name_ind, email: pageData.call_email_ind, mobile: pageData.call_mobile_ind, show: pageData.show_ind },
                  { color: 'rgba(179, 77, 243, 0.16)', name: pageData.irr_name, icon: '/product-02-icon03.png', user: pageData.call_name_irr, email: pageData.call_email_irr, mobile: pageData.call_mobile_irr, show: pageData.show_irr },
                  { color: 'rgba(62, 164, 77, 0.16)', name: pageData.power_name, icon: '/product-02-icon04.png', user: pageData.call_name_power, email: pageData.call_email_power, mobile: pageData.call_mobile_power, show: pageData.show_power },
                ]" v-show="item.show" :key="i"
              >
                <div
                  class="mb-3 inline-flex items-center gap-2 rounded-full bg-op-16 px-4 py-2 pr-6"
                  :style="{ backgroundColor: item.color }"
                >
                  <img class="w-8" :src="item.icon" alt="">
                  <span class="text-2xl tracking-widest">{{ item.name }}</span>
                </div>
                <div class="text-xl line-height-8 uppercase">
                  <div>邮箱：{{ item.email }}</div>
                  <div>联系人：{{ item.user }}</div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm v-if="pageData" :labelform="pageData" class="translate-x-20 rounded-xl shadow-lg -translate-y-52" />
        </div>
      </TheAlignContainer>
    </section>
  </div>
</template>

<style lang="postcss">
.cooperation {
  @apply relative z-2;
}

.coop-list {
  @apply flex flex-col gap-8 border-l-[2px] border-black pl-6;
}

.coop-list-item {
  @apply flex gap-4 py-1;
}

.coop-list-order::before {
  @apply content-empty absolute -left-7.5 top-3 w-3 h-3 border-r-[2px] border-b-[2px] border-black -rotate-45;
}

.coop-list-order {
  @apply text-4xl relative font-700;
}
</style>
