<script lang="ts" setup>
import { defineOptions } from 'vue'

import { headerRequest } from '~/api/common'

defineOptions({ name: 'TheFooter' })

const pageData = ref<any>(null)

onBeforeMount(async () => {
  const result: any = await headerRequest({ type: 1 })
  pageData.value = result.data
})
</script>

<template>
  <div class="the-footer">
    <!-- -->
    <TheAlignContainer class="flex items-end justify-between pt-7">
      <div>
        <div class="mb-4 flex">
          <div class="mr-36 text-xl">
            {{ pageData?.address }}
          </div>
          <div class="text-xl">
            邮箱: {{ pageData?.email }}
          </div>
        </div>
        <div class="text-lg">
          {{ pageData?.copyright }}
        </div>
      </div>
      <div class="flex gap-4.4">
        <div v-for="i in [1, 2, 3, 4, 5, 6]" :key="i" class="h-9 w-9 bg-black" />
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
