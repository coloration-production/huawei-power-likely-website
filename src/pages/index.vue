<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <TheAlignContainer>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <TheInput
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </TheAlignContainer>

  <section class="section-color">
    <TheAlignContainer>

      <div class="flex justify-between">
        <div>
          <p data-aos="fade-up">A Good Story</p>
          <p data-aos="fade-up" data-aos-delay="100">Must have a good</p>
          <p data-aos="fade-up" data-aos-delay="200">Name.</p>
        </div>
        <div data-aos="fade-left" data-aos-delay="600" class="text-4xl pt-30">
          Im a Good Name.
        </div>
      </div>
    </TheAlignContainer>
  </section>

  <section class="pt-8 h-100">
    <TheAlignContainer>
      <a 
        class="text-indigo-800 dark:text-indigo-200 underline underline-amber"
        href="https://www.npmjs.com/package/aos?activeTab=readme" target="_blank">AOS Animation Document</a>

    </TheAlignContainer>
  </section>

  <section class="section-color">
    <TheAlignContainer>
      <DemoScroll />
     
    </TheAlignContainer>


    
  </section>
  <section class="pt-30 h-120">
    <TheAlignContainer>
      <p>This is the Placeholder</p>
      <p>Nothing to Do</p>
    </TheAlignContainer>
  </section>
</template>
<style lang="postcss">
.section-color {

@apply
  h-80 py-20
  bg-indigo-200
  dark:bg-indigo-900
  ;
}
</style>

