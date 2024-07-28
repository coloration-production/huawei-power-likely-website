<!-- eslint-disable no-alert -->
<script lang="ts" setup>
import md5 from 'md5'
import { defineOptions } from 'vue'
import { submitMessage } from '~/api/common'

defineOptions({ name: 'ContactForm' })

withDefaults(defineProps<{
  labelform: {
    [x: string]: any
    type: object
    required: true
  }
}>(), {

})

const form = reactive({
  company: '',
  position: '',
  nickname: '',
  name: '',
  email: '',
  tel: '',
  city: '',
  area: '',
  message: '',
})

let isDisable = false

function submitData() {
  if (!form.name) {
    alert('姓名不能为空')
    return false
  }
  if (!form.tel) {
    alert('电话不能为空')
    return false
  }
  if (isDisable) {
    alert('请不要频繁提交')
    return false
  }
  isDisable = true
  setTimeout(() => {
    isDisable = false
  }, 2000)
  const stamp = Math.round(new Date().getTime() / 1000)
  const sign = md5(`aoqiangguangfu${stamp}`)
  const { company, position, nickname: call, name, email, tel: mobile, city, area: country, message: content } = form
  submitMessage({ sign, time: stamp, type: 1, country, city, company, position, name, mobile, email, content, call }).then((_res) => {
    alert('提交成功')
  })
}
</script>

<template>
  <TheAlignContainer class="h-full">
    <div class="contact-form">
      <!-- -->
      <div class="grid grid-cols-2 gap-x-18 gap-y-6">
        <div class="form-item">
          <label for="company">{{ labelform.company }}</label>
          <input v-model="form.company" type="text">
        </div>
        <div class="form-item">
          <label for="position">{{ labelform.position }}</label>
          <input v-model="form.position" type="text">
        </div>
        <div class="form-item">
          <label for="nickname">{{ labelform.call }}</label>
          <input v-model="form.nickname" type="text">
        </div>
        <div class="form-item">
          <label for="name">{{ labelform.name }}</label>
          <input v-model="form.name" type="text">
        </div>
        <div class="form-item">
          <label for="email">{{ labelform.email }}</label>
          <input v-model="form.email" type="text">
        </div>
        <div class="form-item">
          <label for="tel">{{ labelform.phone }}</label>
          <input v-model="form.tel" type="text">
        </div>
        <div class="form-item">
          <label for="city">{{ labelform.city }}</label>
          <input v-model="form.city" type="text">
        </div>
        <div class="form-item">
          <label for="area">{{ labelform.country }}</label>
          <input v-model="form.area" type="text">
        </div>
        <div class="form-item col-span-2">
          <label for="message">{{ labelform.info }}</label>
          <textarea id="" v-model="form.message" name="" cols="30" rows="10" />
        </div>
      </div>

      <div class="w-full flex justify-center pt-8">
        <BlueButton size="lg" @click="submitData">
          {{ labelform.submit }}
        </BlueButton>
      </div>
    </div>
  </TheAlignContainer>
</template>

<style lang="postcss">
.contact-form {
  @apply w-full pt-14 pb-8 px-20 bg-white rounded-xl;
}

.form-item {
  @apply w-full;
}

.form-item > label {
  @apply block mb-2 text-lg;
}

.form-item > textarea,
.form-item > input {
  @apply w-full outline-0 border-1 border-gray-400 rounded-lg text-[1.4rem] py-3 px-2;
}

.form-item > textarea {
  @apply h-44;
}
</style>
