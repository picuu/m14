import { api } from 'boot/axios'

const useApi = (data) => {
  const getData = async (endpoint = '', queryParams) => {
    const res = await api.get(endpoint, { params: { ...queryParams } })
    const resData = res.data
    data.value = resData
  }

  return { getData }
}

export default useApi
