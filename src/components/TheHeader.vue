<script lang="ts" setup>
import { defineOptions } from 'vue';
import { availableLocales, loadLanguageAsync } from '~/modules/i18n';

defineOptions({ name: 'the-header' })

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <div class="the-header">
    <!-- -->
    <TheAlignContainer class="flex justify-between items-center h-full">
      <AppLink to="/" :title="t('button.home')" class="mr-12">
        LOGO
      </AppLink>
      <nav class="the-header-nav">
        <AppLink to="/">Home</AppLink>
        <AppLink :active-match-level="1" to="/hi/miemiemie">{{ t('intro.hi') }}</AppLink>
        <AppLink :active-match-level="1" to="/demo-scroll">{{ t('header.scroll') }}</AppLink>
        <AppLink :active-match-level="1" to="/demo-markdown">{{ t('header.markdown') }}</AppLink>
      </nav>

      <div class="flex items-center h-full gap-4">
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
