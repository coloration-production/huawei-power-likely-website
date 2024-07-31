<script lang="ts" setup>
import { defineOptions } from 'vue'
import { productApplication, productDetail, productType } from '~/api/common'

defineOptions({ name: 'ProductPage' })

const store = useCommonStore()

const applicationList = ref<any>([])
const typeList = ref<any>([])
const productList = ref<any>([])
const selectedAppId = ref(null)
const selectedId = ref(null)

const pageTitle = ref('')
const pageBanner = ref('')
const currentPage = ref(1)
const pageCount = ref(0)

watch(() => store.lang, async (newLanguage) => {
  const result: any = await productApplication({ type: newLanguage })
  applicationList.value = result.data
  changeApplication(result.data[0].id)
})

onMounted(async () => {
  const result: any = await productApplication({ type: store.lang })
  applicationList.value = result.data
  changeApplication(result.data[0].id)
})

async function changeApplication(id: any) {
  selectedAppId.value = id
  const result: any = await productType({ type: store.lang, application_id: selectedAppId.value })
  typeList.value = result.data
  changeType(0)
}

async function changeType(id: any = 0) {
  selectedId.value = id
  const result: any = await productDetail({ type: store.lang, application_id: selectedAppId.value, product_type: selectedId.value, pageindex: currentPage.value, pagesize: 6 })
  productList.value = result.data.product
  pageTitle.value = result.data.title
  pageBanner.value = result.data.img
  pageCount.value = result.data.product_num
}

async function onClickHandler(page: number) {
  currentPage.value = page
  changeType(selectedId.value)
}
</script>

<template>
  <div class="product-page">
    <section class="h-124 bg-cover" :style="`background-image: url(${pageBanner})`" data-aos="fade-up">
      <TheAlignContainer class="pt-50">
        <div class="text-8xl font-700 tracking-wide" data-aos="fade-up" data-aos-delay="100">
          {{ pageTitle }}
        </div>
      </TheAlignContainer>
    </section>

    <section class="h-394 bg-white pt-10">
      <TheAlignContainer>
        <div class="mb-5 flex gap-4" data-aos="fade-up" data-aos-delay="200">
          <div v-for="(item, i) in applicationList" :key="item.id" :class="`product-tab-btn ${selectedAppId === item.id ? 'active' : ''}`" @click="changeApplication(item.id)">
            <img :src="`/product-02-icon0${i + 1}.png`" alt="">
            {{ item.name }}
          </div>
        </div>

        <TabButtonGroup class="mb-6">
          <button :class="`${selectedId === 0 ? 'active' : ''}`" @click="changeType(0)">
            全部产品
          </button>
          <button v-for="item in typeList" :key="item.id" :class="`${selectedId === item.id ? 'active' : ''}`" @click="changeType(item.id)">
            {{ item.name }}
          </button>
        </TabButtonGroup>

        <div class="grid grid-cols-3 grid-rows-2 mb-8 gap-6" data-aos="fade-up" data-aos-delay="100">
          <HouseProduct v-for="item in productList" :key="item.id" class="flex-1" :cover="item.img" :title="item.name" :sub="item.desc" :desc="item.content" more-link="" />
        </div>
        <vue-awesome-paginate v-if="pageCount > 0" v-model="currentPage" :total-items="pageCount" :items-per-page="5" :max-pages-shown="5" prev-button-content=" 上一页 " next-button-content=" 下一页 " @click="onClickHandler" />
      </TheAlignContainer>
    </section>
  </div>
</template>

<style lang="postcss">
.product-page {
  @apply relative z-2;
}

.product-tab-btn {
  @apply flex items-center flex-1 border-[2px] border-transparent h-30 shadow rounded-3xl pl-12 text-2xl gap-4 tracking-wider cursor-pointer;
}

.product-tab-btn.active {
  @apply text-blue-600 border-blue;
}

.product-tab-btn img {
  @apply w-12;
}

.pagination-container {
  @apply flex justify-end gap-4.5  select-none;
  display: flex !important;
  user-select: none !important;
}

.paginate-buttons {
  @apply border border-gray-400 rounded-full min-w-13 text-center py-1.5 px-4 text-xl text-gray-500;
}

.active-page {
  @apply text-white cursor-pointer;
  background: linear-gradient(90deg, #2c76f4 0%, #519dff 100%);
}
</style>
