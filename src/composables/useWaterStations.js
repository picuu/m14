import { ref } from 'vue'
import axios from 'axios'

const ENDPOINT = '/resource/gn9e-3qhr.json'
const stations = ref([])

const useWaterStations = (queryParams) => {
  const getStations = async () => {
    const res = await axios.get(ENDPOINT, { params: { ...queryParams } })
    const data = res.data
    stations.value = data
  }

  return { stations, getStations }
}

export default useWaterStations
