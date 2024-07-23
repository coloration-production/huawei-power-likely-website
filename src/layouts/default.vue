<script setup lang="ts">
const { y } = useWindowScroll({ behavior: 'smooth' }) 
</script>
<template>
  <main class="page-container">
    <TheHeader />
    <div class="flex-1">
      <RouterView />

      <div v-if="y > 300" data-aos="fade-left" @click="y = 0" class="anchor-top">TOP</div>
    </div>
    <TheFooter />
  </main>
</template>
<style lang="postcss">
.page-container {
  @apply gray-700 dark:gray-200 min-h-100vh flex flex-col justify-between;
}

.anchor-top {
  @apply cursor-pointer fixed right-20 bottom-20 w-10 h-10 flex justify-center items-center border-1 border-black  dark:border-white ;
}
</style>