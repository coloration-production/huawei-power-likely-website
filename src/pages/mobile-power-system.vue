<script lang="ts" setup>
import { defineOptions } from 'vue'
import { movepowerRequest } from '~/api/common'

defineOptions({ name: 'MobilePowerSystem' })

const pageData = ref<any>(null)
const chanpinArr = ref<any>([])
const productInfo = ref<any>([])
const applicationList = ref<any>([])

const store = useCommonStore()

onBeforeMount(() => {
  store.preloadScrollImage('powerbank')
})

onMounted(async () => {
  const result: any = await movepowerRequest({ type: 1 })
  pageData.value = result.data
  chanpinArr.value = [
    { title: result.data.chanpin_title_one, desc: result.data.chanpin_desc_one },
    { title: result.data.chanpin_title_two, desc: result.data.chanpin_desc_two },
    { title: result.data.chanpin_title_three, desc: result.data.chanpin_desc_three },
    { title: result.data.chanpin_title_four, desc: result.data.chanpin_desc_four },
    { title: result.data.chanpin_title_five, desc: result.data.chanpin_desc_five },
  ]
  productInfo.value = [
    { title: result.data.chanpin_info_one_title, sub_title: result.data.chanpin_info_one_content_title, desc: result.data.chanpin_info_one_content_desc, img: result.data.chanpin_info_one_img },
    { title: result.data.chanpin_info_two_title, sub_title: result.data.chanpin_info_two_content_title, desc: result.data.chanpin_info_two_content_desc, img: result.data.chanpin_info_two_img },
    { title: result.data.chanpin_info_three_title, sub_title: result.data.chanpin_info_three_content_title, desc: result.data.chanpin_info_three_content_desc, img: result.data.chanpin_info_three_img },
  ]
  applicationList.value = result.data.application_list
})
</script>

<template>
  <div class="mobile-power-system">
    <section class="h-244 bg-cover" style="background-image: url(/mobile-power-system-01.png)" data-aos="fade-up">
      <TheAlignContainer class="h-full pt-98">
        <div class="mb-0 text-8xl text-white font-700" data-aos="fade-up" data-aos-delay="200">
          {{ pageData?.banner_desc.split('|')[0] }}
          {{ pageData?.banner_desc.split('|')[1] }}
        </div>
      </TheAlignContainer>
    </section>
    <!-- 产品信息 -->
    <section class="h-270 bg-[#EDF1F6] pt-12">
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

        <div class="relative mb-8 h-70 rounded-2xl bg-white" data-aos="fade-up" data-aos-delay="400">
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
            v-for="i in 4" :key="i" data-aos="fade-up" :data-aos-delay="300 + i * 100"
            class="h-84 overflow-hidden rounded-xl bg-white bg-op-30 shadow-lg"
          >
            <img src="/houselord-03.png" class="mb-4 h-50" alt="">
            <div class="h-25 flex items-center justify-center px-10 text-center text-2xl">
              {{ '双向逆变储能电源' }}
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <RouterLink to="/product">
            <BlueButton>查看更多</BlueButton>
          </RouterLink>
        </div>
      </TheAlignContainer>
    </section>
    <section class="relative h-[5000px] bg-cover">
      <ScrollFrame
        v-slot="{ percent }"
        class="h-278"
        style="background-image: url(https://bjyjgjmy-yxgs.oss-us-east-1.aliyuncs.com/ui/powerbank/000.png)"
      >
        <img class="w-full" :src="store.getScrollImageUrl('powerbank', percent)">
      </ScrollFrame>
    </section>
    <section class="h-282 bg-sky-100 pt-10">
      <SplitTitle title="应用场景" />

      <TheAlignContainer data-aos="fade-up">
        <div class="grid grid-cols-4 grid-rows-3 gap-5 pt-10">
          <div class="relative row-span-2" data-aos="fade-up" data-aos-delay="200">
            <img class="h-full w-full" src="/mobile-power-system-04-01.png" alt="">
            <div class="mps-card-desc">
              野外垂钓用电
            </div>
          </div>
          <div class="relative col-span-2 row-span-2" data-aos="fade-up" data-aos-delay="500">
            <img class="h-full w-full" src="/mobile-power-system-04-02.png" alt="">
            <div class="mps-card-desc">
              野外垂钓用电
            </div>
          </div>
          <div class="relative" data-aos="fade-up" data-aos-delay="300">
            <img class="h-full w-full" src="/mobile-power-system-04-03.png" alt="">
            <div class="mps-card-desc">
              野外垂钓用电
            </div>
          </div>
          <div class="relative" data-aos="fade-up" data-aos-delay="400">
            <img class="h-full w-full" src="/mobile-power-system-04-04.png" alt="">
            <div class="mps-card-desc">
              野外垂钓用电
            </div>
          </div>
          <div class="relative col-span-2" data-aos="fade-up" data-aos-delay="100">
            <img class="h-full w-full" src="/mobile-power-system-04-05.png" alt="">
            <div class="mps-card-desc">
              野外垂钓用电
            </div>
          </div>
          <div class="relative col-span-2" data-aos="fade-up" data-aos-delay="200">
            <div class="mps-card-desc">
              野外垂钓用电
            </div>
            <img class="h-full w-full" src="/mobile-power-system-04-06.png" alt="">
          </div>
        </div>
      </TheAlignContainer>
    </section>
    <section v-if="pageData?.call_me_power === 1" class="h-270 bg-cover pt-12" :style="`background-image: url(${pageData?.call_me_img});`">
      <SplitTitle :title="pageData?.call_me_title" color="#ffffff" class="mb-11" />
      <ContactForm :labelform="pageData?.call_me_list" />
    </section>
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
