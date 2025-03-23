import { ref } from 'vue'
import axios from 'axios'

const API_URL = 'https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json'
const stations = ref([])

const useWaterStations = (queryParams) => {
  const getStations = async () => {
    const res = await axios.get(API_URL, { params: { ...queryParams } })
    const data = res.data
    stations.value = data
  }

  return { stations, getStations }
}

export default useWaterStations
