/* eslint-disable no-console */
import { acceptHMRUpdate, defineStore } from 'pinia'
import { headerRequest } from '~/api/common'

export const useCommonStore = defineStore('common', () => {
  const baseData = ref(null)

  async function fetchBaseData() {
    const response = await headerRequest({ type: 1 })
    baseData.value = response.data
    console.log(JSON.stringify(baseData.value))
  }

  function clearBaseData() {
    baseData.value = null
  }

  return {
    baseData,
    fetchBaseData,
    clearBaseData,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore as any, import.meta.hot))
