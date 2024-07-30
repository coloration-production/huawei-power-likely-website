<script setup lang="ts">
</script>

<template>
  <main class="page-container">
    <TheHeader />
    <RouterView />

    <!-- <div v-if="y > 300" data-aos="fade-left" class="anchor-top" @click="y = 0">
      TOP
    </div> -->
    <TheFooter />
  </main>
</template>

<style lang="postcss">
.page-container {
  @apply gray-700 dark:gray-200 relative;
}

.anchor-top {
  @apply cursor-pointer fixed right-20 bottom-20 w-10 h-10 flex justify-center items-center border-1 border-black  dark:border-white;
}
</style>
