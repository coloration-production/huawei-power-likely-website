<script setup lang="ts">
const router = useRouter()

const store = useCommonStore()

const pageData = ref<any>(null)

onBeforeMount(async () => {
  pageData.value = await store.fetchBaseData()
  useHead({
    title: pageData.value.name,
    meta: [
      {
        name: 'description',
        content: pageData.value.first_desc,
      },
      {
        name: 'keyword',
        content: pageData.value.first_keyword,
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
    ],
  })
})

watch(() => store.lang, async (_newLanguage) => {
  pageData.value = await store.fetchBaseData()
  useHead({
    title: pageData.value.name,
    meta: [
      {
        name: 'description',
        content: pageData.value.first_desc,
      },
      {
        name: 'keyword',
        content: pageData.value.first_keyword,
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
    ],
  })
})

useNprogress()
useAos()

router.afterEach(() => {
  window.scrollTo({ top: 0 })
})
</script>

<template>
  <RouterView />
</template>

<style lang="postcss">
.gradient-blue-bg {
  background-image: linear-gradient(90deg, #2b77f4 0%, #519dff 100%);
}
</style>
