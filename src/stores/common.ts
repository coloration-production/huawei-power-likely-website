import { acceptHMRUpdate, defineStore } from 'pinia'
import { headerRequest, languageRequest } from '~/api/common'

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
  const langList = ref<any>([])
  const lang = useLocalStorage('light-power', '1')

  const preloadImageMax = {
    powerbank: 216,
    factory: 202,
    family: 180,
    irrigate: 193,
  }

  const preloadImageState = reactive({
    powerbank: 0,
    factory: 0,
    family: 0,
    irrigate: 0,
  })

  async function fetchBaseData() {
    const response: any = await headerRequest({ type: lang.value })
    baseData.value = response.data
    return response.data
  }

  async function fetchLanguage() {
    const response: any = await languageRequest({ type: lang.value })
    langList.value = response.data
    return response.data
  }

  function setLanguage(id: any) {
    lang.value = id
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
    lang,
    fetchBaseData,
    fetchLanguage,
    setLanguage,
    preloadScrollImage,
    getScrollImageUrl,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore as any, import.meta.hot))
