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

onMounted(() => {
  // if (import.meta.env.PROD) {
  //   // 0.83vw 代表在宽度是1920px的情况下16px的值 即 16 / 1920 * 100
  // }
  // else {
  //   document.documentElement.style.fontSize = 16 / window.screen.availWidth * 100 + 'vw'
  // }
})

useNprogress()
useAos()
</script>

<template>
  <RouterView />
</template>

<style lang="postcss">
.gradient-blue-bg {
  background-image: linear-gradient(90deg, #2b77f4 0%, #519dff 100%);
}
</style>
