/* eslint-disable no-console */
import { acceptHMRUpdate, defineStore } from 'pinia'
import { headerRequest } from '~/api/common'

function loadImage(url: string) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = resolve
    img.onerror = img.onabort = reject
    img.src = url
  })
}

const OSSPrefix = 'https://bjyjgjmy-yxgs.oss-us-east-1.aliyuncs.com/ui'

export const useCommonStore = defineStore('common', () => {
  const baseData = ref(null)

  const preloadImageMax = {
    factory: 202,
    family: 180,
    irrigate: 193,
  }

  const preloadImageState = reactive({
    factory: 0,
    family: 0,
    irrigate: 0,
  })

  async function fetchBaseData() {
    const response: any = await headerRequest({ type: 1 })
    baseData.value = response.data
    console.log(JSON.stringify(baseData.value))
  }

  function clearBaseData() {
    baseData.value = null
  }

  function preloadScrollImage(type: keyof typeof preloadImageState) {
    let loaded = preloadImageState[type]
    const total = preloadImageMax[type]

    if (total === loaded)
      return

    const timer = setInterval(() => {
      const countName = `${loaded}`.padStart(3, '0')
      loadImage(`${OSSPrefix}/${type}/${countName}.png`)

      loaded += 1
      preloadImageState[type] = loaded
      if (loaded === total)
        clearInterval(timer)
    }, 10)
  }

  function getScrollImageUrl(type: keyof typeof preloadImageState, percent: number) {
    const total = preloadImageMax[type]
    const countName = `${Math.ceil(percent * total)}`.padStart(3, '0')
    return `${OSSPrefix}/${type}/${countName}.png`
  }

  return {
    baseData,
    fetchBaseData,
    clearBaseData,
    preloadScrollImage,
    getScrollImageUrl,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore as any, import.meta.hot))
