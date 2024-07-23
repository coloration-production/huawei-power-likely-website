<script setup lang="ts">
useHead({
  title: 'landing-page',
  meta: [
    {
      name: 'description',
      content: 'landing page Template',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})

useNprogress()
useAos()
</script>

<template>
  <RouterView />
</template>
