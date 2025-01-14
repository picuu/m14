import { ref } from 'vue'

const URL = 'https://jsonplaceholder.typicode.com/'

export function useResource(endpoint) {
  const data = ref(null)

  const fetchData = async () => {
    const res = await fetch(URL + endpoint)
    data.value = await res.json()
  }

  return { data, fetchData }
}
