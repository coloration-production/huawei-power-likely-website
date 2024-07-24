<script lang="ts" setup>
import { defineOptions } from 'vue'
import { loadLanguageAsync } from '~/modules/i18n'

defineOptions({ name: 'TheHeader' })

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
    <TheAlignContainer class="h-full flex items-center justify-between pl-8 pr-8">
      <AppLink to="/" :title="t('button.home')" class="mr-4">
        <div class="w-22 rounded-lg bg-blue-500 py-1 text-center text-white">
          Logo
        </div>
      </AppLink>
      <nav class="the-header-nav">
        <AppLink to="/">
          {{ t('nav.home') }}
        </AppLink>
        <AppLink :active-match-level="1" to="/house-landlord">
          {{ t('nav.house-landlord') }}
        </AppLink>
        <AppLink :active-match-level="1" to="/industry-store">
          {{ t('nav.industry-store') }}
        </AppLink>
        <AppLink :active-match-level="1" to="/irrigation-system">
          {{ t('nav.irrigation-system') }}
        </AppLink>
        <AppLink :active-match-level="1" to="/mobile-power-system">
          {{ t('nav.mobile-power-system') }}
        </AppLink>
        <AppLink :active-match-level="1" to="/product">
          {{ t('nav.product') }}
        </AppLink>
      </nav>

      <div class="h-full flex items-center gap-6 text-sm">
        <AppLink :active-match-level="1" to="/cooperation">
          {{ t('合作及售后') }}
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
  @apply w-full h-20 border-b border-b-black bg-white dark:bg-black dark:border-b-white;
}

.the-header-nav a::before {
  @apply content-empty hidden absolute bottom-0 h-[6px] rounded-full w-12 left-1/2 -ml-6 bg-blue;
}

.the-header-nav a:hover::before,
.the-header-nav a.app-link-active::before {
  @apply block;
}

.the-header-nav {
  @apply flex-1 flex gap-4 h-full relative;
}

.the-header-nav a {
  @apply relative flex items-center bg-op-30 cursor-pointer px-1 h-full dark:hover:bg-white dark:hover:text-black;
}
</style>
