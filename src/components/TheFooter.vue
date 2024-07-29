<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'TheFooter' })

const pageData = ref<any>(null)

const store = useCommonStore()

onBeforeMount(async () => {
  pageData.value = await store.fetchBaseData()
})
</script>

<template>
  <div class="the-footer">
    <!-- -->
    <TheAlignContainer class="flex items-end justify-between pt-7">
      <div>
        <div class="mb-4 flex">
          <div class="mr-36 flex items-center gap-2 text-xl">
            <img class="h-6 w-6" src="/footer-location.png" alt="">{{ pageData?.address }}
          </div>
          <div class="flex items-center gap-2 text-xl">
            <img class="h-6 w-6" src="/footer-mail.png" alt=""> 邮箱: {{ pageData?.email }}
          </div>
        </div>
        <div class="text-lg">
          {{ pageData?.copyright }}
        </div>
      </div>
      <div class="flex gap-4.4">
        <img class="h-9 w-9" src="/footer-facebook.png" alt="">
        <img class="h-9 w-9" src="/footer-instagram.png" alt="">
        <img class="h-9 w-9" src="/footer-linkedin.png" alt="">
        <img class="h-9 w-9" src="/footer-youtube.png" alt="">
        <img class="h-9 w-9" src="/footer-x.png" alt="">
        <img class="h-9 w-9" src="/footer-p.png" alt="">
      </div>
    </TheAlignContainer>
    <div class="deco-circle" />
  </div>
</template>

<style lang="postcss">
.the-footer {
  @apply h-36 bg-[#E7F0FF] relative;
}

.deco-circle {
  @apply absolute left-[40%] top-0 w-26 h-26 rounded-full op-50;
  background: linear-gradient(0deg, #c6e6f5 0%, rgba(197, 231, 245, 0.11) 99%);
  opacity: 0.5;
}
</style>
