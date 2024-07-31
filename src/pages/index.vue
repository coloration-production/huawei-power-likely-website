<script setup lang="ts">
import SwiperCore, { Autoplay, EffectCoverflow, Navigation } from 'swiper/core'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { companyDetail } from '~/api/common'

defineOptions({
  name: 'IndexPage',
})

SwiperCore.use([EffectCoverflow, Navigation, Autoplay])

const pageData = ref<any>(null)
const qualityImgs = ref([])

const store = useCommonStore()

watch(() => store.lang, async (newLanguage) => {
  const result: any = await companyDetail({ type: newLanguage })
  pageData.value = result.data
  qualityImgs.value = result.data.company_qualifications_img.split(',')
})

onMounted(async () => {
  const result: any = await companyDetail({ type: store.lang })
  pageData.value = result.data
  qualityImgs.value = result.data.company_qualifications_img.split(',')
})

const coverflowEffect = {
  rotate: 0, // slide做3d旋转时Y轴的旋转角度。默认50。
  stretch: 50, // 每个slide之间的拉伸值，越大slide靠得越紧。
  depth: 100, // slide的位置深度。值越大z轴距离越远，看起来越小。
  modifier: 2, // depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
  slideShadows: false, // 开启slide阴影。默认 true。
}
</script>

<template>
  <div class="company-page">
    <div class="w-full">
      <section class="h-125 bg-center bg-no-repeat" :style="`background-image: url(${pageData?.pc_cover})`">
        <TheAlignContainer class="h-full pt-45">
          <div class="mb-0 text-[5.5rem] text-white font-700">
            {{ pageData?.pc_writing }}
          </div>
        </TheAlignContainer>
      </section>
      <div class="company-info">
        <TheAlignContainer>
          <div class="pb-10 pt-12 text-center text-[2.2rem]">
            {{ pageData?.content_title }}
          </div>
          <div class="description indent-8 text-xl text-gray-600 font-thin leading-8" v-html="pageData?.content" />
          <div class="pb-20 pt-6">
            <img class="mx-auto" :src="pageData?.content_img" alt="" srcset="">
          </div>
        </TheAlignContainer>
      </div>
      <div class="company-photo-wall h-180 bg-[#E7F0FF]">
        <TheAlignContainer>
          <div class="pb-10 pt-14 text-center text-[2.2rem]">
            <SplitTitle :title="pageData?.company_overview_title" />
          </div>
          <div class="pb-10 text-center text-xl text-neutral-500 font-thin">
            {{ pageData?.company_overview_content }}
          </div>
          <div class="photo-swiper relative">
            <Swiper
              v-if="pageData && pageData.company_overview_img.length" :slides-per-view="2" :centered-slides="true"
              effect="coverflow" :coverflow-effect="coverflowEffect" :loop="true"
              :navigation="{ nextEl: '.bus-next', prevEl: '.bus-prev' }"
            >
              <SwiperSlide v-for="item in pageData.company_overview_img" :key="item.id">
                <img class="h-100 w-150 object-cover" :src="item.img_url" alt="" srcset="">
                <div class="pt-7 text-center text-xl text-neutral-500">
                  {{ item.img_title }}
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="btn-prev bus-prev btn" />
            <div class="btn-next bus-next btn" />
          </div>
        </TheAlignContainer>
      </div>
      <div class="company-aptitude h-180">
        <TheAlignContainer>
          <div class="pb-4 pt-8 text-center text-[2.2rem]">
            {{ pageData?.company_qualifications_title }}
          </div>
          <div class="pb-10 text-center text-xl text-neutral-500 font-thin">
            {{ pageData?.company_qualifications_content }}
          </div>
          <div class="aptitude-swiper relative">
            <Swiper
              v-if="qualityImgs.length" :slides-per-view="4" :space-between="30"
              :loop="true"
              :navigation="{ nextEl: '.bus-next2', prevEl: '.bus-prev2' }"
            >
              <SwiperSlide v-for="(img, i) in qualityImgs" :key="i">
                <img class="h-100 w-140 object-cover" :src="img" alt="" srcset="">
              </SwiperSlide>
            </Swiper>
            <div class="btn-prev bus-prev2 btn" />
            <div class="btn-next bus-next2 btn" />
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

.photo-swiper .swiper-slide {
  height: 500px;
}

.aptitude-swiper .swiper-slide {
  width: 280px;
  height: 400px;
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
    background-color: transparent !important;
    background: url(../assets/zuo-2.png) no-repeat center;
  }
}

.btn-next {
  @apply absolute top-2/4 -mt-10 -right-20;
  background-color: transparent !important;
  background: url(../assets/you-1.png) no-repeat center;

  &:hover {
    background-color: transparent !important;
    background: url(../assets/you-2.png) no-repeat center;
  }
}
</style>
