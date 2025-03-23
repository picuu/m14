import axios from 'axios'

const axiosConfig = () => {
  axios.defaults.baseURL = 'https://analisi.transparenciacatalunya.cat'
  axios.defaults.headers.common['Accept'] = 'application/json'
}

export default axiosConfig
