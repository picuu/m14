import { api } from 'boot/axios'
import { ref } from 'vue'

const data = ref([])

const useApi = () => {
  const getData = async (endpoint = '') => {
    const res = await api.get(endpoint)
    const resData = res.data
    data.value = resData
  }

  return { data, getData }
}

export default useApi
