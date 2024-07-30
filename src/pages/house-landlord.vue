<script lang="ts" setup>
import { defineOptions } from 'vue'
import { householdStyleRequest } from '~/api/common'

defineOptions({ name: 'HouseLandlord' })
const store = useCommonStore()
const pageData = ref<any>(null)
const chanpinArr = ref<any>([])
const taocanArr = ref<any>([])
const typeID = ref('')
const productList = ref<any>([])
const anliList = ref<any>([])

watch(() => store.lang, async (newLanguage) => {
  getPageData(newLanguage)
})

onBeforeMount(() => {
  store.preloadScrollImage('family')
})

onMounted(() => {
  getPageData(store.lang)
})

async function getPageData(curlang: any) {
  const result: any = await householdStyleRequest({ type: curlang })
  pageData.value = result.data
  chanpinArr.value = [
    { title: result.data.chanpin_title_one, desc: result.data.chanpin_desc_one },
    { title: result.data.chanpin_title_two, desc: result.data.chanpin_desc_two },
    { title: result.data.chanpin_title_three, desc: result.data.chanpin_desc_three },
    { title: result.data.chanpin_title_four, desc: result.data.chanpin_desc_four },
    { title: result.data.chanpin_title_five, desc: result.data.chanpin_desc_five },
  ]
  taocanArr.value = [{
    title: result.data.taocan_one_title,
    desc: result.data.taocan_one_desc,
    img: result.data.taocan_one_img,
    chanpin: [
      { title: result.data.taocan_one_chanpin_one_title, xinghao: result.data.taocan_one_chanpin_one_xinghao },
      { title: result.data.taocan_one_chanpin_two_title, xinghao: result.data.taocan_one_chanpin_two_xinghao },
      { title: result.data.taocan_one_chanpin_three_title, xinghao: result.data.taocan_one_chanpin_three_xinghao },
    ],
    fuchanpin: [
      { title: result.data.taocan_one_fuchanpin_one_title, xinghao: result.data.taocan_one_fuchanpin_one_xinghao },
      { title: result.data.taocan_one_fuchanpin_two_title, xinghao: result.data.taocan_one_fuchanpin_two_xinghao },
      { title: result.data.taocan_one_fuchanpin_three_title, xinghao: result.data.taocan_one_fuchanpin_three_xinghao },
      { title: result.data.taocan_one_fuchanpin_four_title, xinghao: result.data.taocan_one_fuchanpin_four_xinghao },
      { title: result.data.taocan_one_fuchanpin_five_title, xinghao: result.data.taocan_one_fuchanpin_five_xinghao },
      { title: result.data.taocan_one_fuchanpin_six_title, xinghao: result.data.taocan_one_fuchanpin_six_xinghao },
      { title: result.data.taocan_one_fuchanpin_seven_title, xinghao: result.data.taocan_one_fuchanpin_seven_xinghao },
      { title: result.data.taocan_one_fuchanpin_eight_title, xinghao: result.data.taocan_one_fuchanpin_eight_xinghao },
      { title: result.data.taocan_one_fuchanpin_nine_title, xinghao: result.data.taocan_one_fuchanpin_nine_xinghao },
    ],
  }, {
    title: result.data.taocan_two_title,
    desc: result.data.taocan_two_desc,
    img: result.data.taocan_two_img,
    chanpin: [
      { title: result.data.taocan_two_chanpin_one_title, xinghao: result.data.taocan_two_chanpin_one_xinghao },
      { title: result.data.taocan_two_chanpin_two_title, xinghao: result.data.taocan_two_chanpin_two_xinghao },
      { title: result.data.taocan_two_chanpin_three_title, xinghao: result.data.taocan_two_chanpin_three_xinghao },
    ],
    fuchanpin: [
      { title: result.data.taocan_two_fuchanpin_one_title, xinghao: result.data.taocan_two_fuchanpin_one_xinghao },
      { title: result.data.taocan_two_fuchanpin_two_title, xinghao: result.data.taocan_two_fuchanpin_two_xinghao },
      { title: result.data.taocan_two_fuchanpin_three_title, xinghao: result.data.taocan_two_fuchanpin_three_xinghao },
      { title: result.data.taocan_two_fuchanpin_four_title, xinghao: result.data.taocan_two_fuchanpin_four_xinghao },
      { title: result.data.taocan_two_fuchanpin_five_title, xinghao: result.data.taocan_two_fuchanpin_five_xinghao },
      { title: result.data.taocan_two_fuchanpin_six_title, xinghao: result.data.taocan_two_fuchanpin_six_xinghao },
      { title: result.data.taocan_two_fuchanpin_seven_title, xinghao: result.data.taocan_two_fuchanpin_seven_xinghao },
      { title: result.data.taocan_two_fuchanpin_eight_title, xinghao: result.data.taocan_two_fuchanpin_eight_xinghao },
      { title: result.data.taocan_two_fuchanpin_nine_title, xinghao: result.data.taocan_two_fuchanpin_nine_xinghao },
    ],
  }, {
    title: result.data.taocan_three_title,
    desc: result.data.taocan_three_desc,
    img: result.data.taocan_three_img,
    chanpin: [
      { title: result.data.taocan_three_chanpin_one_title, xinghao: result.data.taocan_three_chanpin_one_xinghao },
      { title: result.data.taocan_three_chanpin_two_title, xinghao: result.data.taocan_three_chanpin_two_xinghao },
      { title: result.data.taocan_three_chanpin_three_title, xinghao: result.data.taocan_three_chanpin_three_xinghao },
    ],
    fuchanpin: [
      { title: result.data.taocan_three_fuchanpin_one_title, xinghao: result.data.taocan_three_fuchanpin_one_xinghao },
      { title: result.data.taocan_three_fuchanpin_two_title, xinghao: result.data.taocan_three_fuchanpin_two_xinghao },
      { title: result.data.taocan_three_fuchanpin_three_title, xinghao: result.data.taocan_three_fuchanpin_three_xinghao },
      { title: result.data.taocan_three_fuchanpin_four_title, xinghao: result.data.taocan_three_fuchanpin_four_xinghao },
      { title: result.data.taocan_three_fuchanpin_five_title, xinghao: result.data.taocan_three_fuchanpin_five_xinghao },
      { title: result.data.taocan_three_fuchanpin_six_title, xinghao: result.data.taocan_three_fuchanpin_six_xinghao },
      { title: result.data.taocan_three_fuchanpin_seven_title, xinghao: result.data.taocan_three_fuchanpin_seven_xinghao },
      { title: result.data.taocan_three_fuchanpin_eight_title, xinghao: result.data.taocan_three_fuchanpin_eight_xinghao },
      { title: result.data.taocan_three_fuchanpin_nine_title, xinghao: result.data.taocan_three_fuchanpin_nine_xinghao },
    ],
  }]
  typeID.value = result.data.type_name_list[0].type_id
  productList.value = result.data.product_list.splice(0, 3)
  anliList.value = result.data.anli_img.split(',')
}

