import { ref } from 'vue'

export function useFetch(fetch, defaultValue = null) {
  const isLoading = ref(true)
  const data = ref(defaultValue)

  fetch().then((res) => {
    data.value = res
    isLoading.value = false
  })

  return { isLoading, data }
}
