export function useAppStorage() {
  const store = useLocalStorage('light-power', {
    lang: 'en',
  })

  return store
}