function calcScaleStyle(percent: number) {
  return { transform: `scale(${1 + (4 * (Math.min(0.8, Math.max(0.3, percent)) - 0.3) / (0.5))})` }
}

async function changeProductList(id: string) {
  typeID.value = id
  const result: any = await householdStyleRequest({ type: 1, type_id: id })
  productList.value = result.data.product_list.splice(0, 3)
}

function isVideoOrImage(url: any) {
  const videoExtensions = ['mp4', 'webm', 'ogg', 'avi', 'mov', 'wmv', 'flv', 'mkv']
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp', 'tiff']
  const extension = url.split('.').pop().toLowerCase()
  if (videoExtensions.includes(extension))
    return 'video'
  else if (imageExtensions.includes(extension))
    return 'image'
  else
    return 'unknown'
}
</script>

<template>
  <div class="house-landlord">
    <!-- -->

    <section class="h-245 bg-cover" data-aos="fade-up" :style="`background-image: url(${pageData?.banner})`">
      <TheAlignContainer class="h-full pt-60">
        <div class="mb-4 text-7xl text-white font-700" data-aos="fade-up" data-aos-delay="200">
          {{ pageData?.banner_desc.split('|')[0] }}
        </div>
        <div class="text-6xl text-white" data-aos="fade-up" data-aos-delay="400">
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
    <!-- 滚动卡片 -->
    <section class="h-[5000px]">
      <ScrollFrame v-slot="{ percent }" class="h-270 bg-cover" style="background-image: url(/houselord-02.png)">
        <TheAlignContainer class="h-full w-full flex gap-20 pt-66">
          <div class="w-[40rem]">
            <div class="position-absolute mb-80 pt-16 text-[3.4rem] text-white font-500" data-aos="fade-up">
              {{ pageData?.chanpin_title }}
            </div>
            <!-- <div class="flex items-center justify-between" data-aos="fade-up" data-aos-delay="200">
              <img
                v-for="i in 5" :key="i" data-aos="fade-left" :data-aos-delay="300 + i * 100" class="h-12 w-12"
                :src="`/houselord-02-i0${i}.png`" alt=""
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
    <!-- 滚动图片 -->
    <section class="relative h-[5000px] bg-cover">
      <ScrollFrame
        v-slot="{ percent }"
        class="h-278"
        style="background-image: url(https://bjyjgjmy-yxgs.oss-us-east-1.aliyuncs.com/ui/family/000.png)"
      >
        <img class="w-full" :src="store.getScrollImageUrl('family', percent)">
      </ScrollFrame>
    </section>
    <section class="h-270 bg-white pt-17">
      <SplitTitle :title="pageData?.chanpin_info_title" />
      <TheAlignContainer class="pt-16">
        <TabButtonGroup v-if="pageData?.type_name_list.length">
          <!-- <button class="active">
            {{ pageData?.all_product }}
          </button> -->
          <button v-for="item in pageData.type_name_list" :key="item.type_id" :class="typeID === item.type_id ? 'active' : ''" @click="changeProductList(item.type_id)">
            {{ item.type_name }}
          </button>
          <!-- <button>
            逆变器
          </button> -->
        </TabButtonGroup>
        <div class="grid grid-cols-3 grid-rows-1 gap-6 pt-8">
          <HouseProduct
            v-for="(item, i) in productList" :key="item.id" data-aos="fade-up" :data-aos-delay="400 + i * 100" class="flex-1"
            :cover="item.img" :title="item.name" :sub="item.desc" :desc="item.content"
            more-link="/product"
          />
        </div>

        <div class="flex justify-center pt-24" data-aos="fade-up">
          <RouterLink to="/product">
            <BlueButton>查看更多</BlueButton>
          </RouterLink>
        </div>
      </TheAlignContainer>
    </section>
    <section class="h-[5000px]">
      <ScrollFrame v-slot="{ percent }" class="h-270 overflow-hidden bg-sky-100 pt-16">
        <SplitTitle :title="pageData?.anli_title" />
        <TheAlignContainer class="pt-18">
          <div class="grid grid grid-cols-4 grid-rows-3 h-190 gap-4 bg-sky-100" :style="calcScaleStyle(percent)">
            <div>
              <img class="h-full w-full" :src="anliList[0]" alt="">
            </div>
            <div>
              <img class="h-full w-full" :src="anliList[1]" alt="">
            </div>
            <div>
              <img class="h-full w-full" :src="anliList[2]" alt="">
            </div>
            <div class="row-span-2">
              <img class="h-full w-full" :src="anliList[3]" alt="">
            </div>
            <div class="row-span-2">
              <img class="h-full w-full" :src="anliList[4]" alt="">
            </div>
            <div v-if="anliList[5]" class="col-span-2">
              <video v-if="isVideoOrImage(anliList[5]) === 'video'" class="h-full w-full" :src="anliList[5]" />
              <img v-if="isVideoOrImage(anliList[5]) === 'image'" class="h-full w-full" :src="anliList[5]" alt="">
            </div>
            <div>
              <img class="h-full w-full" :src="anliList[6]" alt="">
            </div>
            <div class="col-span-2">
              <img class="h-full w-full" :src="anliList[7]" alt="">
            </div>
          </div>
        </TheAlignContainer>
      </ScrollFrame>
    </section>
    <section class="h-467 bg-white">
      <TheAlignContainer class="pt-18">
        <SplitTitle :title="pageData?.taocan_title" class="mb-18" />
        <div class="flex flex-col gap-26">
          <HousePackage
            v-for="(item, i) in taocanArr" :key="i" data-aos="fade-up" data-aos-delay="200"
            :title="item.title" :sub="item.desc" :cover="item.img" link="/product" :cover-right="i % 2 === 0" :group="[
              {
                title: item.chanpin[0].xinghao.split('/')[0],
                titleSuffix: item.chanpin[0].xinghao.split('/')[1],
                sub: item.chanpin[0].title,
                desc: `${item.fuchanpin[0].title}:${item.fuchanpin[0].xinghao}<br />${item.fuchanpin[1].title}:${item.fuchanpin[1].xinghao}<br />${item.fuchanpin[2].title}:${item.fuchanpin[2].xinghao}`,
              },
              {
                title: item.chanpin[1].xinghao.split('/')[0],
                titleSuffix: item.chanpin[1].xinghao.split('/')[1],
                sub: item.chanpin[1].title,
                desc: `${item.fuchanpin[3].title}:${item.fuchanpin[3].xinghao}<br />${item.fuchanpin[4].title}:${item.fuchanpin[4].xinghao}<br />${item.fuchanpin[5].title}:${item.fuchanpin[5].xinghao}`,
              },
              {
                title: item.chanpin[2].xinghao.split('/')[0],
                titleSuffix: item.chanpin[2].xinghao.split('/')[1],
                sub: item.chanpin[2].title,
                desc: `${item.fuchanpin[6].title}:${item.fuchanpin[6].xinghao}<br />${item.fuchanpin[7].title}:${item.fuchanpin[7].xinghao}<br />${item.fuchanpin[8].title}:${item.fuchanpin[8].xinghao}`,
              },
              // {
              //   title: '5KWH',
              //   titleSuffix: '3台',
              //   sub: '堆叠式电磁组',
              //   desc: '光伏电缆连接插件: MC4 <br />光伏电缆4mm<br />输出控制箱:2P40A',
              // },
            ]"
          />
        </div>
      </TheAlignContainer>
    </section>
    <section v-if="pageData?.call_me_style === 1" class="h-270 bg-cover pt-12" :style="`background-image: url(${pageData?.call_me_img});`">
      <SplitTitle :title="pageData?.call_me_title" color="#ffffff" class="mb-10" />
      <ContactForm :labelform="pageData?.call_me_list" />
    </section>
  </div>
</template>

<style lang="postcss">
.house-landlord {
  @apply relative z-2;
}
</style>
