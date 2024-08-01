<!-- eslint-disable no-console -->
<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'TheHeader' })

const pageData = ref<any>(null)
const langList = ref<any>([])
const showLangSelect = ref(false)
const curLang = ref<any>(null)

const store = useCommonStore()

onBeforeMount(async () => {
  curLang.value = store.lang
  langList.value = await store.fetchLanguage()
  pageData.value = await store.fetchBaseData()
})

async function toggleLocales() {
  // change to some real logic
  // const newLocale = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
  // await loadLanguageAsync(newLocale)
  // store.value.lang = locale.value = newLocale
  showLangSelect.value = true
}

async function setLang(id: any) {
  curLang.value = id
  store.setLanguage(id)
  showLangSelect.value = false
  langList.value = await store.fetchLanguage()
  pageData.value = await store.fetchBaseData()
}
</script>

<template>
  <div class="the-header">
    <TheAlignContainer class="h-full flex items-center justify-between" style="max-width: 100%;">
      <AppLink to="/" class="mr-6 box-border w-26 p-4">
        <img class="rounded-lg" :src="pageData?.logo" alt="">
        <!-- <div class="w-26 rounded-lg bg-blue-500 py-2 text-center text-white">
          Logo
        </div> -->
      </AppLink>
      <nav class="the-header-nav">
        <AppLink to="/">
          {{ pageData?.company_abount }}
        </AppLink>
        <AppLink v-if="pageData?.nw_household_style" :active-match-level="1" to="/house-landlord">
          {{ pageData?.nw_household_style }}
        </AppLink>
        <AppLink v-if="pageData?.nw_industry" :active-match-level="1" to="/industry-store">
          {{ pageData?.nw_industry }}
        </AppLink>
        <AppLink v-if="pageData?.nw_irrigate" :active-match-level="1" to="/irrigation-system">
          {{ pageData?.nw_irrigate }}
        </AppLink>
        <AppLink v-if="pageData?.nw_portable_power" :active-match-level="1" to="/mobile-power-system">
          {{ pageData?.nw_portable_power }}
        </AppLink>
        <AppLink :active-match-level="1" to="/product">
          {{ pageData?.product }}
        </AppLink>
      </nav>

      <div class="h-full flex items-center gap-6 text-lg">
        <AppLink class="coop-nav" :active-match-level="1" to="/cooperation">
          {{ pageData?.call_me }}
        </AppLink>
        <div class="h-full flex cursor-pointer">
          <a class="flex items-center gap-2" @click="toggleLocales">
            <div i-carbon-language /> {{ langList.length ? (langList.find((el:any) => Number(el.id) === Number(curLang)) ? langList.find((el:any) => Number(el.id) === Number(curLang)).language : '') : '' }}
          </a>
          <ul v-if="showLangSelect" class="fixed top-22 color-white leading-10">
            <li v-for="item in langList" :key="item.id" class="cursor-pointer" @click="setLang(item.id)">
              {{ item.language }}
            </li>
          </ul>
        </div>

        <!-- <a :title="t('button.toggle_dark')" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </a> -->
      </div>
    </TheAlignContainer>
  </div>
  <div v-if="showLangSelect" class="fixed z-9 h-full w-full bg-black opacity-50" @click="() => showLangSelect = false" />
  <div class="placeholder" />
</template>

<style lang="postcss">
.the-header {
  @apply fixed z-10 top-0 w-full h-24 bg-white px-4;
  border-bottom: 1px solid #dedede;
}
.placeholder {
  @apply w-full h-24 px-4;
}
.coop-nav::before,
.the-header-nav a::before {
  @apply content-empty
  hidden absolute bottom-0 h-[6px] rounded-full w-12 left-1/2 -ml-6;
  background-image: linear-gradient(90deg, #2b77f4 0%, #519dff 100%);
}

.coop-nav.app-link-active,
.the-header-nav a.app-link-active {
  @apply text-shadow text-shadow-color-black;
}

.coop-nav.app-link-active::before,
.the-header-nav a:hover::before,
.the-header-nav a.app-link-active::before {
  @apply block;
}

.the-header-nav {
  @apply flex-1 flex gap-5.4 h-full relative text-lg tracking-wider;
}

.the-header-nav a {
  @apply relative flex items-center bg-op-30 cursor-pointer px-1 h-full;
}

.coop-nav {
  @apply relative h-full flex items-center;
}
</style>
