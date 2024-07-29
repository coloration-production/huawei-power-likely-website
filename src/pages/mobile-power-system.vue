<script lang="ts" setup>
import { defineOptions } from 'vue'
import { movepowerRequest } from '~/api/common'

defineOptions({ name: 'MobilePowerSystem' })

const pageData = ref<any>(null)
const productInfo = ref<any>([])
const applicationList = ref<any>([])
const curIndex = ref(0)

const store = useCommonStore()

onBeforeMount(() => {
  store.preloadScrollImage('powerbank')
})

onMounted(async () => {
  const result: any = await movepowerRequest({ type: 1 })
  pageData.value = result.data

  productInfo.value = [

    {
      title: result.data.chanpin_info_one_title,
      sub_title: result.data.chanpin_info_img_title,
      desc: result.data.chanpin_info_img_desc,
      img: result.data.chanpin_info_img,
      children: [
        { title: result.data.chanpin_info_one_title_one, img: result.data.chanpin_info_one_img_one },
        { title: result.data.chanpin_info_one_title_two, img: result.data.chanpin_info_one_img_two },
        { title: result.data.chanpin_info_one_title_three, img: result.data.chanpin_info_one_img_three },
        { title: result.data.chanpin_info_one_title_four, img: result.data.chanpin_info_one_img_four },
      ],
    },
    {
      title: result.data.chanpin_info_two_title,
      sub_title: result.data.chanpin_info_img_title,
      desc: result.data.chanpin_info_img_desc,
      img: result.data.chanpin_info_img,
      children: [
        { title: result.data.chanpin_info_two_title_one, img: result.data.chanpin_info_two_img_one },
        { title: result.data.chanpin_info_two_title_two, img: result.data.chanpin_info_two_img_two },
        { title: result.data.chanpin_info_two_title_three, img: result.data.chanpin_info_two_img_three },
        { title: result.data.chanpin_info_two_title_four, img: result.data.chanpin_info_two_img_four },
      ],
    },
    {
      title: result.data.chanpin_info_three_title,
      sub_title: result.data.chanpin_info_img_title,
      desc: result.data.chanpin_info_img_desc,
      img: result.data.chanpin_info_img,
      children: [
        { title: result.data.chanpin_info_three_title_one, img: result.data.chanpin_info_three_img_one },
        { title: result.data.chanpin_info_three_title_two, img: result.data.chanpin_info_three_img_two },
        { title: result.data.chanpin_info_three_title_three, img: result.data.chanpin_info_three_img_three },
        { title: result.data.chanpin_info_three_title_four, img: result.data.chanpin_info_three_img_four },
      ],
    },
  ]

  applicationList.value = [
    { title: result.data.application_one_title, img: result.data.application_one_img },
    { title: result.data.application_two_title, img: result.data.application_two_img },
    { title: result.data.application_three_title, img: result.data.application_three_img },
    { title: result.data.application_four_title, img: result.data.application_four_img },
    { title: result.data.application_five_title, img: result.data.application_five_img },
    { title: result.data.application_six_title, img: result.data.application_six_img },
  ]
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
        <SplitTitle :title="pageData?.chanpin_info_title" class="mb-9" />
        <TabButtonGroup class="mb-9">
          <button v-for="(item, i) in productInfo" :key="i" :class="curIndex === i ? 'active' : ''" @click="() => curIndex = i">
            {{ item.title }}
          </button>
          <!-- <button>
            双提式户外储能电源
          </button>
          <button>
            便携式手提电源
          </button> -->
        </TabButtonGroup>

        <div v-if="productInfo[curIndex]" class="relative mb-8 h-70 rounded-2xl bg-white" data-aos="fade-up" data-aos-delay="400">
          <img class="absolute inset-0 z-1" :src="productInfo[curIndex].img" alt="">

          <div class="relative z-2 px-10 pt-14 text-shadow text-shadow-color-black">
            <div class="mb-7 text-2xl text-white font-700 tracking-wider text-shadow text-shadow-color-black">
              {{ productInfo[curIndex].sub_title }}
            </div>
            <div class="text-[1.2rem] text-white tracking-wider">
              {{ productInfo[curIndex].desc }}
            </div>
          </div>
        </div>

        <div v-if="productInfo[curIndex]" class="grid grid-cols-4 mb-11 gap-5">
          <div
            v-for="(child, j) in productInfo[curIndex].children" :key="`${curIndex}_${j}`" data-aos="fade-up" :data-aos-delay="300 + j * 100"
            class="h-84 overflow-hidden rounded-xl bg-white bg-op-30 shadow-lg"
          >
            <img :src="child.img" class="mb-4 h-50 w-full object-cover" alt="">
            <div class="line-clamp-2 h-25 flex items-center justify-center px-10 text-center text-2xl">
              {{ child.title }}
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
    <section class="h-282 pt-10">
      <SplitTitle :title="pageData?.application_title" />

      <TheAlignContainer data-aos="fade-up">
        <div v-if="applicationList.length" class="grid grid-cols-4 grid-rows-3 gap-5 pt-10">
          <div class="relative row-span-2" data-aos="fade-up" data-aos-delay="200">
            <img class="h-full w-full" :src="applicationList[0].img" alt="">
            <div class="mps-card-desc">
              {{ applicationList[0].title }}
            </div>
          </div>
          <div class="relative col-span-2 row-span-2" data-aos="fade-up" data-aos-delay="500">
            <img class="h-full w-full" :src="applicationList[1].img" alt="">
            <div class="mps-card-desc">
              {{ applicationList[1].title }}
            </div>
          </div>
          <div class="relative" data-aos="fade-up" data-aos-delay="300">
            <img class="h-full w-full" :src="applicationList[2].img" alt="">
            <div class="mps-card-desc">
              {{ applicationList[2].title }}
            </div>
          </div>
          <div class="relative" data-aos="fade-up" data-aos-delay="400">
            <img class="h-full w-full" :src="applicationList[3].img" alt="">
            <div class="mps-card-desc">
              {{ applicationList[3].title }}
            </div>
          </div>
          <div class="relative col-span-2" data-aos="fade-up" data-aos-delay="100">
            <img class="h-full w-full" :src="applicationList[4].img" alt="">
            <div class="mps-card-desc">
              {{ applicationList[4].title }}
            </div>
          </div>
          <div class="relative col-span-2" data-aos="fade-up" data-aos-delay="200">
            <img class="h-full w-full" :src="applicationList[5].img" alt="">
            <div class="mps-card-desc">
              {{ applicationList[5].title }}
            </div>
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
