<!-- eslint-disable no-console -->
<script lang="ts" setup>
import { defineOptions } from 'vue'
import { loadLanguageAsync } from '~/modules/i18n'

import { headerRequest } from '~/api/common'

defineOptions({ name: 'TheHeader' })

const pageData = ref<any>(null)

onBeforeMount(async () => {
  const result: any = await headerRequest({ type: 1 })
  pageData.value = result.data
})

const store = useAppStorage()

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const newLocale = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
  await loadLanguageAsync(newLocale)
  store.value.lang = locale.value = newLocale
}
</script>

<template>
  <div class="the-header">
    <!-- -->
    <TheAlignContainer class="h-full flex items-center justify-between">
      <AppLink to="/" :title="t('button.home')" class="mr-6">
        <div class="w-26 rounded-lg bg-blue-500 py-2 text-center text-white">
          Logo
        </div>
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
        <a :title="t('button.toggle_langs')" class="flex items-center gap-2" @click="toggleLocales()">
          <div i-carbon-language /> 简体中文
        </a>

        <a :title="t('button.toggle_dark')" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </a>
      </div>
    </TheAlignContainer>
  </div>
</template>

<style lang="postcss">
.the-header {
  @apply fixed z-10 top-0 w-full h-22 bg-white dark:bg-black dark:border-b-white;
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
  @apply relative flex items-center bg-op-30 cursor-pointer px-1 h-full dark:hover:bg-white dark:hover:text-black;
}

.coop-nav {
  @apply relative h-full flex items-center;
}
</style>
