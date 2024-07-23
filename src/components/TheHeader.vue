<script lang="ts" setup>
import { defineOptions } from 'vue'
import { loadLanguageAsync } from '~/modules/i18n'

defineOptions({ name: 'TheHeader' })

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const newLocale = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <div class="the-header">
    <!-- -->
    <TheAlignContainer class="h-full flex items-center justify-between">
      <AppLink to="/" :title="t('button.home')" class="mr-12">
        LOGO
      </AppLink>
      <nav class="the-header-nav">
        <AppLink to="/">
          Home
        </AppLink>
        <AppLink :active-match-level="1" to="/house-landlord">
          {{ t('nav.house-landlord') }}
        </AppLink>
        <AppLink :active-match-level="1" to="/industry-store">
          {{ t('nav.industry-store') }}
        </AppLink>
        <AppLink :active-match-level="1" to="/mobile-power-system">
          {{ t('nav.mobile-power-system') }}
        </AppLink>
        <AppLink :active-match-level="1" to="/hi/miemiemie">
          {{ t('intro.hi') }}
        </AppLink>
        <AppLink :active-match-level="1" to="/demo-scroll">
          {{ t('header.scroll') }}
        </AppLink>
        <AppLink :active-match-level="1" to="/demo-markdown">
          {{ t('header.markdown') }}
        </AppLink>
      </nav>

      <div class="h-full flex items-center gap-4">
        <a :title="t('button.toggle_langs')" @click="toggleLocales()">
          <div i-carbon-language />
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
  @apply h-10 border-b border-b-black dark:border-b-white;
}

.the-header-nav .app-link-active {
  @apply dark:text-black dark:bg-white text-white bg-black;
}

.the-header-nav {
  @apply flex-1 flex gap-4 h-full;
}

.the-header-nav a {
  @apply flex items-center cursor-pointer px-4 h-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black;
}
</style>
