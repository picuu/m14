import axios from 'axios'
import { ref } from 'vue'

const data = ref([])

const useApi = () => {
  const options = { headers: { 'app-id': '662ce09b690e96c95e7103b4' } }

  const getData = async (endpoint = '') => {
    let validEndpoint = endpoint
    if (endpoint.startsWith('/')) validEndpoint = endpoint.slice(1)

    const res = await axios.get(`https://dummyapi.io/data/v1/${validEndpoint}`, options)
    const resData = res.data
    data.value = resData
  }

  return { data, getData }
}

export default useApi
