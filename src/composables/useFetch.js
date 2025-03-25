import axios from 'axios'
import { ref } from 'vue'

const API_URL = 'https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json'

const useFetch = () => {
  const data = ref([])

  const getData = async (queryParams) => {
    const res = await axios.get(API_URL, { params: { ...queryParams } })
    const resData = res.data
    data.value = resData
  }

  return { data, getData }
}

export default useFetch
