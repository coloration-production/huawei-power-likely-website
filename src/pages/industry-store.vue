<script lang="ts" setup>
import SwiperCore, { Autoplay, EffectCoverflow, Navigation } from 'swiper/core'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { defineOptions } from 'vue'
import { industryRequest } from '~/api/common'

defineOptions({ name: 'IndustryStore' })

SwiperCore.use([EffectCoverflow, Navigation, Autoplay])

const store = useCommonStore()
const pageData = ref<any>(null)
const chanpinArr = ref<any>([])
const productInfo = ref<any>([])
const applicationList = ref<any>([])

const curIndex = ref(1)

watch(() => store.lang, async (newLanguage) => {
  getPageData(newLanguage)
})

onBeforeMount(() => {
  store.preloadScrollImage('factory')
})

onMounted(async () => {
  getPageData(store.lang)
})

async function getPageData(curlang: any) {
  const result: any = await industryRequest({ type: curlang })
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
}

const onSlideChangeTransitionEnd: any = (e: any) => {
  curIndex.value = e.realIndex
}
</script>

<template>
  <div class="industry-store">
    <section class="h-244 bg-cover" :style="`background-image: url(${pageData?.banner})`" data-aos="fade-up">
      <TheAlignContainer class="h-full pt-77">
        <div
          class="mb-4 text-7xl text-white font-700 text-shadow text-shadow-color-black"
          data-aos="fade-up" data-aos-delay="200"
        >
          {{ pageData?.banner_desc.split('|')[0] }}
        </div>
        <div
          class="text-6xl text-white text-shadow text-shadow-color-black"
          data-aos="fade-up" data-aos-delay="400"
        >
          {{ pageData?.banner_desc.split('|')[1] }}
        </div>
        <!-- <div class="flex gap-8 pt-15" data-aos="fade-up" data-aos-delay="500">
          <button class="rounded-full bg-white px-7 py-3 text-xl">
            立即预定
          </button>
          <button class="rounded-full bg-white px-7 py-3 text-xl">
            预约咨询
          </button>
        </div> -->
      </TheAlignContainer>
    </section>
    <section class="h-[5000px]">
      <ScrollFrame
        v-slot="{ percent }" class="h-270 bg-cover"
        style="background-image: url(/industry-store-02.png)"
      >
        <TheAlignContainer class="h-full w-full flex gap-20 pt-66">
          <div class="w-[40rem]">
            <div class="mb-80 pt-16 text-[3.4rem] text-white font-500" data-aos="fade-up">
              {{ pageData?.chanpin_title }}
            </div>
            <!-- <div class="flex items-center justify-between" data-aos="fade-up" data-aos-delay="200">
              <img
                v-for="i in 5"
                :key="i"
                data-aos="fade-left" :data-aos-delay="300 + i * 100" class="h-12 w-12" :src="`/houselord-02-i0${i}.png`" alt=""
              >
            </div> -->
          </div>
          <ScrollCardView
            v-if="chanpinArr.length" :percent="percent"
            :items="[
              {
                icon: '/houselord-02-i01.png',
                title: chanpinArr[0].title,
                desc: chanpinArr[0].desc,
              },
              {
                icon: '/houselord-02-i02.png',
                title: chanpinArr[1].title,
                desc: chanpinArr[1].desc,
              },
              {
                icon: '/houselord-02-i03.png',
                title: chanpinArr[2].title,
                desc: chanpinArr[2].desc,
              },
              {
                icon: '/houselord-02-i04.png',
                title: chanpinArr[3].title,
                desc: chanpinArr[3].desc,
              },
              {
                icon: '/houselord-02-i05.png',
                title: chanpinArr[4].title,
                desc: chanpinArr[4].desc,
              },

            ]"
          />
        </TheAlignContainer>
      </ScrollFrame>
    </section>
    <section class="relative h-[5000px] bg-cover">
      <ScrollFrame
        v-slot="{ percent }"
        class="h-278"
        style="background-image: url(https://bjyjgjmy-yxgs.oss-us-east-1.aliyuncs.com/ui/factory/000.png);background-repeat: no-repeat;background-size: 100% auto;"
      >
        <img class="w-full" style="max-height: 100%;object-fit: cover;" :src="store.getScrollImageUrl('factory', percent)">
      </ScrollFrame>
    </section>
    <section class="h-538 pt-18">
      <SplitTitle :title="pageData?.chanpin_info_title" />

      <div class="flex flex-col gap-15 pt-10">
        <IndustryStoreProduct
          v-for="(item, i) in productInfo" :key="i"
          :cover="item.img"
          :cover-right="i % 2 === 0"
          :title="item.title"
          :sub="item.sub_title"
          :desc="item.desc"
        />
      </div>
    </section>
    <!-- 轮播图 -->
    <section class="h-270 bg-[#E3ECFF] bg-op-30 pt-22">
      <SplitTitle :title="pageData?.application_title" class="mb-2" />
      <div class="mb-12 text-center text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">
        {{ pageData?.application_desc }}
      </div>
      <TheAlignContainer data-aos="fade-up" data-aos-delay="200" class="relative">
        <!-- <div class="h-160 flex gap-6">
          <div class="h-full flex-[1] bg-green op-80" />
          <div class="flex-[2] bg-blue" />
          <div class="h-full flex-[1] bg-green op-80" />
        </div>

        <div class="btn-prev bus-prev2 btn" />
        <div class="btn-next bus-next2 btn" /> -->
        <div class="photo-swiper relative">
          <Swiper
            v-if="applicationList.length" :space-between="20" :slides-per-view="2"
            :centered-slides="true"
            :loop="true"
            :navigation="{ nextEl: '.bus-next', prevEl: '.bus-prev' }"
            @slide-change-transition-end="onSlideChangeTransitionEnd"
          >
            <SwiperSlide v-for="(item, i) in applicationList" :key="item.id">
              <img :class="`h-165 w-150 object-cover ${curIndex === i ? '' : 'opacity-50'}`" :src="item.img" alt="" srcset="">
              <div v-show="curIndex === i" class="info-box absolute bottom-10 h-30 w-full pb-7 pl-10 pt-5">
                <div class="title text-[1.6rem]">
                  {{ item.title }}
                </div>
                <div class="desc pt-2 text-[1.3rem] color-[#666666]">
                  {{ item.desc }}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="btn-prev bus-prev btn" />
          <div class="btn-next bus-next btn" />
        </div>
      </TheAlignContainer>
    </section>
    <section v-if="pageData?.call_me_ind === 1" class="h-270 bg-cover pt-12" :style="`background-image: url(${pageData?.call_me_img});`">
      <SplitTitle :title="pageData?.call_me_title" color="#ffffff" class="mb-10" />

      <ContactForm :labelform="pageData?.call_me_list" />
    </section>
  </div>
</template>

<style lang="postcss">
.industry-store {
  @apply relative z-2;
}

.btn {
  width: 57px;
  height: 57px;
  position: absolute;
}

.btn-prev {
  @apply absolute top-2/4 -mt-10 -left-20;
  background-color: transparent !important;
  background: url(../assets/zuo-1.png) no-repeat center;

  &:hover {
    background: url(../assets/zuo-2.png) no-repeat center;
  }
}

.btn-next {
  @apply absolute top-2/4 -mt-10 -right-20;
  background-color: transparent !important;
  background: url(../assets/you-1.png) no-repeat center;

  &:hover {
    background: url(../assets/you-2.png) no-repeat center;
  }
}

.photo-swiper .swiper-slide {
  height: 660px;
  .info-box {
    background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 8px;
      height: 100%;
      background: linear-gradient(0deg, #2c77f4 0%, #529dfe 100%);
    }
  }
}
</style>
