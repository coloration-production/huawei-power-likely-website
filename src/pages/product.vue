<script lang="ts" setup>
import { defineOptions } from 'vue'
import { productApplication, productDetail, productType } from '~/api/common'

defineOptions({ name: 'ProductPage' })
const items = ref<any[]>([])
const pMid = reactive({
  offset: 1,
  count: 5,
})

const store = useCommonStore()

const applicationList = ref<any>([])
const typeList = ref<any>([])
const productList = ref<any>([])
const selectedAppId = ref(null)
const selectedId = ref(null)

const pageTitle = ref('')
const pageBanner = ref('')

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

const {
  currentPage,
  // currentPageSize,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  total: items.value.length || 100,
  page: 1,
  pageSize: 6,
  onPageChange: fetchProduct,
  onPageSizeChange: fetchProduct,
})

function fetchProduct({ currentPage, currentPageSize, pageCount, isFirstPage, isLastPage }: any) {
  return { currentPage, currentPageSize, pageCount, isFirstPage, isLastPage }
}

watch(currentPage, () => {
  const leftEdge = Math.max(0, currentPage.value - pMid.count) + 1
  const rightEdge = pageCount.value - pMid.count - 1
  pMid.offset = Math.min(leftEdge, rightEdge)
})

async function changeApplication(id: any) {
  selectedAppId.value = id
  const result: any = await productType({ type: store.lang, application_id: selectedAppId.value })
  typeList.value = result.data
  changeType(0)
}

async function changeType(id: any) {
  selectedId.value = id
  const result: any = await productDetail({ type: store.lang, application_id: selectedAppId.value, product_type: id, pageindex: 1, pagesize: 6 })
  productList.value = result.data.product
  pageTitle.value = result.data.title
  pageBanner.value = result.data.img
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
          <!-- <div class="product-tab-btn">
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
          </div> -->
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
        <div class="pagination">
          <div class="w-25" :disabled="isFirstPage" @click="prev">
            上一页
          </div>

          <template v-if="pageCount <= 6">
            <div
              v-for="i in pageCount"
              :key="i"
              :disabled="currentPage === i"
              :class="{ active: currentPage === i }"
              @click="currentPage = i"
            >
              {{ i }}
            </div>
          </template>

          <template v-else>
            <div
              :disabled="currentPage === 1"
              :class="{ active: currentPage === 1 }"
              @click="currentPage = 1"
            >
              1
            </div>

            <div v-show="pMid.offset > 1" class="pagination-dot">
              ...
            </div>
            <div
              v-for="i in pMid.count"
              :key="i"
              :disabled="currentPage === (i + pMid.offset)"
              :class="{ active: currentPage === (i + pMid.offset) }"
              @click="currentPage = (i + pMid.offset)"
            >
              {{ i + pMid.offset }}
            </div>
            <div v-if="currentPage < (pageCount - Math.floor(pMid.count / 2))" class="pagination-dot">
              ...
            </div>
            <div
              :disabled="currentPage === pageCount"
              :class="{ active: currentPage === pageCount }"
              @click="currentPage = pageCount"
            >
              {{ pageCount }}
            </div>
          </template>

          <div class="w-25" :disabled="isLastPage" @click="next">
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
  @apply flex items-center flex-1 border-[2px] border-transparent h-30 shadow rounded-3xl pl-12 text-2xl gap-4 tracking-wider cursor-pointer;
}

.product-tab-btn.active {
  @apply text-blue-600 border-blue;
}

.product-tab-btn img {
  @apply w-12;
}

.pagination {
  @apply flex justify-end gap-4.5  select-none;
}

.pagination > div {
  @apply border border-gray-400 rounded-full min-w-13 text-center py-1.5 text-xl text-gray-500;
}

.pagination > div:not(.pagination-dot):hover,
.pagination > div:not(.pagination-dot).active {
  @apply text-white cursor-pointer;
  background: linear-gradient(90deg, #2c76f4 0%, #519dff 100%);
}
</style>
