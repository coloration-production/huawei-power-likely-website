<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'ContactForm' })

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
</script>

<template>
  <TheAlignContainer class="h-full">
    <div class="contact-form">
      <!-- -->
      <div class="grid grid-cols-2 gap-x-18 gap-y-6">
        <div class="form-item">
          <label for="company">公司</label>
          <input v-model="form.company" type="text">
        </div>
        <div class="form-item">
          <label for="position">职位</label>
          <input v-model="form.position" type="text">
        </div>
        <div class="form-item">
          <label for="nickname">称呼</label>
          <input v-model="form.nickname" type="text">
        </div>
        <div class="form-item">
          <label for="name">姓名</label>
          <input v-model="form.name" type="text">
        </div>
        <div class="form-item">
          <label for="email">邮箱</label>
          <input v-model="form.email" type="text">
        </div>
        <div class="form-item">
          <label for="tel">电话</label>
          <input v-model="form.tel" type="text">
        </div>
        <div class="form-item">
          <label for="city">城市</label>
          <input v-model="form.city" type="text">
        </div>
        <div class="form-item">
          <label for="area">国家/地区</label>
          <input v-model="form.area" type="text">
        </div>
        <div class="form-item col-span-2">
          <label for="message">信息</label>
          <textarea id="" name="" cols="30" rows="10" />
        </div>
      </div>

      <div class="w-full flex justify-center pt-8">
        <BlueButton size="lg">
          确认提交
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
